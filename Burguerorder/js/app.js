const productos = [
 {id:1,nombre:"Clásica",precio:15000,img:"https://images.unsplash.com/photo-1606755962773-d324e0a13086"},
 {id:2,nombre:"Doble Carne",precio:20000,img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd"},
 {id:3,nombre:"BBQ",precio:22000,img:"https://images.unsplash.com/photo-1553979459-d2229ba7433b"}
];

const promos = {
  BURGER10:0.10,
  DOBLE20:0.20
};

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let discount = 0;

document.addEventListener("DOMContentLoaded",()=>{
 renderProducts();
 updateCart();
 if(localStorage.getItem("dark")==="true") document.body.classList.add("dark");
});

function renderProducts(){
 const container=document.getElementById("productos");
 productos.forEach(p=>{
  container.innerHTML+=`
  <div class="col-md-4 mb-4">
   <div class="card shadow">
    <img src="${p.img}" class="card-img-top">
    <div class="card-body text-center">
      <h5>${p.nombre}</h5>
      <p>$${p.precio}</p>
      <button class="btn btn-dark" onclick="addToCart(${p.id})">Agregar</button>
    </div>
   </div>
  </div>`;
 });
}

function addToCart(id){
 const product=productos.find(p=>p.id===id);
 cart.push({...product,cantidad:1});
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCart();
}

function updateCart(){
 const items=document.getElementById("cartItems");
 items.innerHTML="";
 let total=0;

 cart.forEach((item,i)=>{
  total+=item.precio*item.cantidad;
  items.innerHTML+=`
  <div>
    <strong>${item.nombre}</strong>
    <p>$${item.precio}</p>
    <button class="btn btn-sm btn-danger" onclick="removeItem(${i})">X</button>
  </div><hr>`;
 });

 total=total-(total*discount);

 document.getElementById("totalGeneral").innerText=total;
 document.getElementById("contador").innerText=cart.length;
}

function removeItem(i){
 cart.splice(i,1);
 localStorage.setItem("cart",JSON.stringify(cart));
 updateCart();
}

function toggleCart(){
 document.getElementById("cartPanel").classList.toggle("d-none");
}

function toggleDark(){
 document.body.classList.toggle("dark");
 localStorage.setItem("dark",document.body.classList.contains("dark"));
}

function applyPromo(){
 const code=document.getElementById("promoCode").value;
 if(promos[code]){
  discount=promos[code];
  updateCart();
  alert("Promoción aplicada");
 }else{
  alert("Código inválido");
 }
}