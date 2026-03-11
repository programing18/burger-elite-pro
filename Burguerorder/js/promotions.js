const Promotions = (() => {

  const codes = {
    BURGER10:0.10,
    PRO20:0.20
  };

  function apply(){
    const code=document.getElementById("promoInput").value;
    if(codes[code]){
      Cart.setDiscount(codes[code]);
      UI.updateCart();
      alert("Promoción aplicada");
    } else {
      alert("Código inválido");
    }
  }

  return { apply };

})();