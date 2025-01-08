import './style.css'

window.onload = () => {
    const aDiv = document.getElementById("apps");
    const storedProduct = localStorage.getItem("selectedProduct");
    console.log("Stored Product from localStorage: ", storedProduct);

    if (storedProduct) {

        const product = JSON.parse(storedProduct);
        console.log("Parsed Product: ", product);


        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.title;
        aDiv?.appendChild(img);
        img.className = "productpageimg"
  
        const title = document.createElement("h3");
        title.innerHTML = product.title;
        aDiv?.appendChild(title);

        const description = document.createElement("p");
        description.innerHTML = product.description;
        aDiv?.appendChild(description);
        description.className = "productpage-description"
  
        const price = document.createElement("p");
        price.textContent = `Price: $${product.price}`;
        aDiv?.appendChild(price);

        const sizeMenu = document.createElement("label");
        sizeMenu.innerHTML = "Välj en storlek";

        const selectSize = document.createElement("select");
        const sizes = ["S", "M", "L"];
        sizes.forEach(size => {
            const option = document.createElement("option");
            option.value = size;
            option.innerHTML = size;
            selectSize.appendChild(option);
        });

        aDiv?.appendChild(sizeMenu);
        aDiv?.appendChild(selectSize);
  
        const button = document.createElement("button");
        button.innerHTML = "Add to cart";
        aDiv?.appendChild(button);

        button.addEventListener("click", () => {

            console.log("Selected Product:", product);
            const selectedSize = selectSize.value;

            const cartProduct = { // Fastnat här, hur spara storlek och hämta från localStorage? Skapa en funktion istället? Interface?
                product: product,
                size: selectedSize,
                quantity: 1,
            };

            let cart = JSON.parse(localStorage.getItem("cart") || "[]");
            cart.push(cartProduct);
            localStorage.setItem("cart", JSON.stringify(cart));
            localStorage.setItem("selectedProduct", JSON.stringify(product));
            window.location.href = "cart.html"; 
           
          });

    } else {
        console.log("error");
    }
};
