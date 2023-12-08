window.addEventListener("load", () => {

  // SET DELIVERY TIME
  const deliveryTime = Math.round(Math.random() * 60);
  document.getElementById("delivery-time").innerHTML = `${deliveryTime} min`;

  const clientName = sessionStorage.getItem("CLIENT-NAME");
  document.getElementById("client-name").innerHTML = clientName;
  const clientAddress = sessionStorage.getItem("CLIENT-ADDRESS");
  document.getElementById("client-address").innerHTML = clientAddress;
  const clientPhone = sessionStorage.getItem("CLIENT-PHONE");
  document.getElementById("client-phone").innerHTML = clientPhone;

  // SET DELIVERY PRICE
  const deliveryPrice = deliveryTime + 8;
  sessionStorage.setItem("DELIVERY-PRICE", deliveryPrice);
  document.querySelector("#delivery-price").innerHTML = `R$${deliveryPrice}.00`



})
