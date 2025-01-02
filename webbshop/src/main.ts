import './style.css'


fetch("https://fakestoreapi.com/products/category/women's clothing")
.then((Response) => Response.json())
.then((products) => {

  const popularProducts = products.slice(0, 4);

  const productsContainer = document.getElementById("products-container");

  if (productsContainer) {
    popularProducts.forEach((product: any) => {
      const productDiv = document.createElement("div");
      productDiv.className = "theDiv";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      productDiv.appendChild(img);

      const title = document.createElement("h3");
      title.textContent = product.title;
      productDiv.appendChild(title);

      const price = document.createElement("p");
      price.textContent = `Price: $${product.price}`;
      productDiv.appendChild(price);

      productsContainer.appendChild(productDiv);
    })
  } else {
    console.log("Error!");
  }
})

fetch("https://fakestoreapi.com/products/category/men's clothing")
.then((Response) => Response.json())
.then((products) => {

  const popularProducts = products.slice(0, 4);

  const productsContainer2 = document.getElementById("products-container2");

  if (productsContainer2) {
    popularProducts.forEach((product: any) => {
      const productDiv = document.createElement("div");
      productDiv.className = "theDiv";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      productDiv.appendChild(img);

      const title = document.createElement("h3");
      title.textContent = product.title;
      productDiv.appendChild(title);

      const price = document.createElement("p");
      price.textContent = `Price: $${product.price}`;
      productDiv.appendChild(price);

      productsContainer2.appendChild(productDiv);
    })
  } else {
    console.log("Error!");
  }
})
