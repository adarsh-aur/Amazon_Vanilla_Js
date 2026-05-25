function Cart(localStorageKey) {
    const cart = {
        cartItems: undefined,

        loadFromStorage() {

            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey));

            if (!this.cartItems) {
                this.cartItems = [
                    {
                        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
                        quantity: 2,
                        deliveryOptionId: '1'
                    },
                    {
                        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
                        quantity: 1,
                        deliveryOptionId: '2'
                    }
                ];
            }
        },


        saveStorage() {
            localStorage.setItem(localStorageKey, JSON.stringify(this.cartItems));
        },

        addToCart(productId) {
            let quantity = document.querySelector(`.js-quantity-selector-${productId}`).value;
            let quantitySelector = Number(quantity);


            let matchingItem;

            this.cartItems.forEach((cartItem) => {
                if (productId === cartItem.productId) {
                    matchingItem = cartItem;
                }
            });

            if (matchingItem) {
                matchingItem.quantity = matchingItem.quantity + quantitySelector;
            }
            else {
                this.cartItems.push({
                    productId: productId,
                    quantity: quantitySelector,
                    deliveryOptionId: '1'
                })
            }

            this.saveStorage();
        },

        deleteProduct(productId) {
            const index = this.cartItems.findIndex((cartItem) => {
                return cartItem.productId === productId;
            });

            if (index != -1) {
                this.cartItems.splice(index, 1);
            }

            this.saveStorage();
        },

        updateCartQuantity() {
            let cartQuantity = 0;

            this.cartItems.forEach((item) => {
                cartQuantity += item.quantity;
            });

            //document.querySelector(".js-return-to-home-link").innerHTML = `${cartQuantity} items`;
            this.saveStorage();
        },


        updateQuantity(productId, quantityValue) {
            let matchingItem;

            this.cartItems.forEach((item) => {
                if (item.productId === productId) {
                    matchingItem = item;
                }
            });
            if (matchingItem) {
                matchingItem.quantity = quantityValue;
            }

            this.saveStorage();
        },


        updateDeliveryOption(productId, deliveryOptionId) {
            let matchingItem;
            this.cartItems.forEach((item) => {
                if (item.productId === productId) {
                    matchingItem = item;
                }
            });

            matchingItem.deliveryOptionId = deliveryOptionId;

            this.saveStorage();
        }
    };

    return cart;
}

const cart = Cart('cart-oop');
const cartBusiness = Cart('cart-business');

cart.loadFromStorage();
cartBusiness.loadFromStorage();

console.log(cart);
console.log(cartBusiness);