
import './style.css';
import { CartItem } from './types/models';

// Funktionalitet vid sidladdning och lagring av produkter.  

window.onload = () => {

const checkout = document.getElementById("checkout-container");
const cartItems: CartItem [] = JSON.parse(localStorage.getItem("cart") || "[]" );

if (cartItems.length === 0 ) {
  checkout!.innerHTML = "Din varukorg är tom";
return;
}

// Variabler för att räkna ut priserna med och utan moms 

const momssats: number = 0.25;
let totalExTax: number = 0;
let totalWithTax: number = 0;
let totalWithBoth: number = 0;


// Skapa Html och loop igenom bild title pris. Produkter i varukorg  

const productskassa = document.createElement("div");
productskassa.className = "products"; 

cartItems.forEach((cartItem, index ) => {
  const size = cartItem.size;
  let quantity = cartItem.quantity;


  const kassaDiv = document.createElement ("div");
  kassaDiv.className = "kassasida"

  const kassaImg = document.createElement("img");
  kassaImg.src = cartItem.product.image;
  kassaImg.alt = cartItem.product.title;
  kassaImg.className = "kassaimg"
  kassaDiv?.appendChild(kassaImg);

  const kassaTitle = document.createElement("h3");
  kassaTitle.innerHTML = cartItem.product.title;
  kassaDiv?.appendChild(kassaTitle);

  const kassaPrice = document.createElement("p");
  kassaPrice.innerHTML = `Pris: $${cartItem.product.price}`;
  
  const sizeElement = document.createElement("p");
  sizeElement.textContent = `Size: ${size}`;
  kassaDiv.appendChild(sizeElement);


  const quantityAntal = document.createElement("p");
  quantityAntal.textContent = `Quantity: ${quantity}`;
  kassaDiv.appendChild(quantityAntal);

  kassaDiv.appendChild(kassaPrice);
  checkout?.appendChild(kassaDiv);


  // Kod för knappar som tar bort och lägger till samt uppdaterar LS

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
  
      kassaDiv.appendChild(decreaseBtn);

      });

      // knapp för att ta bort varan 

      const deleteBtn = document.createElement("button");
      deleteBtn.innerHTML = "Ta bort";
      deleteBtn.id = "cart-del";
      deleteBtn?.addEventListener("click", () => {

      
        const uppdateradLs = cartItems.filter(item => item !== cartItem);
        localStorage.setItem ("cart", JSON.stringify(uppdateradLs));
        window.location.reload();     

    });

  kassaDiv.appendChild(decreaseBtn);
  kassaDiv.appendChild(deleteBtn);
});

checkout?.appendChild(productskassa);

// Lägg till Summering och användning av moms variabler


const summery = document.createElement("div");
summery.className = "summering";
checkout?.appendChild(summery);

// funktion för att uppdatera  och beräkna summering av produkter baserat på varukorgen. 
// vill visa tre tydliga fält med priser med moms, utan moms och totalt 

const updateSummery = () => {

  totalExTax = 0;
  totalWithTax = 0;

  cartItems.forEach(cartItem => {
    totalExTax += cartItem.product.price * cartItem.quantity
  totalWithTax += cartItem.product.price * cartItem.quantity * momssats;

  });

totalWithBoth = totalExTax + totalWithTax;

// töm eller rensa tidigare innheåll för att uppdatera me nytt. 

summery.innerHTML = "";

const noTax = document.createElement("p");
noTax.innerHTML = `Totalt pris (utan moms): <span> $${totalExTax.toFixed(2)}</span>`; 
summery.appendChild(noTax);

const hr1 = document.createElement("hr");
summery.appendChild(hr1) 

const tax = document.createElement("p");
tax.innerHTML = `Moms (25%): <span> $${totalWithTax.toFixed(2)}</span>`;
summery.appendChild(tax)

const hr2 = document.createElement("hr");
summery.appendChild(hr2) 

const totalSum = document.createElement ("p");
totalSum.innerHTML = `Totalt pris (inkl moms) <span> $${totalWithBoth.toFixed(2)} </span>`;
summery.appendChild(totalSum);

};

updateSummery();

// Total belop att betal längst ned på sidan. 

const totalPayment = document.getElementById("totalPayment"); 
const totalPaymentText = document.createElement("p");
totalPaymentText.className = "totalPayment-text";
totalPaymentText.innerHTML = `Totaltbelopp <span> $${totalWithBoth.toFixed(2)} </span>`;
totalPayment?.appendChild(totalPaymentText);

};

// sista knappen för att genomföra köp! 

const finalBtn = document.getElementById("complete-order");
finalBtn?.addEventListener ("click", () => {
  window.location.href = "sista-sidan.html";
});



