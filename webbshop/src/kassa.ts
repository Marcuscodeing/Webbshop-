
import './style.css';

interface Product {
    title: string;
    price: number;
    image: string;
}

interface CartItem {
    product: Product;
}

window.onload = () => {

const checkout = document.getElementById("checkout-container");
const cartItems: CartItem [] = JSON.parse(localStorage.getItem("cart") || "[]" );

if (cartItems.length === 0 ) {
  checkout!.innerHTML = "Din varukorg är tom";
return;
}

let totalPrice = 0;

cartItems.forEach((cartItem) => {

  const kassaDiv = document.createElement ("div");

  const kassaImg = document.createElement("img");
  kassaImg.src = cartItem.product.image;
  kassaImg.alt = cartItem.product.title;

  kassaDiv?.appendChild(kassaImg);

  const kassaTitle = document.createElement("h3");
  kassaTitle.innerHTML = cartItem.product.title;
  kassaDiv?.appendChild(kassaTitle);

  const kassaPrice = document.createElement("p");
  kassaPrice.innerHTML = `Pris: ${cartItem.product.price}`;

  totalPrice += cartItem.product.price;

  checkout?.appendChild(kassaDiv);
});


}