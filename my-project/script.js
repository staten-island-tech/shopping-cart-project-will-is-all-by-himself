const store = [
  { name: "Jordan 1 Retro High OG Premium", color: "Yin Yang", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/008/491/532/original/61240_01.jpg.jpeg?action=crop&width=950", price: "20.69"},
  { name: "Jordan 1 Retro High OG", color: "Royal Toe", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/035/766/949/original/519961_01.jpg.jpeg?action=crop&width=950", price: "30.43"},
  { name: "Jordan 1 Retro High OG", color: "Court Purple 2.0", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/036/301/423/original/517360_01.jpg.jpeg?action=crop&width=950", price: "1.01"},
  { name: "Jordan 1 Retro High OG", color: "University Blue", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/049/887/653/original/599627_01.jpg.jpeg?action=crop&width=950", price: "13"},
  { name: "Jordan 1 Retro High OG", color: "Dark Mocha", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/008/491/532/original/61240_01.jpg.jpeg?action=crop&width=950", price: "$40,000"},
  { name: "Jordan 1 Retro High OG", color: "Chicago", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/046/085/372/original/14741_01.jpg.jpeg?action=crop&width=950", price: "178,000.00"},
  { name: "Jordan 1 High 1985", color: "Chicago", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/036/234/482/original/55279_01.jpg.jpeg?action=crop&width=950", price: "2.00", count: 1 },
  { name: "Jordan 1 Retro High OG", color: "Bred", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/008/487/268/original/13578_01.jpg.jpeg?action=crop&width=950", price: "325,100.00"},
  { name: "Jordan 1 Retro High OG", color: "Patent Bred", img: "https://image.goat.com/transform/v1/attachments/product_template_additional_pictures/images/062/992/408/original/784379_01.jpg.jpeg?action=crop&width=950", price: "1,200,000,000.00"},
];

let cart = [];

function appendNode(parent, element) {
  parent.appendChild(element);
}

function getDiv(container) {
  return document.getElementById(container);
}

function createNode(node) {
  let element = document.createElement(node);
  return element;
}

function displayItems(items, container) {
  let items_container = getDiv(container);
  items_container.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    let item_node = createNode("li");
    item_node.setAttribute("id", item.id);

    if (item.count > 0) {
      item_node.innerHTML = `${item.name} 
          <span id="badge">${item.count}</span>`;
      appendNode(items_container, item_node);
    }
  }
}
displayItems(items_array, "items");

function addOrRemoveItemsFromCart(action) {
  let container = "";

  if (action == "add") {
    container = getDiv("items");

    takeAction(container);
  } else if (action == "remove") {
    container = getDiv("cart");

    takeAction(container);
  }
}

function takeAction(container) {
  container.addEventListener("click", function (event) {
    let item_id = event.target.id;

    if (item_id !== "items" && item_id !== "badge") {
      let item = items_array.filter(function (item) {
        return item.id == item_id;
      })[0];

      let item_in_cart = cart.filter(function (item) {
        return item.id == item_id;
      })[0];

      if (item_in_cart == undefined) {
        cart.push(item);
      } else if (action == "add") {
        item_in_cart.count++;
      } else if (action == "remove") {
        item_in_cart.count--;
      }

      console.log(cart);
      displayItems(cart, "cart");
    }
  });
}

addOrRemoveItemsFromCart("add");
addOrRemoveItemsFromCart("remove");