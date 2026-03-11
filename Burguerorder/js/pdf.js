const PDF = (() => {

function generate(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

let y = 20;

/* TITULO EMPRESA */

doc.setFontSize(22);
doc.text("BURGER ELITE PRO",105,15,null,null,"center");

doc.setFontSize(12);
doc.text("Factura de Compra",105,22,null,null,"center");

doc.setFontSize(10);
doc.text("Fecha: "+new Date().toLocaleString(),20,30);

y = 40;

/* CABECERA TABLA */

doc.setFontSize(12);

doc.text("Producto",20,y);
doc.text("Cant",120,y);
doc.text("Precio",170,y);

y += 8;

doc.line(20,y,190,y);

y += 8;

/* PRODUCTOS */

Cart.getItems().forEach(p=>{

doc.text(p.name,20,y);

doc.text(String(p.qty),125,y);

doc.text("$"+(p.price*p.qty),170,y);

y += 8;

/* INGREDIENTES */

if(p.ingredients){

doc.setFontSize(9);

doc.text("Ingredientes: "+p.ingredients.join(", "),25,y);

y += 6;

doc.setFontSize(12);

}

/* BEBIDA */

if(p.drink){

doc.setFontSize(9);

doc.text("Bebida: "+p.drink,25,y);

y += 6;

doc.setFontSize(12);

}

});

/* TOTAL */

y += 10;

doc.setFontSize(14);
doc.text("TOTAL: $" + Cart.getTotal(),140,y);

/* PIE DE FACTURA */

y += 20;

doc.setFontSize(10);

doc.text("Gracias por tu compra",105,y,null,null,"center");

doc.text("Burger Elite Pro",105,y+6,null,null,"center");

/* GUARDAR PDF */

doc.save("factura_burger_elite.pdf");


/* GUARDAR PEDIDO */

let orders = JSON.parse(localStorage.getItem("orders")) || [];

orders.push({

date:new Date().toLocaleString(),
items:Cart.getItems(),
total:Cart.getTotal()

});

localStorage.setItem("orders",JSON.stringify(orders));


/* LIMPIAR CARRITO */

localStorage.removeItem("cart");


/* ACTUALIZAR PAGINA */

setTimeout(()=>{

location.reload();

},500);

}

return { generate };

})();