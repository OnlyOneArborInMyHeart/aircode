const fetch = require('node-fetch');
const { v4: uuidv4 } = require('uuid');

const { db } =require('aircode');
const chatTable = db.table('chat');

const MAX_MESSAGES_PER_CHAT = 40;
const DEFAULT_SYSTEM_CONTENT = 'You are a helpful assistant.';

const {env} = process;

const apiUrl = `${env.AZURE_OPENAI_ENDPOINT}/openai/deployments/${env.AZURE_OPENAI_DEPLOYMENT}/chat/completions?api-version=2023-07-01-preview`;

const headers = {
  'Content-Type': 'application/json',
  'api-key': env.AZURE_OPENAI_KEY,
};

async function chat({
  question,
  cid,
  systemContent = DEFAULT_SYSTEM_CONTENT,
  maxMessages = MAX_MESSAGES_PER_CHAT
}) {
  // Create a chat ID if not provided
  const chatId = cid ? cid : uuidv4();

  // Save user's question to the chatTable
  await chatTable.save({ chatId, role: 'user', content: question });

  // Retrieve chat history
  const chats = await chatTable.where({ chatId })
    .sort({ createdAt: -1 })
    .projection({_id: false, role: true, content: true})
    .limit(maxMessages)
    .find();

  // Construct message array for ChatGPT
  const messages = [
    { role: 'system', content: systemContent },
    ...chats.reverse(),
  ];

  const res = await fetch(apiUrl, {
    method: 'POST',
    headers,
    body: JSON.stringify({messages}),
  });

  const reply = await res.json();
  if(!reply.error && reply.choices && reply.choices[0]) {
    const {message} = reply.choices[0];
    await chatTable.save({ chatId, ...message});

    return message;
  } else {
    const error = reply.error || {message: 'server error'};
    return {error};
  }
}

module.exports = {chat};