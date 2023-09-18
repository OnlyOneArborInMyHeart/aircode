# Sync Shopify data to Google Spreadsheets

This example shows how to use AirCode to sync your [shopify](https://www.shopify.com/) data to a shared google spreadsheet.

Before you started, make sure you have the following:

- A [Google Cloud account](https://cloud.google.com/?hl=en)
- A [Shopify Partners account](https://www.shopify.com/partners)
- A [development store](https://help.shopify.com/en/partners/dashboard/managing-stores/development-stores)

## Quick Started

### Step 1: seting up your google spreadsheet.

1. Create a project in your google cloud account, then open the project's console:

  -  Click the APIs & Services Card 

<img src="https://aircode-yvo.b-cdn.net/resource/1-87a6jcmyqhn.jpg" width="350">

2. Click the Credentials in APIs & Services Page

  - Click the `CREATE CREDENTIALS` button and create a `Service account`.
  - When the new credentials created, copy the email show in the service accounts.

<img src="https://aircode-yvo.b-cdn.net/resource/2-bc7bw4blawh.png" width="450">

3. Click the `Edit` button on the right side of the service account email.

  - At Service Edit Page, switch to the `KEYS` tab and click `ADD KEY`.

<img src="https://aircode-yvo.b-cdn.net/resource/3-z528pvdpqgb.png" width="450">

  - By default, use JSON key and click `CREATE` button. 

<img src="https://aircode-yvo.b-cdn.net/resource/7-o2elhv212vl.jpg" width="350">

  - When the `KEY` is created, the browser will automatically download a JSON file.

<img src="https://aircode-yvo.b-cdn.net/resource/8-brke2kbvpd.jpg" width="350">

 - You should save the json file content, and use it later in the AirCode project.

4. Go to the [Google Sheets](https://docs.google.com/spreadsheets/u/0/) Page and create a new spreadsheet.

 - You can copy the header of the sheets from this [template file](https://docs.google.com/spreadsheets/d/1LM-I8OPEDobtdNowhS5eUTkA_6k8N9eSkcj4rUetkdA/edit#gid=859290484).

5. Click the `Share` button of the spreadsheet you created.

  - Add your service accounts email just created before.

 <img src="https://aircode-yvo.b-cdn.net/resource/4-6t8ey7topss.jpg" width="350">

 These are all the steps for setting up Google API.

 ### Step 2: seting up your shopify store.

1. Go to the dashboard of your [Shopify Partners account](https://www.shopify.com/partners), create a new store, or use an existing one.

2. Go to the admin console of your store.

  - Click the `Settings > Apps and sales channels`
  - Then click the `Develop apps` button.

  <img src="https://aircode-yvo.b-cdn.net/resource/5-4k6k69ozzh9.jpg" width="400">

3. Setting up your shopify app:

  - Switch to `Configuration Tab`, add access permission of  `read_orders`, `read_products` and `read_customers`.

<img src="https://aircode-yvo.b-cdn.net/resource/6-w7n9l9d44w9.jpg" width="400">

  - Switch to `API Crendentials` Page

<img src="https://aircode-yvo.b-cdn.net/resource/9-9o3ipv6aqgo.jpg" width="400">

  - Create and copy the Admin API access Token. NOTE that you can only view and copy the token once.
  - Please keep your token safe; we will need it in the upcoming Aircode project.


### Step 3: Setting up your AirCode Project.

1. Get a copy of the sample project:

  - You can easily get a copy and launch your app on [AirCode](https://aircode.io/) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=aircode&branch=main&path=examples%2Fshopify-to-google-spreadsheets&appname=shopify%20to%20google%20spreadsheets)

2. Open the project and set two Environments:

  - SHOPIFY_TOKEN: The shopify admint api access token you just created.
  - SPREAD_SHEET_ID: The google spreadsheet' ID.

<img src="https://aircode-yvo.b-cdn.net/resource/10-kf8o51gk278.jpg" width="450">

3. Open the `credentials.json` file, now it's a empty json.

  - Copy the content of the google cloud api credentials file you just download.

<img src="https://aircode-yvo.b-cdn.net/resource/11-xh0roq8lyri.jpg">

4. Create a schedule job that runs every miniute.

<img src="https://aircode-yvo.b-cdn.net/resource/13-j7vjbtf9qp.jpg" width="450">

5. Click the `Deploy` button to deploy your project online.

<img src="https://aircode-yvo.b-cdn.net/resource/1695007554262-d7k1dpntdxm.jpg" width="450">

:tada: Now you successfully get your shopify store data sync to the google spreadsheet you shared.