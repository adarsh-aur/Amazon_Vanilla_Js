import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { renderCheckoutHeader } from "../scripts/checkout/checkoutHeader.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
// import "../data/cart-class.js";
// import "../data/backend-practice.js";

async function loadPage() {
    try {
        // throw 'error1';
        
        console.log('load page');
        await loadProductsFetch();

    } catch (error) {
        console.log('error loading the products', error);
    }

    renderCheckoutHeader();
    renderOrderSummary();
    renderPaymentSummary();
}

loadPage();

// loadProductsFetch().then(() => {
//     renderCheckoutHeader();
//     renderOrderSummary();
//     renderPaymentSummary();
// });