/*  sophisticated_code.js
    This code is a complex implementation of a shopping cart system for an E-commerce website.
    It includes features such as adding and removing items, calculating total price, applying discounts, and checking out.
*/

// Product class to represent each item in the shopping cart
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// Shopping cart class
class ShoppingCart {
    constructor() {
        this.items = [];
        this.totalPrice = 0;
    }

    // Add an item to the shopping cart
    addItem(item) {
        this.items.push(item);
        this.totalPrice += item.price;
    }

    // Remove an item from the shopping cart
    removeItem(item) {
        const index = this.items.findIndex(i => i.name === item.name);
        if (index !== -1) {
            this.items.splice(index, 1);
            this.totalPrice -= item.price;
        }
    }

    // Calculate total price with applied discounts
    calculateTotalPrice(discountPercent) {
        const discount = this.totalPrice * (discountPercent / 100);
        const totalPriceAfterDiscount = this.totalPrice - discount;
        return totalPriceAfterDiscount.toFixed(2);
    }

    // Checkout and empty the shopping cart
    checkout() {
        console.log("Checking out...");
        this.items = [];
        this.totalPrice = 0;
        console.log("Thank you for your purchase!");
    }
}

// Usage example
const cart = new ShoppingCart();

const item1 = new Product("Product 1", 10.99);
const item2 = new Product("Product 2", 19.99);
const item3 = new Product("Product 3", 7.99);

cart.addItem(item1);
cart.addItem(item2);
cart.addItem(item3);

console.log("Items in Shopping Cart:");
console.log(cart.items);

console.log("Total Price: $" + cart.totalPrice.toFixed(2));

cart.removeItem(item2);

console.log("Items in Shopping Cart after removing Product 2:");
console.log(cart.items);

console.log("Total Price after applying 10% discount: $" + cart.calculateTotalPrice(10));

cart.checkout();

/* Output:
Items in Shopping Cart:
[Product { name: 'Product 1', price: 10.99 },
 Product { name: 'Product 2', price: 19.99 },
 Product { name: 'Product 3', price: 7.99 }]
Total Price: $38.97
Items in Shopping Cart after removing Product 2:
[Product { name: 'Product 1', price: 10.99 },
 Product { name: 'Product 3', price: 7.99 }]
Total Price after applying 10% discount: $17.08
Checking out...
Thank you for your purchase!
*/