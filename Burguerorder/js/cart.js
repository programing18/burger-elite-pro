const Cart = (() => {

  let cart = Storage.get(CONFIG.STORAGE_KEYS.CART) || [];
  let discount = 0;

  function add(product) {

    const exist = cart.find(p => p.id === product.id);

    if(exist){
        exist.qty++;
    }else{
        cart.push({...product, qty:1});
    }

    Storage.set(CONFIG.STORAGE_KEYS.CART, cart);
    UI.updateCart();
  }

  function remove(index) {
    cart.splice(index,1);
    Storage.set(CONFIG.STORAGE_KEYS.CART, cart);
    UI.updateCart();
  }

  function increase(index){
    cart[index].qty++;
    Storage.set(CONFIG.STORAGE_KEYS.CART, cart);
    UI.updateCart();
  }

  function decrease(index){
    if(cart[index].qty > 1){
        cart[index].qty--;
    }else{
        cart.splice(index,1);
    }

    Storage.set(CONFIG.STORAGE_KEYS.CART, cart);
    UI.updateCart();
  }

  function getTotal() {
    let total = cart.reduce((sum,p)=>sum + (p.price * p.qty),0);
    return total - (total * discount);
  }

  function setDiscount(value) {
    discount = value;
  }

  function getItems() { return cart; }

  return { add, remove, increase, decrease, getTotal, getItems, setDiscount };

})();