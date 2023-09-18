## ChatGPT-Stream

Easily get a copy and launch your app on [AirCode](https://aircode.io/) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=aircode&branch=main&path=examples%2Fchatgpt-stream&appname=ChatGPT%20Stream)

## Consume Stream from Frontend

After deploy, get the function url, run code to consume your stream:

```js
const axios = require('axios');

axios.post('https://123.us.aircode.run/hello', {
  question: "How to query database from aircode.db",
},  {
  responseType: 'stream'
})
  .then(response => {

    response.data.on('data', chunk => {
      console.log(chunk.toString());
    });
  })
  .catch(error => {
    console.error(error);
  });
```