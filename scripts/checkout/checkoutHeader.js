import { cart } from "../../data/cart.js";

export function renderCheckoutHeader() {

    let quantity = 0;

    cart.forEach((item) => {
        quantity += item.quantity;
    });

    const html = `
    <div class="header-content" style="padding-top: 15px;">
        <div class="checkout-header-left-section">
          <a href="amazon.html">
            <img class="amazon-logo" src="images/amazon-logo.png">
            <img class="amazon-mobile-logo" src="images/amazon-mobile-logo.png">
          </a>
        </div>

        <div class="checkout-header-middle-section" style="padding-bottom: 8px;">
          Checkout (<a class="return-to-home-link js-return-to-home-link"
            href="amazon.html">${quantity} items</a>)
        </div>

        <div class="checkout-header-right-section">
          <img src="images/icons/checkout-lock-icon.png">
        </div>
    </div> `

    document.querySelector(".js-checkout-header").innerHTML = html;
}