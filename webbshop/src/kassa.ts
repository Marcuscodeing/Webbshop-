
import './style.css';

interface Product {
    title: string;
    price: number;
    image: string;
}

interface CartItem {
    product: Product;
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


const productskassa = document.createElement("div");
productskassa.className = "products"; 

cartItems.forEach((cartItem) => {

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
  kassaPrice.innerHTML = `Pris: ${cartItem.product.price}`;

  totalExTax += cartItem.product.price;
  totalWithTax += cartItem.product.price * momssats;

  kassaDiv.appendChild(kassaPrice);
  checkout?.appendChild(kassaDiv);
});

checkout?.appendChild(productskassa);

// Lägg till Summering.  


const summery = document.createElement("div");
summery.className = "summering";

totalWithBoth = totalExTax + totalWithTax;

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

checkout?.appendChild(summery);



const totalPayment = document.getElementById("totalPayment"); 
const totalPaymentText = document.createElement("p");
totalPaymentText.className = "totalPayment-text";
totalPaymentText.innerHTML = `Totaltbelopp <span> ${totalWithBoth.toFixed(2)} </span>`;
totalPayment?.appendChild(totalPaymentText);


const finalButt = document.getElementById("complete-order");
finalButt?.addEventListener ("click", () => {
  window.location.href = "sista-sidan.html";
});

};