const UI = (() => {

let currentProduct = null;

document.addEventListener("DOMContentLoaded", init);

function init(){

renderProducts();
updateCart();

/* CARGAR MODO OSCURO */

if(localStorage.getItem(CONFIG.STORAGE_KEYS.DARK)==="true"){
document.body.classList.add("dark");
}

}


/* RENDER PRODUCTOS */

function renderProducts(){

const container = document.getElementById("productContainer");

container.innerHTML = "";

Products.getAll().forEach((p,index)=>{

const card = `

<div class="col-md-4 mb-4">

<div class="card shadow product-card">

<img src="${p.img}"
class="card-img-top product-img"
onerror="this.src='img/no-image.png'">

<div class="card-body text-center">

<h5 class="fw-bold">${p.name}</h5>

<p class="price">$${p.price.toLocaleString()}</p>

<button class="btn btn-warning w-100"
onclick="UI.openCustomizer(${index})">

🍔 Personalizar

</button>

</div>

</div>

</div>

`;

container.innerHTML += card;

});

}


/* ABRIR MODAL */

function openCustomizer(index){

currentProduct = Products.getAll()[index];

/* RESET INGREDIENTES */

document.querySelectorAll("#customModal input[type=checkbox]")
.forEach(c => c.checked = true);

document.getElementById("drink").value = "";

const modal = new bootstrap.Modal(
document.getElementById("customModal")
);

modal.show();

}


/* AGREGAR AL CARRITO */

function addCustomBurger(){

let ingredients = [];

let extra = 0;

/* INGREDIENTES */

document.querySelectorAll("#customModal input[type=checkbox]:checked")
.forEach(i => {

ingredients.push(i.value);

if(i.value==="Tocineta"){
extra += 2000;
}

});

/* BEBIDA */

let drink = document.getElementById("drink").value;

if(drink==="Coca Cola") extra += 4000;
if(drink==="Pepsi") extra += 3500;
if(drink==="Jugo Natural") extra += 5000;

/* PRODUCTO FINAL */

let product = {

id: Date.now(),

name: currentProduct.name,

price: currentProduct.price + extra,

ingredients: ingredients,

drink: drink,

qty:1

};

Cart.add(product);

bootstrap.Modal
.getInstance(document.getElementById("customModal"))
.hide();

updateCart();

}


/* ACTUALIZAR CARRITO */

function updateCart(){

const items = document.getElementById("cartItems");

items.innerHTML = "";

/* CARRITO VACIO */

if(Cart.getItems().length === 0){

items.innerHTML = `
<p class="text-muted text-center">
Tu carrito está vacío
</p>
`;

}

/* ITEMS */

Cart.getItems().forEach((p,i)=>{

const item = `

<div class="cart-item">

<div>

<strong>${p.name}</strong>

<br>

<small>
${p.ingredients ? p.ingredients.join(", ") : ""}
</small>

<br>

<small>
${p.drink ? "🥤 "+p.drink : ""}
</small>

<p class="text-muted">
$${(p.price*p.qty).toLocaleString()}
</p>

</div>

<div class="cart-controls">

<button onclick="Cart.decrease(${i})"
class="btn btn-sm btn-secondary">-</button>

<span class="mx-2">${p.qty}</span>

<button onclick="Cart.increase(${i})"
class="btn btn-sm btn-secondary">+</button>

<button onclick="Cart.remove(${i})"
class="btn btn-sm btn-danger ms-2">✕</button>

</div>

</div>

`;

items.innerHTML += item;

});


/* TOTAL */

const total = Cart.getTotal();

document.getElementById("cartTotal")
.innerText = total.toLocaleString();


/* CONTADOR CARRITO */

document.getElementById("cartCount")
.innerText = Cart.getItems().reduce((t,i)=>t+i.qty,0);

}


/* ABRIR CARRITO */

function toggleCart(){

document.getElementById("cartPanel")
.classList.toggle("d-none");

document.getElementById("cartOverlay")
.classList.toggle("d-none");

}


/* MODO OSCURO */

function toggleDark(){

document.body.classList.toggle("dark");

localStorage.setItem(
CONFIG.STORAGE_KEYS.DARK,
document.body.classList.contains("dark")
);

}


return {

updateCart,

toggleCart,

toggleDark,

openCustomizer,

addCustomBurger

};

})();