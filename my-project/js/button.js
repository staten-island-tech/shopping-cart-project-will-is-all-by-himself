const store = [
    { id: 0, name: "Jordan 1 Retro High OG Premium", color: "Yin Yang", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/008/491/532/original/61240_01.jpg.jpeg?action=crop&width=950", price: "2029", category: "shoe"},
    { id: 1, name: "Jordan 1 Retro High OG", color: "Royal Toe", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/035/766/949/original/519961_01.jpg.jpeg?action=crop&width=950", price: "3133", category: "shoe"},
    { id: 2, name: "Jordan 1 Retro High OG", color: "Court Purple 2.0", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/036/301/423/original/517360_01.jpg.jpeg?action=crop&width=950", price: "101", category: "shoe"},
    { id: 3, name: "Jordan 1 Retro High OG", color: "University Blue", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/049/887/653/original/599627_01.jpg.jpeg?action=crop&width=950", price: "1300", category: "shoe"},
    { id: 4, name: "Jordan 1 Retro High OG", color: "Dark Mocha", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/043/946/221/original/567948_01.jpg.jpeg?action=crop&width=950", price: "4,000", category: "shoe"},
    { id: 5, name: "Jordan 1 Retro High OG", color: "Chicago", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/046/085/372/original/14741_01.jpg.jpeg?action=crop&width=950", price: "178", category: "shoe"},
    { id: 6, name: "Jordan 1 High 1985", color: "Chicago", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/036/234/482/original/55279_01.jpg.jpeg?action=crop&width=950", price: "200", category: "shoe"},
    { id: 7, name: "Jordan 1 Retro High OG", color: "Bred", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/008/487/268/original/13578_01.jpg.jpeg?action=crop&width=950", price: "3,100", category: "shoe"},
    { id: 8, name: "Jordan 1 Retro High OG", color: "Patent Bred", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/062/992/408/original/784379_01.jpg.jpeg?action=crop&width=950", price: "100", category: "shoe"},
    { id: 9, name: "Jordan 1 Retro High OG", color: "Dark Marina Blue", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/064/377/039/original/815796_01.jpg.jpeg?action=crop&width=950", price: "1,200", category: "shoe"},
    { id: 10, name: "Jordan 1 Retro High OG", color: "Hyper Royal", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/052/666/679/original/641289_01.jpg.jpeg?action=crop&width=950", price: "200", category: "shoe"},
    { id: 11, name: "Jordan 1 Retro High OG", color: "Shadow 2.0", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/053/600/400/original/721462_01.jpg.jpeg?action=crop&width=950", price: "1,000", category: "shoe"},
];


  const cartlist = document.querySelector('.item-cart');
  const shop = document.querySelector('.storedisplay');
  document.querySelector('.add-to-cart').addEventListener('click', addToCart)

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
        <button class="add-to-cart p-6">
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
    cartlist.innerHTML = "";
    cart.forEach((item) => {
        cartlist.innerHTML += `
        <article class="card p-20 bg-white">
        <h2 class="itemname text-center p-4 bg-white">
          ${item.name}</h2>
        <h3 class="itemcolor text-center p-4 bg-red-400">
          ${item.color}</h3>
        <img class="itemimg p-4" src="${item.img}" alt="Image of ${item.name} ${item.color}"/>
        <h4 class="price text-center p-4 bg-red-400">
          $${item.price}</h4>
      </article>
        `
    })
}