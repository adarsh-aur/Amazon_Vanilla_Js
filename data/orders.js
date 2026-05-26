export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order) {
  const exists = orders.some(o => o.id === order.id);

  if (exists) return;

  orders.unshift(order);
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('orders', JSON.stringify(orders));
}