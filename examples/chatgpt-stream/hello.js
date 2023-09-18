// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

module.exports = async function (params, context) {
  console.log('Received params:', params);

  const { question } = params;

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    // We need to send the body as a string, so we use JSON.stringify.
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: ` ${question}`,
        },
      ],
      temperature: 0,
      max_tokens: 1000,
      n: 1,
      // set stream as true to enable streaming
      stream: true,
    }),
  });

  return response.body;
};
