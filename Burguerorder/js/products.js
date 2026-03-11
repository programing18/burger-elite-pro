const Products = (() => {

const list = [

/* HAMBURGUESAS */

{
id:1,
name:"Hamburguesa Clásica",
price:12000,
category:"burger",
img:"https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
ingredients:["Carne","Queso","Lechuga","Tomate","Salsa"]
},

{
id:2,
name:"Hamburguesa Doble",
price:16000,
category:"burger",
img:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
ingredients:["Doble carne","Queso","Lechuga","Cebolla"]
},

{
id:3,
name:"Hamburguesa BBQ",
price:15000,
category:"burger",
img:"https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600",
ingredients:["Carne","Queso","Tocineta","Salsa BBQ"]
},

{
id:4,
name:"Hamburguesa Ranchera",
price:17000,
category:"burger",
img:"https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600",
ingredients:["Carne","Queso","Tocineta","Huevo"]
},

/* ACOMPAÑAMIENTOS */

{
id:5,
name:"Papas Fritas",
price:7000,
category:"side",
img:"https://images.unsplash.com/photo-1585238342028-4f5b7f4c9f28?w=600"
},

{
id:6,
name:"Aros de Cebolla",
price:8000,
category:"side",
img:"https://images.unsplash.com/photo-1625944525533-473f1a3d54d2?w=600"
},

{
id:7,
name:"Nuggets de Pollo",
price:9000,
category:"side",
img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600"
},

/* BEBIDAS */

{
id:8,
name:"Coca Cola",
price:5000,
category:"drink",
img:"https://upload.wikimedia.org/wikipedia/commons/7/7f/Coca-Cola_glass_bottle.jpg"
},

{
id:9,
name:"Pepsi",
price:5000,
category:"drink",
img:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Pepsi_glass_bottle.jpg"
},

{
id:10,
name:"Jugo Natural",
price:6000,
category:"drink",
img:"https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=600"
},

{
id:11,
name:"Malteada",
price:9000,
category:"drink",
img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600"
},

/* COMBOS */

{
id:12,
name:"Combo Clásico",
price:20000,
category:"combo",
img:"https://images.unsplash.com/photo-1606755962773-0a9d4d1d43f0?w=600"
},

{
id:13,
name:"Combo BBQ",
price:22000,
category:"combo",
img:"https://images.unsplash.com/photo-1550317138-10000687a72b?w=600"
},

{
id:14,
name:"Combo Doble",
price:25000,
category:"combo",
img:"https://images.unsplash.com/photo-1561758033-d89a9ad46330?w=600"
}

];


/* OBTENER TODOS LOS PRODUCTOS */

function getAll(){
return list;
}


/* FILTRAR POR CATEGORIA */

function getByCategory(cat){

return list.filter(p=>p.category === cat);

}


return { getAll, getByCategory };

})();