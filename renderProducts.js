export function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
              <img class="product-image" src="${product.image}" alt="${
      product.name
    }">
              <img class="x" src="images/x.png" alt="">
              <img class="word" src="images/word.png" alt="">  
              <img class="podarka" src="images/podarka.png" alt=""> 
              <div class="rating">${"★".repeat(product.rating)}</div>
              <div class="title">${product.name}</div>
              <div class="price">${product.price}Р <span class="old-price">${
      product.oldPrice
    }Р</span>
      <img class="special-icon" src="images/Frame.png" alt=""></div>
      <div class="categories">${product.categories}</div>
             
          `;
    productCard
      .querySelector(".product-image")
      .addEventListener("click", (evt) => {
        const productId = evt.target.dataset.id;
        localStorage.setItem("selectedProductId", productId);
        window.location.href = "product-details.html";
      });

    productList.appendChild(productCard);
  });
}
