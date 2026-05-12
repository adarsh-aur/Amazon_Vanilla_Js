export const cart = [];

export function addToCart(productId) {
    let quantity = document.querySelector(`.js-quantity-selector-${productId}`).value;
    let quantitySelector = Number(quantity);


    let matchingItem;

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity = matchingItem.quantity + quantitySelector;
    }
    else {
        cart.push({
            productId: productId,
            quantity: quantitySelector
        })
    }
}