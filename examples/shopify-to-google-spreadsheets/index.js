// @see https://docs.aircode.io/guide/functions/
const aircode = require('aircode');

// https://github.com/MONEI/Shopify-api-node
const Shopify = require('shopify-api-node');

const {google} = require('googleapis');

const {formatOrderData, formatCustomerData, formatProductData} = require('./lib/helpers');

module.exports = async function (params, context) {
  const shopify = new Shopify({
    shopName: 'aircode-sample',
    accessToken: process.env.SHOPIFY_TOKEN,
  });

  // get customer lists
  const customers = await shopify.customer.list();

  // get product lists
  const products = await shopify.product.list();
  
  // get order lists
  const orders = await shopify.order.list();

  const auth = new google.auth.GoogleAuth({
    keyFile: 'credentials.json',
    scopes: 'https://www.googleapis.com/auth/spreadsheets',
  });

  // Create client instance for auth
  const client = await auth.getClient();

  // Instance of Google Sheets API
  const googleSheets = google.sheets({version: 'v4', auth: client});

  const spreadsheetId = process.env.SPREAD_SHEET_ID;

  const tasks = [formatCustomerData(customers)
                 , formatProductData(products)
                 , formatOrderData(orders)].map(({range, values}) => {
    return googleSheets.spreadsheets.values.update({
      auth,
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      resource: {values},
    });
  });

  const result = await Promise.all(tasks);
  
  return {
    result,
  };
};
