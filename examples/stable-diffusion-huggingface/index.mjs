// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import fetch from "node-fetch";

const API_URL =
  "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

const headers = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

export default async function (params, context) {
  const {caption, direct_output} = params;
  const response = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({inputs: caption}),
  });
  const result = await response.arrayBuffer();
  const buffer = Buffer.from(new Uint8Array(result));

  if(direct_output) {
    context.set('Content-type', 'image/png');
    return buffer;
  } else {
    const file = await aircode.files.upload(
      buffer,
      `${caption.replace(/\s/g,'-').slice(0, 24)}.png`
    );
    return {file};
  }
};
