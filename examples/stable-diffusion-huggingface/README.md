# Run Stable Diffusion Model with Huggingface

## Online Demo:

[Click me to generate a picture](https://5rg3bjkd6z.us.aircode.run/index?direct_output=1&seed=100&caption=approaching%20perfection,%20dynamic,%20highly%20detailed,%20artstation,%20concept%20art,%20smooth,%20sharp%20focus,%20illustration,%20art%20by%20Artemisia%20Gentileschi,%20a%20beautiful%20the%20cloud%20elf%20queen%20busks%20on%20the%20streets%20of%20new%20york,%20playing%20guitar,%20singing)

### Request Parameters

- direct_output: If the `direct_output` parameter is set to `1`, the request will directly return the binary data of the image; otherwise, it will return JSON data with the image URL.
- seed: The `seed` parameter is used as the numerical value for the random seed in Stable Diffusion.
- caption: The Stable Diffusion Prompts.

__Note: This example will cache the image in AirCode's built-in database based on the caption and seed, so that it can be quickly retrieved when the user accesses it with the same parameters next time.__

## Quick Started

1. Get a copy of the sample project:

  - You can easily get a copy and launch your app on [AirCode](https://aircode.io/) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=aircode&branch=main&path=examples%2Fshopify-to-google-spreadsheets&appname=shopify%20to%20google%20spreadsheets)

2. Setting environments

<img src="https://aircode-yvo.b-cdn.net/resource/1695368402924-elmp34k54l.jpg" width="300">

You can obtain an API token by signing up on the [Hugging Face website](https://huggingface.co/).

3. Click the `Deploy` button to deploy your project online.

## One-Click Deployment

Easily get a copy and launch your app on [AirCode](https://aircode.io/) by clicking the button below.

[![Deploy with AirCode](https://aircode.io/aircode-deploy-button.svg)](https://aircode.io/dashboard?owner=AirCodeLabs&repo=aircode&path=examples%2Fstable-diffusion-huggingface&appname=stable%20diffusion%20huggingface)