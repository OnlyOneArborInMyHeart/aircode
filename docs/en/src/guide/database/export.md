---
title: Data Export | AirCode Documentation
description: Export data by creating and running a cloud function.
---

# Data Export {#intro}

This document illustrates how to export data by creating a cloud function.
[[toc]]

For demonstration purposes, let's assume there is a table named `inventory` containing the following data:

```js
[
  { item: 'MacBook Air', qty: 15, info: { location: 'Beijing', color: 'Black' } },
  { item: 'MacBook Pro', qty: 35, info: { location: 'Tokyo', color: 'Silver' } },
  { item: 'iPhone 14', qty: 80, info: { location: 'New York', color: 'Blue' } },
  { item: 'iPhone SE', qty: 120, info: { location: 'London', color: 'Red' } },
  { item: 'iPad mini', qty: 95, info: { location: 'Beijing', color: 'Pink' } }
]
```

Data export can be achieved with the following code:

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

You can deploy this cloud function and access the online link to achieve data export.

