document.addEventListener("DOMContentLoaded", function () {
  const elMainImg = document.querySelector("#main-img");
  const elProductName = document.querySelector("#product-name");
  const elProductDescription = document.querySelector("#product-description");
  const elProductPrice = document.querySelector("#product-price");
  const elProductOldPrice = document.querySelector("#product-oldPrice");

  const id = localStorage.getItem("selectedProductId")
    ? +localStorage.getItem("selectedProductId")
    : 1;
  const products = JSON.parse(localStorage.getItem("products"));

  if (products && Array.isArray(products)) {
    const product = products.find((element) => element.id === id);

    if (product) {
      elMainImg.src = product.image;
      elProductName.textContent = product.name;
      elProductDescription.textContent =
        "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь.";
      if (product.oldPrice) {
        elProductPrice.innerHTML = `${product.price}Р`;
        elProductOldPrice.innerHTML = `${product.oldPrice}Р`;
      } else {
        elProductPrice.innerHTML = `${product.price}Р`;
        elProductOldPrice.textContent = "";
      }
    }
  }
});
