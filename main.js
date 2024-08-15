const elInput1 = document.querySelector(".input1");
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
  },
];
function renderProducts(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  products.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";

    productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <img class="x" src="images/x.png" alt="">
            <img class="word" src="images/word.png" alt="">  
            <img class="podarka" src="images/podarka.png" alt=""> 
            <div class="rating">${"★".repeat(product.rating)}</div>
            <div class="title">${product.name}</div>
            <div class="price">${product.price}Р <span class="old-price">${
      product.oldPrice
    }Р</span></div>
    <div class="categories">${product.categories}</div>
           
        `;

    productList.appendChild(productCard);
  });
}

renderProducts(products);
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
