import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "../scripts/checkout/checkoutHeader.js";
// import "../data/cart-class.js"; 


renderCheckoutHeader();

renderOrderSummary();

renderPaymentSummary();