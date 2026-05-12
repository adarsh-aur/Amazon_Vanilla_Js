export let cart = JSON.parse(localStorage.getItem('cart'));

if (!cart) {
    cart = [
        {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 2
        },
        {
            productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
            quantity: 1
        }
    ];
}

function saveStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

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

    saveStorage();
}

export function deleteProduct(productId) {
    const index = cart.findIndex((cartItem) => {
        return cartItem.productId === productId;
    });

    if (index != -1) {
        cart.splice(index, 1);
    }

    saveStorage();
}

export function updateCartQuantity() {
    let cartQuantity = 0;

    cart.forEach((item) => {
        cartQuantity += item.quantity;
    });

    document.querySelector(".js-return-to-home-link").innerHTML = `${cartQuantity} items`;
    saveStorage();
}

export function updateQuantity(productId, quantityValue){
    let matchingItem;

    cart.forEach((item) => {
        if (item.productId === productId){
            matchingItem = item;
        }
    });
    if (matchingItem) {
        matchingItem.quantity = quantityValue;
    }

    saveStorage();
}