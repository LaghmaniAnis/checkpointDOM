let carts = document.querySelectorAll("button");
let products = [
  {
    name: "Bubble Gum",
    tag: "bubblegum",
    price: 40,
    inCart: 0,
  },
  {
    name: "Gelato",
    tag: "gelato",
    price: 42,
    inCart: 0,
  },
  {
    name: "Lemon Haze",
    tag: "lemonhaze",
    price: 40,
    inCart: 0,
  },
  {
    name: "MoonRock",
    tag: "moonrock",
    price: 42,
    inCart: 0,
  },
  {
    name: "Orange Haze",
    tag: "orangehaze",
    price: 40,
    inCart: 0,
  },
  {
    name: "Huile de CBD",
    tag: "huiledecbd",
    price: 100,
    inCart: 0,
  },
  {
    name: "Thé CBD",
    tag: "thecbd",
    price: 50,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}
function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);
  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsinCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsinCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  // console.log("the product price is ", product.price);
  let cartCost = localStorage.getItem("totalCost");

  console.log("my cart cost is ", cartCost);
  console.log(typeof cartCost);
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

onLoadCartNumbers();
