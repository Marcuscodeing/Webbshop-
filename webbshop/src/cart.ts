import './style.css'
interface Product {
    title: string;
    price: number;
    image: string;
}

interface CartItem {
    product: Product;
    size: string;
    quantity: number;
}

window.onload = () => {
    const cartContainer = document.getElementById("app");

    const cartItems: CartItem []  = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Stored Product from localStorage: ", cartItems);

    
    cartItems.forEach((cartItem, index) => {


        //const product = cartItem.product;
        const size = cartItem.size;
        let quantity = cartItem.quantity;


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

        //const size = document.createElement("p");
        //size.textContent = `Size: ${size}`;
        //productDiv.appendChild(size); //Storlek

        const sizeElement = document.createElement("p");
        sizeElement.textContent = `Size: ${size}`;
        productDiv.appendChild(sizeElement);


        const quantityAntal = document.createElement("p");
        quantityAntal.textContent = `Quantity: ${quantity}`;
        productDiv.appendChild(quantityAntal); //Antal

        const increaseBtn = document.createElement("button");
        increaseBtn.innerHTML = "+";
        increaseBtn.addEventListener("click", () => {
            quantity += 1;
            cartItems[index].quantity = quantity;
            localStorage.setItem("cart", JSON.stringify(cartItems));
            quantityAntal.textContent = `Quantity: ${quantity}`;
            price.textContent = `Price: $${(cartItem.product.price * quantity).toFixed(2)}`;
        });

        productDiv.appendChild(increaseBtn);

        const decreaseBtn = document.createElement("button");
        decreaseBtn.innerHTML = "-";
        decreaseBtn.addEventListener("click", () => {
            quantity -= 1;
            cartItems[index].quantity = quantity;
            localStorage.setItem("cart", JSON.stringify(cartItems));
            quantityAntal.textContent = `Quantity: ${quantity}`;
            price.textContent = `Price: $${(cartItem.product.price * quantity).toFixed(2)}`;
        });

        productDiv.appendChild(decreaseBtn);

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