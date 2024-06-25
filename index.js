/*
to do

1.make remove button take away item in cart
2.try to make all item functions into one function. See note 1
3.make price add up amount of items
4.make total price function with cart

*/

import { menuArray } from "/data.js";

const cart = 0;

document.addEventListener("click", function (e) {
  if (e.target.dataset.add) {
    document.getElementById("order").style.display = "block";
    document.getElementById("checkoutBtn").style.display = "block";
    addCartHtml(e.target.dataset.add);
    addCart(e.target.dataset.add);
  }
});

function addPizza() {
  document.getElementById(
    "cartFeed"
  ).innerHTML += `<p class ="cartText">Pizza <button id = "removeBtn"class="removeBtn"> Remove </button> this was $14 </p>`;
}

function addBurger() {
  document.getElementById(
    "cartFeed"
  ).innerHTML += `<p class ="cartText">Burger <button class="removeBtn"> Remove </button> this was $12 </p>`;
}

function addBeer() {
  document.getElementById(
    "cartFeed"
  ).innerHTML += `<p class ="cartText">Beer <button class="removeBtn"> Remove </button> this was $12 </p>`;
}

//maybe a better function for addItem? might need to use .filter()?
/*function addItem(){
    menuArray.forEach(function(item){
         document.getElementById('cartFeed').innerHTML += `<p>${item.name} <span>remove</span> this was $${item.price} </p>`
    })
}
*/

function getMenuHtml() {
  let menuHtml = ``;

  menuArray.forEach(function (menu) {
    menuHtml += `
        <div class = "item">
            <div class= "menu-inner">
                <div>
                    <h1 class= "emoji" >${menu.emoji}</h1>
                </div>
                <div>
                    <h1>${menu.name}</h1>
                    <p>${menu.ingredients.join(", ")}</p>
                    <p><strong>$${menu.price}</strong></p>
                </div>
                <div>
                 <i class="fa-solid fa-plus" data-add = "${menu.id}"></i>
                </div>
            </div>
            <div id="line"><hr /></div>
        </div>
        `;
  });

  return menuHtml;
}

function addCartHtml(itemID) {
  if (itemID === "0") {
    addPizza();
  } else if (itemID === "1") {
    addBurger();
  } else if (itemID === "2") {
    addBeer();
  }
}

// NOTE 1 want this to replace above function. So i can get the object and then iterate over it to repalce the Pizza() beer()
//and other item functions with one function that does it all

function addCart(itemID) {
  const menuObj = menuArray.filter(function (object) {
    return object === itemID;
  })[0];

  /*document.getElementById(
    "cartFeed"
  ).innerHTML += `<p class ="cartText">${menuObj.name} <button class="removeBtn"> Remove </button> this was $${menuObj.price} </p>`;
  */
}

function render() {
  document.getElementById("menuFeed").innerHTML = getMenuHtml();
}

document.getElementById("checkoutBtn").addEventListener("click", function () {
  document.getElementById("checkoutPop").style.display = "inline";
});

document.getElementById("closePopBtn").addEventListener("click", function () {
  document.getElementById("checkoutPop").style.display = "none";
});

render();
