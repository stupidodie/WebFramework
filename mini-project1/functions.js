// Copyright (c) 2022 GuanRan Tai
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let productList = [
  {
    name: "Bubble Milktea",
    imgurl: "img/bubblete.jpg",
    price: 10,
    tags: ["drinks", "tea"],
    desciption: "It's Bubble Milktea's era!",
  },

  {
    name: "Gongcha Coffee tea",
    imgurl: "img/milktea2.jpg",
    price: 15,
    tags: ["drinks", "coffee"],
    desciption: "Bubble Milktea",
  },
  {
    name: "Hongkong Milktea",
    imgurl: "img/milktea3.jpg",
    price: 30,
    tags: ["drinks", "milktea"],
    desciption: "milktea3",
  },
  {
    name: "beefnoodles",
    imgurl: "img/beefnoodles.jpg",
    price: 22,
    tags: ["meals", "beefnoodles"],
    desciption: "beefnoodles that you will love!",
  },
  {
    name: "butterchip",
    imgurl: "img/butterchip.jpg",
    price: 5,
    tags: ["snacks", "chips"],
    desciption: "butterchip with extremely low price!",
  },
  {
    name: "cooked,salted duck eggs",
    imgurl: "img/cookedsaltedduckeggs.jpg",
    price: 50,
    tags: ["snacks", "frozen food"],
    desciption: "Who does not like duck eggs?",
  },
  {
    name: "cucumber butterchip",
    imgurl: "img/cucumberpotatoe.jpg",
    price: 12,
    tags: ["snacks", "chips"],
    desciption: "butterchip with cucumber flavor!",
  },
  {
    name: "hand-made milktea",
    imgurl: "img/drinks.jpg",
    price: 15,
    tags: ["drinks", "milktea"],
    desciption: "hand-made milktea byu grandma!",
  },
  {
    name: "hot pot soup",
    imgurl: "img/hotpotsoup.jpg",
    price: 52,
    tags: ["meals", "rice"],
    desciption: "hot pot soup is soul of hot pot!",
  },
  {
    name: "Chongqing noodles",
    imgurl: "img/mainsoup.jpg",
    price: 23,
    tags: ["meals", "frozen food"],
    desciption: "Chongqing noodles is spicy! ",
  },
  {
    name: "matcha chocolate",
    imgurl: "img/matchachocolate.jpg",
    price: 33,
    tags: ["snacks", "cookies"],
    desciption: "Matcha chocolate is best saled product last year! ",
  },
  {
    name: "matcha jelly",
    imgurl: "img/matchajelly.jpg",
    price: 13,
    tags: ["drinks", "tea"],
    desciption: "matcha jelly! Buy it! ",
  },
  {
    name: "egg noodles",
    imgurl: "img/meal.jpg",
    price: 26,
    tags: ["meals", "noodles"],
    desciption: "It is spicy as well as yummy! ",
  },
  {
    name: "fried chicken",
    imgurl: "img/newProduct.jpg",
    price: 26,
    tags: ["meals", "frozen food"],
    desciption: "Fried chicken has its own magic! ",
  },
  {
    name: "peach milk",
    imgurl: "img/peachmilk.jpg",
    price: 16,
    tags: ["drinks", "milktea"],
    desciption: "peach milk is yummy! And it is on sale! ",
  },
  {
    name: "poky",
    imgurl: "img/poky.jpg",
    price: 26,
    tags: ["snacks", "candy"],
    desciption: "Poky! They will never let you down! ",
  },
  {
    name: "rice jelly",
    imgurl: "img/Riceyelly.jpg",
    price: 29,
    tags: ["snacks", "candy"],
    desciption: "Rice jelly is refreshing! ",
  },
  {
    name: "snail candy",
    imgurl: "img/snack.jpg",
    price: 56,
    tags: ["snacks", "candy"],
    desciption: "It just looks like snail! ",
  },
  {
    name: "spiced tofu",
    imgurl: "img/spicedtofusnack.jpg",
    price: 27,
    tags: ["snacks", "candy"],
    desciption: "Spiced tofu is hot! ",
  },
  {
    name: "sugar free tea",
    imgurl: "img/sugarfreeoolong.jpg",
    price: 37,
    tags: ["drinks", "tea"],
    desciption: "Suger free is good for your health! ",
  },
];
// const drinks = ["milktea", "tea", "coffee"];
const drinks = ["tea", "coffee", "milktea"];
const snacks = ["cookies", "candy", "chips"];
const meals = ["rice", "noodles", "frozen food"];
let defaultSortType = "null";
let tags = [];
function login(form) {
  // Seems there is no need to use the localStorage to store the password and action type.
  let formData = new FormData(form);
  let userName = formData.get("userName");
  let action = formData.get("select-action");
  if (action === "login") {
    alert(`Hi, ${userName}! You are successfully login!`);
  } else {
    alert(`Hi, ${userName}! You are successfully registered!`);
  }
  localStorage.setItem("userName", userName);
}
function handleLogin() {
  let userName = localStorage.getItem("userName");
  if (userName !== null) {
    alert(`Hi, ${userName}! You are successfully logout!`);
    localStorage.removeItem("userName");
    location.reload();
  }
}
function findObject(productName) {
  return productList.find((target) => target["name"] === productName);
}

