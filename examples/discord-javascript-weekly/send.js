const aircode = require('aircode');
const axios = require('axios');
const discord = require('./discord');
const tools = require('./tools');

module.exports = async function (params, context) {
  
  // You need set environment variable "discordWebHook" which is your discord group webHook URL first.
  if (!process.env.discordWebHook) {
    const msg = 'Please set environment variable "discordWebHook" first.';
    console.log(msg);
    return { error: msg };
  }
  
  let url = 'https://javascriptweekly.com/issues/latest';
  
  // Retrieves the index location of the current message from the 'count' table using database methods
  const countTable = aircode.db.table('count');
  let countObj = await countTable.where().findOne();
  if (countObj) {
    url = `https://javascriptweekly.com/issues/${countObj.index}`;
  
    // Update the index and store it in the index table
    countObj.index++;
    await countTable.save(countObj);    
  }

  try {
    res = await axios({ url });
    const formatData = await tools.format(res.data);
    discord.sendToWebHook(formatData);
  } catch (err) {
    console.log(err);
    return err;
  }
  
  // The function must have a return
  return { error: 0 };
};
