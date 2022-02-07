import { store } from "./shop";
console.log(store);
const DOMSelectors = {
    all: document.getElementById("all"),
    outofstock: document.getElementById("featured"),
    shoes: document.getElementById("shoes"),
    jewelry: document.getElementById("jewelry"),
    checkbox: document.querySelector('.checkbox'),
    shop: document.querySelector('.storedisplay'),
    featured: document.querySelector('.home'),
    card: document.querySelector('.card'),
    price: document.querySelector('.price'),
}

window.addEventListener("DOMContentLoaded", function() {
    displayItems(store);
});

function displayItems(store) {
    let displayStore = store.map(function(item) {
      return `<article class="card p-20 bg-white">
        <h2 class="itemname text-center p-4 bg-white">
          ${item.name}</h2>
        <h3 class="itemcolor text-center p-4 bg-red-400">
          ${item.color}</h3>
        <img class="itemimg p-4" src="${item.img}" alt="Image of ${item.name} ${item.color}"/>
        <h4 class="price text-center p-4 bg-red-400">
          $${item.price}</h4>
        <div class="add-to-cart p-6" onclick="addToCart(${item.id})">
          <img class="m-auto w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart Icon">
        </div>
    </article>`
    });
    displayStore = displayStore.join("");
    DOMSelectors.shop.innerHTML = displayStore;
};

function addToCart(id) {
  console.log(id);
}

