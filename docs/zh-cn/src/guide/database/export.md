---
title: 数据导出 | AirCode 文档
description: 通过创建并运行一个云函数实现数据库数据导出。
---

# 数据导出 {#intro}

本文档将通过示例说明如何通过创建一个云函数的方式来进行数据库数据的导出。 
[[toc]]

为了便于演示，我们假定有一张名为 `inventory` 的数据表，包含以下数据：

```js
[
  { item: 'MacBook Air', qty: 15, info: { location: 'Beijing', color: 'Black' } },
  { item: 'MacBook Pro', qty: 35, info: { location: 'Tokyo', color: 'Silver' } },
  { item: 'iPhone 14', qty: 80, info: { location: 'New York', color: 'Blue' } },
  { item: 'iPhone SE', qty: 120, info: { location: 'London', color: 'Red' } },
  { item: 'iPad mini', qty: 95, info: { location: 'Beijing', color: 'Pink' } }
]
```

我们可以通过如下代码实现数据导出：

```js
const aircode = require('aircode');

module.exports = async function(params, context) {
  // Use `aircode.db.table` to get a table
  const InventoryTable = aircode.db.table('inventory');
  // Find all records in the table
  const allRecords = await InventoryTable
    .where()
    .find();

  return allRecords;
}
```

可以通过部署该云函数，访问线上链接实现数据导出。