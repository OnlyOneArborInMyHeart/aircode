---
title: Static Resource Requests | AirCode Docs
description: AirCode supports static resource files by default, and files in the directory can be directly requested.
---

# Static Resources {#public-resource}

If you have static files that need to be deployed, you can place them in the `public` directory. AirCode automatically deploys all the contents of the `public` directory as static resources.

::: tip Tips
The deployed URL ignores the `public` path. Suppose you have a file `public/a.js`. After the project is deployed, you can directly access this file through the URL `/a.js`. JavaScript files in the public directory are **NOT** compiled into cloud functions, so you cannot attempt to access the cloud function `a.js` by visiting `/public/a`.
:::
