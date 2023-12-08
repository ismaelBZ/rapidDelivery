const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  for (let [name, value] of formData) {
    sessionStorage.setItem(`${name.toUpperCase()}`, `${value}`);
  }
  
 window.location.pathname = "checkout.html"
})
