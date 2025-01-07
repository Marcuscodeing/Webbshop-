import './style.css'


window.onload = () => {
    const cartContainer = document.getElementById("app");

    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Stored Product from localStorage: ", cartItems);

    
    cartItems.forEach((cartItem: any) => {



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
            //knapp för att ta bort produkt, men hur öka/minska produkter?
        })

        cartContainer?.appendChild(productDiv);

        
    });

    if (cartItems.length > 0) { //Om det finns något i varukorgen så visas en knapp för att gå vidare till kassan

        const checkoutButton = document.createElement("button");
        checkoutButton.innerHTML = "Gå vidare till kassan";
        checkoutButton.addEventListener("click", () => {
            localStorage.setItem("cart", JSON.stringify(cartItems));
            window.location.href = "kassa.html"; //Gå vidare till kassan
        })
        cartContainer?.appendChild(checkoutButton);
    }

    



};