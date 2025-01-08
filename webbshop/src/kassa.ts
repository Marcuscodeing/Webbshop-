
import './style.css';

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

// Hämta våra kära produkter 

window.onload = () => {

const checkout = document.getElementById("checkout-container");
const cartItems: CartItem [] = JSON.parse(localStorage.getItem("cart") || "[]" );

if (cartItems.length === 0 ) {
  checkout!.innerHTML = "Din varukorg är tom";
return;
}

// Variabler för att räkna ut priserna

const momssats: number = 0.25;
let totalExTax: number = 0;
let totalWithTax: number = 0;
let totalWithBoth: number = 0;


// Skapa div och loop igenom bild title pris 

const productskassa = document.createElement("div");
productskassa.className = "products"; 

cartItems.forEach((cartItem, index ) => {
  const size = cartItem.size;
  let quantity = cartItem.quantity;


  const kassaDiv = document.createElement ("div");
  kassaDiv.className = "kassasida"

  const sizeElement = document.createElement("p");
  sizeElement.textContent = `Size: ${size}`;
  kassaDiv.appendChild(sizeElement);


  const quantityAntal = document.createElement("p");
  quantityAntal.textContent = `Quantity: ${quantity}`;
  kassaDiv.appendChild(quantityAntal);


  const kassaImg = document.createElement("img");
  kassaImg.src = cartItem.product.image;
  kassaImg.alt = cartItem.product.title;
  kassaImg.className = "kassaimg"
  kassaDiv?.appendChild(kassaImg);

  const kassaTitle = document.createElement("h3");
  kassaTitle.innerHTML = cartItem.product.title;
  kassaDiv?.appendChild(kassaTitle);

  const kassaPrice = document.createElement("p");
  kassaPrice.innerHTML = `Pris: ${cartItem.product.price}`;
  
  

  kassaDiv.appendChild(kassaPrice);
  checkout?.appendChild(kassaDiv);

  const increaseBtn = document.createElement("button");
  increaseBtn.innerHTML = "+";
  increaseBtn.addEventListener("click", () => {
      quantity += 1;
      cartItems[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      quantityAntal.textContent = `Quantity: ${quantity}`;
      kassaPrice.textContent = `Price: $${(cartItem.product.price * quantity).toFixed(2)}`;
  
      updateSummery ();
  
    });

  kassaDiv.appendChild(increaseBtn);

  const decreaseBtn = document.createElement("button");
  decreaseBtn.innerHTML = "-";
  decreaseBtn.addEventListener("click", () => {
      quantity -= 1;
      cartItems[index].quantity = quantity;
      localStorage.setItem("cart", JSON.stringify(cartItems));
      quantityAntal.textContent = `Quantity: ${quantity}`;
      kassaPrice.textContent = `Price: $${(cartItem.product.price * quantity).toFixed(2)}`;
  
      updateSummery();
  
    });

  kassaDiv.appendChild(decreaseBtn);

});

checkout?.appendChild(productskassa);

// Lägg till Summering.  


const summery = document.createElement("div");
summery.className = "summering";
checkout?.appendChild(summery);

const updateSummery = () => {

  totalExTax = 0;
  totalWithTax = 0;

  cartItems.forEach(cartItem => {
    totalExTax += cartItem.product.price * cartItem.quantity
  totalWithTax += cartItem.product.price * cartItem.quantity * momssats;

  });


totalWithBoth = totalExTax + totalWithTax;

summery.innerHTML = "";


const noTax = document.createElement("p");
noTax.innerHTML = `Totalt pris (utan moms): <span> ${totalExTax.toFixed(2)}</span>`; 
summery.appendChild(noTax);

const hr1 = document.createElement("hr");
summery.appendChild(hr1) 

const tax = document.createElement("p");
tax.innerHTML = `Moms (25%): <span> ${totalWithTax.toFixed(2)}</span>`;
summery.appendChild(tax)

const hr2 = document.createElement("hr");
summery.appendChild(hr2) 

const totalSum = document.createElement ("p");
totalSum.innerHTML = `Totalt pris (inkl moms) <span> ${totalWithBoth.toFixed(2)} </span>`;
summery.appendChild(totalSum);

};

updateSummery();

const totalPayment = document.getElementById("totalPayment"); 
const totalPaymentText = document.createElement("p");
totalPaymentText.className = "totalPayment-text";
totalPaymentText.innerHTML = `Totaltbelopp <span> ${totalWithBoth.toFixed(2)} </span>`;
totalPayment?.appendChild(totalPaymentText);

};


const finalButt = document.getElementById("complete-order");
finalButt?.addEventListener ("click", () => {
  window.location.href = "sista-sidan.html";
});



