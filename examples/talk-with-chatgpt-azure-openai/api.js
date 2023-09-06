const {chat} = require('./lib/chat');

module.exports = async function (params, context) {
  const {cid, question} = params;

  return await chat({question, cid});
};