function showProduct() {
  let url = location.href;
  let target = url.split("?")[1];
  let product = findObject(target);
  document.getElementById(
    "toChange"
  ).innerHTML = `<div class="container px-4 px-lg-5 my-5">
  <div class="row gx-4 gx-lg-5 align-items-center">
    <div class="col-md-6">
      <img class="card-img-top mb-5 mb-md-0" id="to Change Product Picture" src= ${
        product.imgurl
      }  alt="The product picture." />
    </div>
    <div class="col-md-6">
      <div class="small mb-1" id="to Change Product ID">Product ID: BST-498</div>
      <h1 class="display-5 fw-bolder" id="to Change Product Name">${
        product.name
      }</h1>
      <div class="fs-5 mb-5">
        <span class="text-muted text-decoration-line-through">$${
          product.price + 10
        }</span>
        <span id="to Change Product Price">$${product.price}</span>
        <span> &nbsp &nbsp on spring sale</span>
      </div>
      <p class="lead">
        ${product.desciption}
      </p>
      <div class="d-flex">
        <input type="number" class="form-control" id="input_quantity" placeholder="1" min="1" style="width: 200px;"/>
        <button class="btn btn-outline-dark flex-shrink-0" type="button" onclick="add_cart()">
          <i class="bi-cart-fill me-1"></i>
          Add to cart
        </button>
      </div>
    </div>
  </div>
</div>`;
  document.getElementById(
    "to Change Product Picture"
  ).innerHTML = `<img src=${product.imgurl} class="card-img-top mb-5 mb-md-0" id="to Change Product Picture" alt="This is a item picture.">`;
}
function showCategoryType() {
  let url = location.href;
  let type = url.split("?")[1];
  defaultSortType = "null";
  switch (type) {
    case "drinks":
      tags = drinks;
      break;
    case "meals":
      tags = meals;
      break;
    case "snacks":
      tags = snacks;
      break;
    default:
      throw Error("Invalid type " + type);
  }
  showSelect(tags);
  showCard(tags, defaultSortType);
}
function showSelect(tags) {
  let html = '<div class="container">  <div class="row"> ';;
  tags.forEach((tag) => {
    html += `
    <div class="col"> <div class="form-check form-switch">
    <input aria-checked="true" class="form-check-input" type="checkbox" role="switch" id="${tag}" onchange="selectTypeToShow(this.id,this.checked)" checked>
    <label class="form-check-label" for="${tag}">${tag}</label>
  </div> </div>
    `;
  });
  html += '</div></div>';
  document.getElementById("checkBox").innerHTML = html;
}
function selectTypeToShow(typeName, checked) {
  if (checked) {
    tags.push(typeName);
    showCard(tags, defaultSortType);
  } else {
    tags.splice(tags.indexOf(typeName), 1);
    showCard(tags, defaultSortType);
  }
}
function changeSortType(sortType) {
  defaultSortType = sortType;
  if (tags.length === 0) {
    let url = location.href;
    let type = url.split("?")[1];
    console.log(type, sortType);
    showCard([type], sortType);
  } else {
    showCard(tags, sortType);
  }
}
function showCard(tags, feature) {
  let categoryList = sortCategoryList(feature, getCategoryListByTag(tags));
  let html = "";
  categoryList.forEach((product) => {
    console.log(product);
    html += `
    <div class="col">
    <div class="card ">
    <div class="card-header" style="text-align:center">
        ${product.name}
      </div>
      <a href="product_detail.html?${product.name}"><img src=${product.imgurl} class="card-img-top" alt=${product.name}></a>
      <div class="card-body">
      <div class="col-auto">
      <input
        type="number"
        class="form-control"
        id="input_quantity${product.name}"
        placeholder="1"
        min = "1"
      
      />
    </div>
    <div class="col-auto">
      <button
        type="button"
        class="btn btn-primary mb-3"
        onclick="add_cart('${product.name}',${product.price})"
      >
        add to my Cart
      </button>
    </div> 
      
      </div>
      </div>
    </div>
  `;
  });
  document.getElementById("cardList").innerHTML = html;
}
function getCategoryListByTag(tags) {
  let categoryList = [];
  tags.forEach((tag) => {
    productList.forEach((product) => {
      if (product.tags.indexOf(tag) !== -1) {
        // if tag in product.tags{
        categoryList.push(product);
      }
    });
  });
  // make the list unique
  return Array.from(new Set(categoryList));
}
function sortCategoryList(feature = "null", categoryList = []) {
  switch (feature) {
    case "priceUp":
      return categoryList.sort((a, b) => a.price - b.price);
    case "priceDown":
      return categoryList.sort((a, b) => b.price - a.price);
    case "null":
      return categoryList;
    default:
      throw Error("Invalid feature " + feature);
  }
}
function add_cart(name = "null", price = "null") {
  let id = "input_quantity";
  if (name === "null") {
    let url = location.href;
    let target = url.split("?")[1];
    let product = findObject(target);
    name = product.name;
    price = product.price;
  } else {
    id = id + name;
  }
  console.log(id);
  console.log(name, price);
  let quantity = 1;
  if (document.getElementById(id).value !== "") {
    quantity = parseInt(document.getElementById(id).value);
  }
  console.log(quantity);
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (cart !== null) {
    const index = cart.findIndex((object) => object.pro_name === name);
    if (index === -1) {
      cart.push({
        pro_name: name,
        pro_quantity: quantity,
        pro_price: price,
      });
      alert("You have ordered " + quantity.toString() + " of it so far.");
    } else {
      cart[index].pro_quantity += quantity;
      alert(
        "You have ordered " +
          cart[index].pro_quantity.toString() +
          " of it so far."
      );
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  } else {
    let cart = [
      {
        pro_name: name,
        pro_quantity: quantity,
        pro_price: price,
      },
    ];
    localStorage.setItem("cart", JSON.stringify(cart));
    let msg = "You have ordered " + quantity.toString() + " of it so far.";
    alert(msg);
  }
}
function populateCart() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let number = 1;
  let totalPrice = 0;

  if (cart === null) {
    return;
  }

  cart.forEach((dinosaur) => {
    totalPrice += dinosaur.pro_price * dinosaur.pro_quantity;
    document.getElementById("inject_table").innerHTML += `<tr>
	<th scope="row">${number++}</th>
	<td>${dinosaur.pro_name}</td>
	<td>
		<div class="form-group">
			<input type="number" class="form-control" id=${dinosaur.pro_name} placeholder=${
      dinosaur.pro_quantity
    } min="1">
		</div>
	</td>
	<td>${dinosaur.pro_price.toLocaleString()} USD</td>
	<td>${(dinosaur.pro_price * dinosaur.pro_quantity).toLocaleString()} USD</td>
	<td> 
		<button type="button" class="btn btn-primary" onclick="remove_item(\'${
      dinosaur.pro_name
    }\')" >
			Empty Item 
		</button>
	</td>

	</tr>`;
  });
  document.getElementById("totalPrice").innerHTML =
    totalPrice.toLocaleString() + " USD";
}
function remove_item(pro_name) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  let newCart = cart.filter((product) => {
    return product.pro_name !== pro_name;
  });

  localStorage.setItem("cart", JSON.stringify(newCart));

  document.getElementById("inject_table").innerHTML = "";
  populateCart();

  location.reload();
}

function save_change() {
  let cart = JSON.parse(localStorage.getItem("cart"));
  let number = 1;
  if (cart === null) {
    return;
  }

  cart.forEach((item) => {
    const index = cart.findIndex((object) => object.pro_name === item.pro_name);
    if (document.getElementById(item.pro_name.toLocaleString()).value !== "") {
      cart[index].pro_quantity = document.getElementById(
        item.pro_name.toLocaleString()
      ).value;
    }
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}

function empty_cart() {
  alert("Your cart has been emptied.");
  localStorage.removeItem("cart");
  populateCart();
  location.reload();
  return false;
}
function checkout() {
  if (localStorage.getItem("userName") === null) {
    alert("you should first login!");
    save_change();
    return false;
  } else {
    alert("All items have been purchased.");
    localStorage.removeItem("cart");
    populateCart();
    location.reload();
    return false;
  }
}
