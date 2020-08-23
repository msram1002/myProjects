const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "tz4jsevhulxx",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "66stKsVRRGOczO8VXgtseYk87E9gCC2ugtMMiPt_jaM"
});

// declaring variables
const cartBtn = document.querySelector('.cart-btn');
const cartItems = document.querySelector('.cart-items');
const closeCartBtn = document.querySelector('.close-cart');
const clearCartBtn = document.querySelector('.clear-cart');
const cartDOM = document.querySelector('.cart');
const cartOverlay = document.querySelector('.cart-overlay');
const cartTotal = document.querySelector('.cart-total');
const cartContent = document.querySelector('.cart-content');
const productDOM = document.querySelector('.products-center');
// cart
let cart = [];
// buttons
let buttonsDOM = [];
// getting the products
class Products {
    async getProducts() {
        try {

            let contentFul = await client.getEntries({
                // adding the CONTENT TYPE ID to retrieve everything 
                // related to this comfyHouse products content via API.
                content_type: 'comfyHouseProducts'
            });
            // Commenting out Local Data
            // let result = await fetch('products.json');
            // let data = await result.json();
            // let products = data.items;
            let products = contentFul.items;
            products = products.map(item => {
                const {
                    title,
                    price
                } = item.fields;
                const {
                    id
                } = item.sys;
                const image = item.fields.image.fields.file.url;
                return {
                    title,
                    price,
                    id,
                    image
                }
            });
            return products;
        } catch (error) {
            console.log(error);
        }
    }
}
// display the products
class UI {
    displayProducts(products) {
        let resultProduct = '';
        products.forEach(product => {
            resultProduct += `
            <article class="product">
                <div class="img-container">
                    <img src="${product.image}" alt ="product"
                    class="product-img">
                    <button class="addto-cart-btn" data-id=${product.id}>
                        <i class="fas fa-shopping-cart"></i>
                            Add to Cart
                    </button> 
                </div> 
                <h3>${product.title}</h3> 
                <h4>$${product.price}</h4> 
            </article>`;
        });
        productDOM.innerHTML = resultProduct;
    }
    getAddtoCartButtons() {
        // spread operator gets the output in an array
        // instead of a nodeList
        const addtoCartbtns = [...document.querySelectorAll('.addto-cart-btn')];
        // assigning the list to buttonsDOM
        buttonsDOM = addtoCartbtns;
        addtoCartbtns.forEach(addtoCartbtn => {
            let id = addtoCartbtn.dataset.id;
            // check if item is in cart or not using id
            let inCart = cart.find(item => item.id === id);
            if (inCart) {
                addtoCartbtn.innerText = "In Cart";
                addtoCartbtn.disabled = true;
            }
            // attach click event listener to add to cart buttons
            addtoCartbtn.addEventListener('click', (event) => {
                event.target.innerText = "In Cart";
                event.target.disabled = true;
                // now get the product from localStorage products
                // add the extra amount using spread operator
                let cartItem = {
                    ...Storage.getProduct(id),
                    amount: 1
                };
                // save this cartItem to the cart array
                cart = [...cart, cartItem];
                // Upon refresh we need to have this list again
                // so saving in localStorage
                Storage.saveCartItems(cart);
                // Update the cart count
                this.setCartValues(cart);
                // Display the cart item
                this.addCartItem(cartItem);
                // show the cart when we click on the icon
                this.showCart();
            })
        })
    }
    setCartValues(cart) {
        let tempTotal = 0;
        let itemsTotalinCart = 0;
        cart.map(cartItem => {
            tempTotal += cartItem.price * cartItem.amount;
            itemsTotalinCart += cartItem.amount;
        });
        // Using parseFloat for the multiplication
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2));
        cartItems.innerText = itemsTotalinCart;
    }
    addCartItem(item) {
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <img src="${item.image}" alt="cart-product">
                <div>
                    <h5>${item.title}</h5>
                    <span class = "remove-item" data-id=${item.id}>remove</span>
                </div>
                <div>
                    <i class="fas fa-chevron-up" data-id=${item.id}></i>
                    <p class="item-amount">${item.amount}</p>
                    <i class="fas fa-chevron-down" data-id=${item.id}></i>
                </div>`;
        cartContent.appendChild(div);
    }
    showCart() {
        cartOverlay.classList.add('transparentBcg');
        cartDOM.classList.add('showCart');
    }
    hideCart() {
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart');
    }
    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item))
    }
    setupAPP() {
        cart = Storage.getCartItems();
        this.setCartValues(cart);
        this.populateCart(cart);
        cartBtn.addEventListener('click', this.showCart);
        closeCartBtn.addEventListener('click', this.hideCart);
    }
    cartLogic() {
        // clearing of cart using Clear Cart button
        // Need to bind clearCart to this UI, we use the arrow function
        clearCartBtn.addEventListener('click', () => {
            this.clearCart();
        });
        // cart functionality for individual items
        // for removing, increasing/ decreasing count
        cartContent.addEventListener('click', event => {
            if (event.target.classList.contains('remove-item')) {
                let removeItem = event.target;
                this.removeCartItem(removeItem.dataset.id);
                // Remove also from cartContent DOM
                // Using event bubbling to access parent item of parent
                cartContent.removeChild(removeItem.parentElement.parentElement);
            } else if (event.target.classList.contains('fa-chevron-up')) {
                let addAmount = event.target;
                // getting the item from cart variable
                let addItem = cart.find(item => item.id === addAmount.dataset.id);
                // update the item count as we have seperate amount property
                addItem.amount += 1;
                // update to storage as amount has been updated
                Storage.saveCartItems(cart);
                // update DOM to reflect the total items in cart 
                // and total amount under cart total
                this.setCartValues(cart);
                // update individual item count
                addAmount.nextElementSibling.innerText = addItem.amount;
            } else if (event.target.classList.contains('fa-chevron-down')) {
                let lowerAmount = event.target;
                // getting the item from cart variable
                let lowerItem = cart.find(item => item.id === lowerAmount.dataset.id);
                // lower the item count as we have seperate amount property
                lowerItem.amount -= 1;
                // if item count reaches zero, adding additional logic
                // to remove the item from Cart Content DOM as well
                if (lowerItem.amount > 0) {
                    // update to storage as amount has been updated
                    Storage.saveCartItems(cart);
                    // update DOM to reflect the total items in cart 
                    // and total amount under cart total
                    this.setCartValues(cart);
                    // update individual item count
                    lowerAmount.previousElementSibling.innerText = lowerItem.amount;
                } else {
                    this.removeCartItem(lowerAmount.dataset.id);
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                }
            }
        })
    }
    clearCart() {
        // Need to know the id of items we are clearing
        let cartItemsCleared = cart.map(item => item.id);
        cartItemsCleared.forEach(id => this.removeCartItem(id));
        // Remove the items from Cart DOM
        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }
        // Finally hiding the cart after clearing the cart
        this.hideCart();
    }
    removeCartItem(id) {
        // get the cart elements, filtering all which doesnt match the id
        cart = cart.filter(item => item.id !== id);
        // update the cart count and totals
        this.setCartValues(cart);
        // update in local storage, the current cart
        Storage.saveCartItems(cart);
        // Need to add the 'Add to cart' text
        let button = this.getSingleButton(id);
        button.disabled = false;
        button.innerHTML = `<i class="fas fa-shopping-cart"></i>Add to Cart`;
    }
    getSingleButton(id) {
        return buttonsDOM.find(btn => btn.dataset.id === id);
    }
}
// local storage
class Storage {
    // static method can be used without instantiating the class
    static saveProducts(prodArray) {
        localStorage.setItem("products", JSON.stringify(prodArray));
    }
    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem('products'));
        return products.find(products => products.id === id);
    }
    static saveCartItems(cartArray) {
        localStorage.setItem("cart", JSON.stringify(cartArray));
    }
    static getCartItems() {
        // ternary operator
        return localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    }
}
// Event Listener
document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI();
    const products = new Products();
    // set up the application (also upon refresh) 
    ui.setupAPP()
    // get all the products
    products.getProducts().then(proddata => {
        ui.displayProducts(proddata);
        Storage.saveProducts(proddata);
    }).then(() => {
        // calling the method after the products have been displayed
        ui.getAddtoCartButtons();
        ui.cartLogic();
    });
});