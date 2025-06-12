const products = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    price: 10,
    currency: "Kshs",
    image: "assets/tomatoes.jpg"
  },
  {
    id: 2,
    name: "Bananas",
    price: 10,
    currency: "Kshs",
    image: "assets/bananas.jpg"
  },
  {
    id: 3,
    name: "Carrots",
    price: 5,
    currency: "Kshs",
    image: "assets/carrots.jpg"
  },
  {
    id: 4,
    name: "Spinach",
    price: 10,
    currency: "Kshs",
    image: "assets/spinach.jpg"
  },
  {
    id: 5,
    name: "Eggplant",
    price: 20,
    currency: "Kshs",
    image: "assets/Eggplant.jpg"
  },
  {
    id: 6,
    name: "Apples",
    price: 30,
    currency: "Kshs",
    image: "assets/apples.jpg"
  },
  {
    id: 7,
    name: "Oranges",
    price: 20,
    currency: "Kshs",
    image: "assets/oranges.jpg"
  },
  {
    id: 8,
    name: "Grapes",
    price: 15,
    currency: "Kshs",
    image: "assets/grapes.jpg"
  },
  {
    id: 8,
    name: "Onions",
    price: 15,
    currency: "Kshs",
    image: "assets/onions.jpg"
  }
];

let cart = [];

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  const item = cart.find(i => i.id === productId);

  if (item) {
    item.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

function removeFromCart(productId) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity--;
    if (item.quantity <= 0) {
      cart = cart.filter(i => i.id !== productId);
    }
  }
  updateCart();
}

function updateCart() {
  const cartContainer = document.getElementById("cart");
  const count = document.getElementById("cart-count");
  cartContainer.innerHTML = "<h2>Shopping Cart</h2>";
  let total = 0;
  let totalItems = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    totalItems += item.quantity;

    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${item.name}</strong> - ${item.quantity} x ${item.price} ${item.currency}
      <button onclick="addToCart(${item.id})">+</button>
      <button onclick="removeFromCart(${item.id})">-</button></p>
    `;
    cartContainer.appendChild(div);
  });

  const totalDiv = document.createElement("div");
  totalDiv.innerHTML = `<strong>Total: ${total} Kshs</strong>`;
  cartContainer.appendChild(totalDiv);
  count.textContent = totalItems;
}

function renderProducts() {
  const list = document.getElementById("product-list");
  list.innerHTML = "";
  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} ${product.currency}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    list.appendChild(div);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCart();
});
