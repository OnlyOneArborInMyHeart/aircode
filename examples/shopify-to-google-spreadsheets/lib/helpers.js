function getRange(sheetName, data) {
  if(data.length <= 0 || data[0].length <= 0) {
    return `${sheetName}!A2:A2`;
  }
  const rows = data.length;
  const cols = data[0].length;
  if(cols > 26) throw new Error('Too many columns');
  const end = `${String.fromCharCode(64 + cols)}${rows+1}`;

  return `${sheetName}!A2:${end}`;
}

function formatOrderData(orders) {
  const values = orders.map((order) => {
    return [
      order.order_number,
      order.name,
      `${order.customer?.first_name} ${order.customer?.last_name}`,
      order.customer?.email,
      order.customer?.phone,
      order.total_price,
      order.tags,
      order.line_items.map(l => l.id).join(),
      order.created_at,
      order.processed_at,
      order.updated_at,
      order.order_status_url,
    ];
  });
  return {range: getRange('Orders', values), values};
}

function formatCustomerData(customers) {
  const values = customers.map((customer) => {
      return [
         `${customer?.first_name} ${customer?.last_name}`,
        customer.email,
        customer.phone,
        customer.tags,
      ];
  });
  return {range: getRange('Customers', values), values};
}

function formatProductData(products) {
  const values = products.map((product) => {
    return [
      product.id,
      product.title,
      product.body_html,
      product.vendor,
      product.status,
    ];
  });
  return {range: getRange('Products', values), values};
}

module.exports = {
  formatOrderData,
  formatCustomerData,
  formatProductData,
};