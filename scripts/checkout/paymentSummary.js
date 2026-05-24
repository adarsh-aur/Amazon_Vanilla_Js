import { cart } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/delivery.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
    let productPriceCents = 0;
    let deliveryPriceCents = 0;
    let cartQuantity = 0;

    cart.forEach((item) => {
        const matchingProduct = getProduct(item.productId);
        productPriceCents += (matchingProduct.priceCents * item.quantity);

        const selectedDeliveryOption = getDeliveryOption(item.deliveryOptionId);
        deliveryPriceCents += selectedDeliveryOption.priceCents;

        cartQuantity += item.quantity;
    });

    const totalPriceCents = (productPriceCents + deliveryPriceCents);
    const taxPriceCents = totalPriceCents * 0.1;
    const totalPriceWithTaxCents = taxPriceCents + totalPriceCents;

    const html = `
        <div class="payment-summary">
          <div class="payment-summary-title">
            Order Summary
          </div>

          <div class="payment-summary-row">
            <div>Items (${cartQuantity}):</div>
            <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(deliveryPriceCents)}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(totalPriceCents)}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(taxPriceCents)}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(totalPriceWithTaxCents)}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>
        `;
    document.querySelector(".js-payment-summary").innerHTML = html;
}