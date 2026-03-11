document.addEventListener("DOMContentLoaded",()=>{
 const cart=Storage.get(CONFIG.STORAGE_KEYS.CART);
 const total=cart.reduce((a,b)=>a+b.price,0);

 new Chart(document.getElementById("chart"),{
  type:"bar",
  data:{
    labels:["Ventas Totales"],
    datasets:[{label:"Ingresos",data:[total]}]
  }
 });
});