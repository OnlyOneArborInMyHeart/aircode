const aircode = require('aircode');
const fetch = require('node-fetch');

// https://developer.voicemaker.in/apidocs
const defaultOptions = {
  'Engine': 'neural',
  'VoiceId': 'ai3-Jenny',
  'LanguageCode': 'en-US',
  'OutputFormat': 'mp3',
  'SampleRate': '48000',
  'Effect': 'default',
  'MasterSpeed': '0',
  'MasterVolume': '0',
  'MasterPitch': '0',
};

const endPoints = 'https://developer.voicemaker.in/voice/api';

async function transform(text, options = {}) {
  const auth = `Bearer ${process.env.vmToken}`;
  const headers = {
    'Authorization': auth,
    'Content-Type': 'application/json',
  };
  if(options.LanguageCode === 'zh-CN') {
    options.LanguageCode = 'cmn-CN';
  }
  const data = {
    ...defaultOptions,
    ...options,
    Text: text,
  };
  const res = await fetch(endPoints, {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });

  // console.log(data);

  return res.json();
}

module.exports = { transform };

