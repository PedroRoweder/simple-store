//import { items } from "./items";
const mainRow = document.querySelector("#main-row");
const card = document.querySelector("#cardColumn");
let div = document.createElement("div");
let cartItems = [];
let count = 0;

const items = [
  {
    product: "Sample Product 1",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 2",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 3",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 4",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 5",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 6",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 7",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 8",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 9",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 10",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 11",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 12",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 13",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 14",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
  {
    product: "Sample Product 15",
    description: "Lorem ipsum dolor sit amet, conse adipiscing elit.",
    price: 200.0,
    imagePath: "./images/productimage.jpg",
  },
];

const addToCart = (id) => {
  count++;
  id = id.substring(3, id.length);
  cartItems.push($(`#${id}`).text());
  $("#cart-item-count").css("display", "block");
  $("#cart-item-count").html(count);
  $("#cart-items").html(() =>
    cartItems.map(
      (item) =>
        `<li>${item} - <span style="color: #3fa674;">${$(
          `#${id}Price`
        ).text()}</span></li>`
    )
  );
};

const getCard = (item) => {
  let itemProductID = item.product.split(" ").join("");
  let div = "";
  div = `<div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 col-xl-3" id="cardColumn">
          <div id="card-${itemProductID}" class="card" style="width: 18rem;">
            <img class="card-img-top" src="${item.imagePath}" alt="Card image cap"/>
            <div class="card-body">
              <h5 class="card-title" id="${itemProductID}">${item.product}</h5>
              <p class="card-text" id="${itemProductID}-description">
                ${item.description}
              </p>
              <button id="add${itemProductID}" onclick="addToCart(id)" href="#" class="btn addCart">Add to cart</button>
              <span class="float-right vertical" id="${itemProductID}Price">$${item.price}</span>
            </div>
          </div>
        </div>`;

  return div;
};

$(document).ready(() => {
  items.map((item) => {
    $("#main-row").append(getCard(item));
  });

  if (count === 0) {
    $("#cart-items").append(`<li>Your list is empty!</li>`);
  }
});

//$(".card").on("click", ".addCart", () => {
//  alert("a");
//  $("#cart-item-count").css("display", "block");
//  count++;
//  $("#cart-item-count").html(count);
//
//  cartItems.push($(".addCart").parent().find("h5").text());
//  console.log(cartItems);
//  $("#cart-items").html(() => cartItems.map((item) => `<li>${item}</li>`));
//});
