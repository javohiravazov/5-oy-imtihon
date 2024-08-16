export const elInput1 = document.querySelector(".input1");
const elInput2 = document.querySelector(".input2");
const elResetFiltered = document.querySelector("#reset");
const elCategories = document.querySelector("#popularityFilter");

const products = [
  {
    id: 1,
    name: "Вариантный замок Golden Soft для отеля",
    price: "7000",
    oldPrice: "8000",
    rating: 5,
    image: "images/image1.png",
    available: true,
    categories: ["Sport"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 2,
    name: "Дверной Замок Golden Soft для офиса",
    price: "33000",
    oldPrice: "39 000",
    rating: 4,
    image: "images/image2.png",
    available: true,
    categories: ["Sport", "IT"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 3,
    name: "Дверной Замок Golden Soft для офиса",
    price: "9000",
    oldPrice: "12 000",
    rating: 4.5,
    image: "images/image1.png",
    available: true,
    categories: ["Manager"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 4,
    name: "Вариантный замок Golden Soft для отеля",
    price: "7000",
    oldPrice: "8 000",
    rating: 5,
    image: "images/image1.png",
    available: true,
    categories: ["Sport", "IT"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 5,
    name: "Дверной Замок Golden Soft для офиса",
    price: "33000",
    oldPrice: "39 000",
    rating: 4,
    image: "images/image2.png",
    available: true,
    categories: ["Sport", "Manager"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 6,
    name: "Дверной Замок Golden Soft для офиса",
    price: "9000",
    oldPrice: "12 000",
    rating: 4.5,
    image: "images/image1.png",
    available: true,
    categories: ["Sport", "test"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 7,
    name: "Вариантный замок Golden Soft для отеля",
    price: "7000",
    oldPrice: "8 000",
    rating: 5,
    image: "images/image1.png",
    available: true,
    categories: ["Sport", "IT"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 8,
    name: "Дверной Замок Golden Soft для офиса",
    price: "33000",
    oldPrice: "39 000",
    rating: 4,
    image: "images/image2.png",
    available: true,
    categories: ["test", "music"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
  {
    id: 9,
    name: "Дверной Замок Golden Soft для офиса",
    price: "9000",
    oldPrice: "12 000",
    rating: 4.5,
    image: "images/image1.png",
    available: true,
    categories: ["music", "IT"],
    description:
      "Замок дверной электронный Golden Soft GS-200Z-5 имеет роскошный глянцевый блеск, четкие линии, красивые формы. Подходит для установки на деревянную/межкомнатную дверь. ",
  },
];
localStorage.setItem("products", JSON.stringify(products));

function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${
      product.name
    }" data-id="${product.id}">
      <img class="x" src="images/x.png" alt="">
      <img class="word" src="images/word.png" alt="">  
      <img class="podarka" src="images/podarka.png" alt=""> 
      <div class="rating">${"★".repeat(Math.floor(product.rating))}</div>
      <div class="title">${product.name}</div>
      <div class="price">${product.price}Р <span class="old-price">${
      product.oldPrice
    }Р</span>
      <img class="special-icon" src="images/Frame.png" alt=""></div>
      <div class="categories">${product.categories.join(", ")}</div>
    `;
    productList.appendChild(productCard);
  });
  productList.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("product-image")) {
      const productId = evt.target.dataset.id;
      if (productId) {
        localStorage.setItem("selectedProductId", productId);
        window.location.href = "product-details.html";
      }
    }
    if (evt.target.classList.contains("special-icon")) {
      const productId = evt.target
        .closest(".product-card")
        .querySelector(".product-image").dataset.id;
    }
  });
}

function filterProductsByPrice() {
  const minPrice = Number(elInput1.value) || 0;
  const maxPrice = Number(elInput2.value) || Infinity;
  function parsePrice(priceString) {
    return Number(priceString.replace(/\D/g, ""));
  }
  const filteredProducts = products.filter((product) => {
    const productPrice = parsePrice(product.price);
    return productPrice >= minPrice && productPrice <= maxPrice;
  });
  renderProducts(filteredProducts);
}
elInput1.addEventListener("input", filterProductsByPrice);
elInput2.addEventListener("input", filterProductsByPrice);

elResetFiltered.addEventListener("click", () => {
  elInput1.value = "";
  elInput2.value = "";
  renderProducts(products);
});

const categories = ["test", "music", "IT", "Manager", "Sport"];

window.addEventListener("DOMContentLoaded", function () {
  renderProducts(products);

  categories.forEach((category) => {
    const newOption = document.createElement("option");
    newOption.value = category;
    newOption.textContent = category;
    elCategories.appendChild(newOption);
  });
});
elCategories.addEventListener("change", () => {
  const filteredArray = products.filter((item) =>
    item.categories.includes(elCategories.value)
  );
  renderProducts(filteredArray);
});

/* modal */
let basket = [];

document.querySelector("#product-list").addEventListener("click", (evt) => {
  if (evt.target.classList.contains("special-icon")) {
    const productId = evt.target
      .closest(".product-card")
      .querySelector(".product-image").dataset.id;

    const product = products.find((p) => p.id == productId);
    if (product) {
      basket.push(product);
      updateBasketModal();
    }
  }
});

function updateBasketModal() {
  const basketItemsContainer = document.querySelector("#basket-items");
  basketItemsContainer.innerHTML = "";

  let totalPrice = 0;

  basket.forEach((item, index) => {
    const basketItem = document.createElement("div");
    basketItem.className = "basket-item";
    basketItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="basket-item-image">
      <div class="basket-item-details">
        <span class="modal-title">${item.name}</span><br>
        <span>"Приложение к замкам Golden Service"</span>
      </div>
      <div class="basket-item-price">${item.price}₽</div>
      <a href="#" class="remove-item" data-index="${index}"><img src="images/Удалить.svg" alt="Удалить"></a>
    `;
    basketItemsContainer.appendChild(basketItem);
    totalPrice += parseInt(item.price.replace(/\D/g, ""), 10);
  });

  document.querySelector("#total-price").innerText = totalPrice + "₽";

  document.querySelector("#basketModal").style.display = "block";

  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (evt) => {
      const itemIndex = evt.target.dataset.index;
      basket.splice(itemIndex, 1);
      updateBasketModal();
    });
  });
}

document.querySelector(".close").onclick = function () {
  document.querySelector("#basketModal").style.display = "none";
};

window.onclick = function (event) {
  if (event.target == document.querySelector("#basketModal")) {
    document.querySelector("#basketModal").style.display = "none";
  }
};
