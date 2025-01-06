import './style.css'


fetch("https://fakestoreapi.com/products/category/women's clothing")
.then((response) => response.json())
.then((products) => {

  
  const popularProducts = products.slice(0, 8);

  const productsContainer2 = document.getElementById("products-dam");

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

      const button = document.createElement("button");
      button.innerHTML = "Add to cart";
      productDiv.appendChild(button);

      productsContainer2.appendChild(productDiv);

      button.addEventListener("click", () => {
        //saveProductToLocalStorage(product);  //Skapa en funktion? Array?
        console.log("Selected Product:", product);

        localStorage.setItem("selectedProduct", JSON.stringify(product));
        window.location.href = "product.html"; //skickar mig till product.html
      });
    })
  } else {
    console.log("Error!");
  }
})