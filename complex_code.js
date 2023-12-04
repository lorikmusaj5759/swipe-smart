/**
 * filename: complex_code.js
 *
 * A complex code snippet showcasing various advanced JavaScript concepts and techniques.
 *
 * This code demonstrates a simplified online store management system, with features such as product
 * listing, filtering, sorting, adding to cart, and checking out.
 *
 * Note: This code is simplified for illustration purposes and may not cover all real-world scenarios.
 */

// Object representing a product in the store
class Product {
  constructor(id, name, price, category, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.stock = stock;
  }
}

// Array of products in the store
const products = [
  new Product(1, "Apple Watch", 399, "Electronics", 10),
  new Product(2, "Leather Wallet", 50, "Fashion", 25),
  new Product(3, "Wireless Earbuds", 99, "Electronics", 15),
  new Product(4, "T-Shirt", 20, "Fashion", 50),
  new Product(5, "Smartphone", 899, "Electronics", 5),
  // ... more products
];

// Array of products added to the cart
let cartItems = [];

// Function to display all products in the store
function displayProducts() {
  console.log("Available Products:");
  console.log("--------------------");
  for (const product of products) {
    console.log(`[${product.id}] ${product.name} - $${product.price} (${product.stock} in stock)`);
  }
  console.log("--------------------");
}

// Function to filter products by category
function filterProducts(category) {
  const filteredProducts = products.filter((product) => product.category === category);
  console.log(`Filtered Products - Category: ${category}`);
  console.log("--------------------");
  for (const product of filteredProducts) {
    console.log(`[${product.id}] ${product.name} - $${product.price} (${product.stock} in stock)`);
  }
  console.log("--------------------");
}

// Function to sort products by price (ascending or descending)
function sortProductsByPrice(sortOrder) {
  const sortedProducts = [...products].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );
  console.log(`Sorted Products - Price (${sortOrder.toUpperCase()})`);
  console.log("--------------------");
  for (const product of sortedProducts) {
    console.log(`[${product.id}] ${product.name} - $${product.price} (${product.stock} in stock)`);
  }
  console.log("--------------------");
}

// Function to add a product to the cart
function addToCart(productId, quantity) {
  const product = products.find((product) => product.id === productId);
  if (product && product.stock >= quantity) {
    const cartItem = { productId, quantity };
    cartItems.push(cartItem);
    product.stock -= quantity;
    console.log(`Added ${quantity}x [${product.id}] ${product.name} to the cart.`);
  } else {
    console.log("Product not found or insufficient stock.");
  }
}

// Function to remove a product from the cart
function removeFromCart(productId) {
  const cartItemIndex = cartItems.findIndex((cartItem) => cartItem.productId === productId);
  if (cartItemIndex !== -1) {
    const cartItem = cartItems[cartItemIndex];
    const product = products.find((product) => product.id === cartItem.productId);
    product.stock += cartItem.quantity;
    cartItems.splice(cartItemIndex, 1);
    console.log(`Removed [${product.id}] ${product.name} from the cart.`);
  } else {
    console.log("Product not found in the cart.");
  }
}

// Function to calculate the total price of items in the cart
function calculateCartTotal() {
  let total = 0;
  for (const cartItem of cartItems) {
    const product = products.find((product) => product.id === cartItem.productId);
    total += product.price * cartItem.quantity;
  }
  return total.toFixed(2);
}

// Function to check out the cart and complete the purchase
function checkoutCart() {
  const total = calculateCartTotal();
  console.log(`Successfully checked out the cart. Total amount: $${total}`);
  cartItems = [];
}

// Example usage of the above functions
displayProducts();
filterProducts("Electronics");
sortProductsByPrice("asc");
addToCart(1, 2);
addToCart(3, 1);
removeFromCart(1);
addToCart(5, 1);
checkoutCart();