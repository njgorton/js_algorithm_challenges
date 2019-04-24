// A silly pre-lecture exercise for a udemy course...

//Implement a cart feature:
// 1. Add items to cart.
// 2. Add 3% tax to item in cart
// 3. Buy item: cart --> purchases
// 4. Empty cart

const user = {
    name: 'Kim',
    active: true,
    cart: [],
    purchases: [],
    total: 0
}

const item = {
    name: 'laptop',
    price: 100
}

function addToCart() {
    user.total = item.price;
    user.cart.push(item);
}

function addTax() {
    user.total = user.total * 1.03;
}

function buyItem() {
    user.purchases.push(user.cart[0]);
}

function emptyCart() {
    user.cart = [];
    user.total = 0;
}

function purchaseItem() {
   addToCart();
   addTax();
   buyItem();
   emptyCart(); 
}

purchaseItem();
console.log(user);