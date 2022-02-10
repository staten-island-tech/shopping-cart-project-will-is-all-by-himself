import { store } from "./shop";
console.log(store);
const DOMSelectors = {
    shop: document.querySelector('.storedisplay'),
    add: document.getElementsByClassName('add-to-cart'),
    cart: document.querySelector('.cart'),
}

function displayItems(){
  store.forEach( (item) => {
    DOMSelectors.shop.innerHTML += `
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
}

displayItems();

let cart = []

function getDiv(container) {
  return document.getElementById(container);
};

function addOrRemoveItemsFromCart(action) {
  let container = '';

  if (action == "add") {
      container = getDiv("items");

      takeAction(container)
  }
  else if (action == "remove") {
      container = getDiv("cart");

      takeAction(container)
  };
}

add.addEventListener("click", addToCart);

  function takeAction(container) {
      container.addEventListener("click", function (event) {
          let item_id = event.target.id;

          if (item_id !== "items") {
              let item = store.filter(function (item) {
                  return item.id == item_id;
              })[0];

              console.log(cart);
              DOMSelectors.cart.innerHTML += ` <article class="card p-20 bg-white">
              <h2 class="itemname text-center p-4 bg-white">
                ${item.name}</h2>
              <h3 class="itemcolor text-center p-4 bg-red-400">
                ${item.color}</h3>
              <img class="itemimg p-4" src="${item.img}" alt="Image of ${item.name} ${item.color}"/>
              <h4 class="price text-center p-4 bg-red-400">
                $${item.price}</h4>
              <div class="add-to-cart p-6" >
                <img class="m-auto w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart Icon">
              </div>
            </article>
              `
          };
      });
  };


addOrRemoveItemsFromCart('add');
addOrRemoveItemsFromCart('remove');

function addToCart(id) {
  console.log(id);
}
