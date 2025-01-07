import './style.css'


window.onload = () => {
    const cartContainer = document.getElementById("app");

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Stored Product from localStorage: ", cartItems);

    
    cartItems.forEach((cartItem: any) => {

        const product = cartItem.product;
        const size = cartItem.size;
        

        const productDiv = document.createElement("div");
        productDiv.classList.add("cart-item");
       
        const img = document.createElement("img");
        img.src = cartItem.product.image;
        img.alt = cartItem.product.title;
        productDiv?.appendChild(img);
  
        const title = document.createElement("h3");
        title.innerHTML = cartItem.product.title;
        productDiv?.appendChild(title);

  
        const price = document.createElement("p");
        price.textContent = `Price: $${cartItem.product.price}`;
        productDiv?.appendChild(price);

        const deleteBtn = document.createElement("button");
        productDiv?.appendChild(deleteBtn);

        deleteBtn?.addEventListener("click", () => {
            //removeItem?
        })

        cartContainer?.appendChild(productDiv);

        
    });

    



};