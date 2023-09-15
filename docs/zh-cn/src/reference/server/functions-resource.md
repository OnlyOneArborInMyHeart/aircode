---
title: 静态资源请求 | AirCode 文档
description: AirCode 默认支持静态资源文件目录，目录下的文件可以直接请求。
---

# 静态资源请求 {#public-resource}

如果你有静态文件需要被部署，可以将它放在 `public` 目录下。AirCode 默认将 `public` 目录下的内容发布为静态资源。

::: tip 提示
发布后的 URL 忽略 `public` 路径。假设你有一个文件 `public/a.js`，那么当项目部署后，你可以通过 URL `/a.js` 直接访问到这个文件。`public` 目录下的 js 文件不会被编译为云函数，因此你不能试图通过访问 `/public/a` 来访问云函数 `a.js`。
:::