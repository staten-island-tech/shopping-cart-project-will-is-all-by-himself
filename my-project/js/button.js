const store = [
    { id: 0, name: "Jordan 1 Retro High OG Premium", color: "Yin Yang", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/008/491/532/original/61240_01.jpg.jpeg?action=crop&width=950", price: "20.69", category: "shoe"},
    { id: 1, name: "Jordan 1 Retro High OG", color: "Royal Toe", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/035/766/949/original/519961_01.jpg.jpeg?action=crop&width=950", price: "30.43", category: "shoe"},
    { id: 2, name: "Jordan 1 Retro High OG", color: "Court Purple 2.0", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/036/301/423/original/517360_01.jpg.jpeg?action=crop&width=950", price: "1.01", category: "shoe"},
    { id: 3, name: "Jordan 1 Retro High OG", color: "University Blue", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/049/887/653/original/599627_01.jpg.jpeg?action=crop&width=950", price: "13", category: "shoe"},
    { id: 4, name: "Jordan 1 Retro High OG", color: "Dark Mocha", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/043/946/221/original/567948_01.jpg.jpeg?action=crop&width=950", price: "40,000", category: "shoe"},
    { id: 5, name: "Jordan 1 Retro High OG", color: "Chicago", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/046/085/372/original/14741_01.jpg.jpeg?action=crop&width=950", price: "178,000.00", category: "shoe"},
    { id: 6, name: "Jordan 1 High 1985", color: "Chicago", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/036/234/482/original/55279_01.jpg.jpeg?action=crop&width=950", price: "2.00", category: "shoe"},
    { id: 7, name: "Jordan 1 Retro High OG", color: "Bred", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/008/487/268/original/13578_01.jpg.jpeg?action=crop&width=950", price: "325,100.00", category: "shoe"},
    { id: 8, name: "Jordan 1 Retro High OG", color: "Patent Bred", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/062/992/408/original/784379_01.jpg.jpeg?action=crop&width=950", price: "1,200,000,000.00", category: "shoe"},
  ];


  const cartlist = document.getElementsByClassName('cart-items');
  const shop = document.querySelector('.storedisplay');

let cart = [];

function displayItems(){
    store.forEach( (item) => {
      shop.innerHTML += `
      <article class="card p-20 bg-white">
        <h2 class="itemname text-center p-4 bg-white">
          ${item.name}</h2>
        <h3 class="itemcolor text-center p-4 bg-red-400">
          ${item.color}</h3>
        <img class="itemimg p-4" src="${item.img}" alt="Image of ${item.name} ${item.color}"/>
        <h4 class="price text-center p-4 bg-red-400">
          $${item.price}</h4>
        <button class="add-to-cart p-6" onclick="addToCart(${item.id})">
          <img class="m-auto w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart Icon">
        </button>
      </article>
    `; 
    });
  }
  displayItems();

function addToCart(id) {
    const thing = store.find((item) => item.id === id)

    cart.push(thing);

    console.log(cart)

    updateCart()
  }

function updateCart(){
    renderCartItems();
}

function renderCartItems(){
    cart.forEach(() => {
        cartlist.innerHTML += `
        <article class="card p-20 bg-white">
        <h2 class="itemname text-center p-4 bg-white">
          ${item.name}</h2>
        <h3 class="itemcolor text-center p-4 bg-red-400">
          ${item.color}</h3>
        <img class="itemimg p-4" src="${item.img}" alt="Image of ${item.name} ${item.color}"/>
        <h4 class="price text-center p-4 bg-red-400">
          $${item.price}</h4>
        <button class="add-to-cart p-6" onclick="addToCart(${item.id})">
          <img class="m-auto w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart Icon">
        </button>
      </article>
        `
    })
}