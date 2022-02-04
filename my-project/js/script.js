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
    <h2 class="itemname text-center p-4 bg-white">${item.name}</h2>
    <h3 class="itemcolor text-center p-4 bg-red-400">${item.color}</h3>
    <img class="itemimg p-4" src="${item.img}" alt="Image of ${item.name}"/>
    <h4 class="price text-center p-4 bg-red-400">$${item.price}</h4>
    </article>`
    });
    displayStore = displayStore.join("");
    DOMSelectors.shop.innerHTML = displayStore;
    console.log(displayStore);
};

DOMSelectors.shoes.addEventListener('click', function() {
    const shoes = store.filter((store) => store.category === "shoe");
    DOMSelectors.shop.innerHTML = ""
    shoes.forEach((shoe) => {
        DOMSelectors.shop.insertAdjacentHTML("afterbegin", `<article class="card">
    <h2 class="itemname">${shoe.name}</h2>
    <h3 class="itemcolor">${shoe.color}</h3>
    <img class="itemimg" src="${shoe.img}" alt="Image of ${store.name}"/>
    <h4 class="price">$${shoe.price}</h4>
    </article>`)
    });
});