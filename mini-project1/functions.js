// Copyright (c) 2022 GuanRan Tai
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

let productList = [
  {
    name: "milktea1",
    imgurl: "img/bubblete.jpg",
    price: 10,
  },
  {
    name: "milktea2",
    imgurl: "img/milktea2.jpg",
    price: 15,
  },
  {
    name: "milktea3",
    imgurl: "img/milktea3.jpg",
    price: 30,
  },
];
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
  console.log(target);
  let product = findObject(target);
  console.log(product);
  document.getElementById("tochange").innerHTML = `<p>${product.name}</p>
    <img src=${product.imgurl}>`;
}
function add_cart() {
  let url = location.href;
  let target = url.split("?")[1];
  let product = findObject(target);

  let name = product.name;
  let quantity = 1;
  if (document.getElementById("input_quantity").value !== "") {
    quantity = parseInt(document.getElementById("input_quantity").value);
  }

  let price = product.price;
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
  //alert(totalPrice);
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
  if(localStorage.getItem('userName')===null){
    alert("you should first login!");
    save_change();
    return false;

  }else{
    alert("All items have been purchased.");
    localStorage.removeItem("cart");
    populateCart();
    location.reload();
    return false;
  }

}
