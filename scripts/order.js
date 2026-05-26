import { orders } from "../data/orders.js";
import { getProduct, loadProductsFetch } from "../data/products.js";

async function renderPage() {
  await loadProductsFetch();
  renderOrdersPage();
}

renderPage();

function renderOrdersPage() {
  const ordersGrid = document.querySelector(".js-orders-grid");

  let ordersHTML = "";

  orders.forEach((order) => {
    ordersHTML += `
      <div class="order-container">
        ${renderOrderHeader(order)}
        <div class="order-details-grid">
          ${renderOrderItems(order)}
        </div>
      </div>
    `;
  });

  ordersGrid.innerHTML = ordersHTML;
}

function renderOrderHeader(order) {
  const orderDate = new Date(order.orderTime).toLocaleDateString();

  return `
    <div class="order-header">
      <div class="order-header-left-section">
        <div class="order-date">
          <div class="order-header-label">Order Placed:</div>
          <div>${orderDate}</div>
        </div>

        <div class="order-total">
          <div class="order-header-label">Total:</div>
          <div>$${(order.totalCostCents / 100).toFixed(2)}</div>
        </div>
      </div>

      <div class="order-header-right-section">
        <div class="order-header-label">Order ID:</div>
        <div>${order.id}</div>
      </div>
    </div>
  `;
}

function renderOrderItems(order) {
  let html = "";

  (order.products || []).forEach((item) => {
    const product = getProduct(item.productId);

    if (!product) {
        console.warn("Missing product:", item.productId);
        return;
      }

    html += `
      <div class="product-image-container">
        <img src="${product.image}">
      </div>

      <div class="product-details">
        <div class="product-name">
          ${product.name}
        </div>

        <div class="product-quantity">
          Quantity: ${item.quantity}
        </div>
      </div>

      <div class="product-actions">
        <a href="tracking.html?orderId=${order.id}&productId=${product.id}">
          <button class="track-package-button button-secondary">
            Track package
          </button>
        </a>
      </div>
    `;
  });

  return html;
}