// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';
import fetch from "node-fetch";

const API_URL =
  "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0";

const headers = {
  Authorization: `Bearer ${process.env.API_TOKEN}`,
};

const fileTable = aircode.db.table('_files');

export default async function (params, context) {
  let {caption, seed, direct_output} = params;
  seed = seed || Math.random();

  if(direct_output) context.set('Content-type', 'image/png');

  const cache = await fileTable.where({caption, seed}).findOne();
  if(cache) {
    if(direct_output) {
      const content = await aircode.files.download({
        _id: cache._id
      }, {
        dataType: 'buffer',
      });
      return content;
    }
    return {fromCache: true, file: cache};
  }
  
  const response = await fetch(API_URL, {
    headers,
    method: "POST",
    body: JSON.stringify({inputs: caption, seed}),
  });

  const result = await response.arrayBuffer();
  const buffer = Buffer.from(new Uint8Array(result));

  const uploadTask = aircode.files.upload(
    buffer,
    `${caption.replace(/\s/g,'-').slice(0, 24)}.png`,
    {
      additions: {
        caption,
        seed,
      }
    }
  );

  if(direct_output) {
    return buffer;
  } else {
    const file = await uploadTask;
    return {file};
  }
};
