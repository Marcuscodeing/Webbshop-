

interface Product {
    id: number;
    title: string 
    price: number;
    image: string; 
    category: string;
  }

const checkOutPage = document.getElementById("checkout-container") as HTMLElement;
const cart: Product []= JSON.parse(localStorage.getItem ("cart") || "[]" );

if (cart.length === 0) {
  checkOutPage.innerHTML = "Din varukorg är tom.";

} else {
  let total = 0;

  cart.forEach (product => {

    console.log(product);
    const checkOutProductsDiv = document.createElement ("div");
    checkOutProductsDiv.className = "product-in-checkout"; 

    const kassaImg = document.createElement("img");
    kassaImg.src = product.image;
    kassaImg.alt = product.title;
    checkOutProductsDiv.appendChild(kassaImg);

    const kassaTitle = document.createElement("h3");
    kassaTitle.innerHTML = product.title;
    checkOutProductsDiv.appendChild(kassaTitle);

    const kassaPrice = document.createElement("p");
    kassaPrice.innerHTML = `${product.price.toFixed(2)}`;
    checkOutProductsDiv.appendChild(kassaPrice);

    checkOutPage?.appendChild(checkOutProductsDiv);

    total += product.price || 0 ;
  }); 

const kassaTotalPrice = document.createElement("div");
kassaTotalPrice.innerHTML = `${total.toFixed(2)}`;
checkOutPage?.appendChild(kassaTotalPrice);

const orderButton = document.createElement("button");
orderButton.innerHTML = "Slutför beställning";


checkOutPage?.appendChild(orderButton);
}


