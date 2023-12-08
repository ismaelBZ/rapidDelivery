window.addEventListener("load", () => {

  const clientName = sessionStorage.getItem("CLIENT-NAME");
  document.querySelector(".client-name").innerHTML = clientName;

  const deliveryPrice = sessionStorage.getItem("DELIVERY-PRICE");
  document.querySelector(".delivery-price").innerHTML = `R$${deliveryPrice}.00`;
});
