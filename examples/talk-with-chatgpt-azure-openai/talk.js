const {parse} = require('node:url');
const path = require('node:path');
const {db, files} = require('aircode');
const uploadFile = require('./lib/bunny-api'); 

const { transform } = require('./lib/voice-marker');
const fetch = require('node-fetch');

const {chat} = require('./lib/chat');

const serviceURL = 'https://ap-gate-z0.qiniuapi.com/voice/v2/tts';

module.exports = async (params, context) => {
  const {question, cid, vid, lang} = params;
  const {content, error} = await chat({question, cid});

  if(error) {
    context.status(500);
    return {error};
  }

  const res = await transform(content, { VoiceId: vid, LanguageCode: lang });
  res.result = {reply: content};

  if(res.success) {
    let url = res.path;
    const buffer = await (await fetch(url)).arrayBuffer();
    const filename = path.basename(parse(url).pathname);
    const {url:uploadUrl} = await uploadFile(Buffer.from(buffer), filename);

    if(uploadUrl) {
      res.result.audioUrl = uploadUrl;
    }
  }

  return res;
};