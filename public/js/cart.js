function addToCart(productName, price) {
  let cartItem = {
    name: productName,
    price: price
  };

  localStorage.setItem("cartItem", JSON.stringify(cartItem));
  window.location.href = "payment.html";
}
