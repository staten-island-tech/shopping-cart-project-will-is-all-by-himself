import { store } from "./shop";
console.log(store);
const DOMSelectors = {
    shop: document.querySelector('.storedisplay'),
    add: document.getElementsByClassName('add-to-cart')
}

window.addEventListener("DOMContentLoaded", function() {
    displayItems(store);
});

function displayItems(store) {
  let displayStore = store.map(function(item) {
    return `
      <article class="card p-20 bg-white">
        <h2 class="itemname text-center p-4 bg-white">
          ${item.name}</h2>
        <h3 class="itemcolor text-center p-4 bg-red-400">
          ${item.color}</h3>
        <img class="itemimg p-4" src="${item.img}" alt="Image of ${item.name} ${item.color}"/>
        <h4 class="price text-center p-4 bg-red-400">
          $${item.price}</h4>
        <div class="add-to-cart p-6">
          <img class="m-auto w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart Icon">
        </div>
      </article>
    `;
  });
  displayStore = displayStore.join("");
  DOMSelectors.shop.innerHTML = displayStore;
}

DOMSelectors.add.addEventListener("click", console.log(id)

//cart
let cart = [];
//add to
function addToCart(id) {
  console.log(id);
}

