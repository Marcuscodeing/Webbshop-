import './style.css'
interface Product {
    title: string;
    price: number;
    image: string;
}

interface CartItem {
    product: Product;
}

window.onload = () => {
    const cartContainer = document.getElementById("app");

    const cartItems: CartItem []  = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Stored Product from localStorage: ", cartItems);

    
    cartItems.forEach((cartItem) => {



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
        deleteBtn.innerHTML = "Ta bort";
        deleteBtn?.addEventListener("click", () => {
            //knapp för att ta bort produkt, men hur öka/minska produkter?
        
            const uppdateradLs = cartItems.filter(item => item !== cartItem);
            localStorage.setItem ("cart", JSON.stringify(uppdateradLs));
            window.location.reload();         
        });

        productDiv?.appendChild(deleteBtn);
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