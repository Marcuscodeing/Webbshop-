import './style.css'



const brandPictures = [
    "./Img/Brand 4.png",  
    "./Img/Brand 2.jpg", 
    "./Img/Brand 3.jpg", 
    "./Img/Brand1.jpg", 
    
];


const container = document.createElement("div")
const headline = document.createElement ("h2")
headline.innerHTML = "Utvalda kollektioner"
headline.className = "h2-brands"


if (container) {
for (let i = 0; i < brandPictures.length; i++) {
    const images = document.createElement("img");
    images.src = brandPictures[i];
    images.className = "brand-images"; 

    const imgText = document.createElement("p");
    imgText.innerHTML = "Utforska"

    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container"
    

    imageContainer.appendChild(images);
    imageContainer.appendChild(imgText);
    container.appendChild(imageContainer);
    
}};

document.body.appendChild(headline);
document.body.appendChild(container);
container.className = "brand-container"



interface Product {
  id: number;
  title: string 
  price: number;
  image: string; 
  category: string;
}


async function getCloths (): Promise<Product[]> {

  try {
    const response = await fetch ("https://fakestoreapi.com/products?category=men's clothing&category=women's clothing");
    
    if (!response.ok) {
      throw new Error ("Not ok");
    }

    const clothsData: Product[] = await response.json();
    console.log(clothsData);
    return clothsData;
  } catch (error){
    console.error ("Failed to fetch cloths:", error);
    return[];
  }
}

async function clothProducts () {
  const productsContainer = document.getElementById("product-container");
  if (!productsContainer) {
    console.error ("Couldent find product");
    return;
  }

  const products = await getCloths();

  const filteredProducts = products.filter(product => 
    product.category === "men's clothing" || product.category === "women's clothing"
  );


filteredProducts.forEach ((product) => {
  
  const productArea = document.createElement("div");
  productArea.className = "product-area";

  const img = document.createElement("img");
  img.src = product.image;
  img.alt = product.title;

  const title = document.createElement("h3");
  title.textContent = product.title;
  
  const price = document.createElement("p");
  price.textContent = "$" + product.price.toFixed(2);

  const button = document.createElement("button");
  button.textContent = "Add to cart";
  
  productArea.appendChild(img);
  productArea.appendChild(title);
  productArea.appendChild(price);
  productArea.appendChild(button);
  productsContainer.appendChild(productArea);

});
}


clothProducts ();





fetch("https://fakestoreapi.com/products/category/women's clothing")
.then((Response) => Response.json())
.then((products) => {

  const popularProducts = products.slice(0, 4);

  const productsContainer = document.getElementById("products-container");

  if (productsContainer) {
    popularProducts.forEach((product: any) => {
      const productDiv = document.createElement("div");
      productDiv.className = "theDiv";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      productDiv.appendChild(img);

      const title = document.createElement("h3");
      title.textContent = product.title;
      productDiv.appendChild(title);

      const price = document.createElement("p");
      price.textContent = `Price: $${product.price}`;
      productDiv.appendChild(price);

      productsContainer.appendChild(productDiv);
    })
  } else {
    console.log("Error!");
  }
})

fetch("https://fakestoreapi.com/products/category/men's clothing")
.then((Response) => Response.json())
.then((products) => {

  const popularProducts = products.slice(0, 4);

  const productsContainer2 = document.getElementById("products-container2");

  if (productsContainer2) {
    popularProducts.forEach((product: any) => {
      const productDiv = document.createElement("div");
      productDiv.className = "theDiv";

      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      productDiv.appendChild(img);

      const title = document.createElement("h3");
      title.textContent = product.title;
      productDiv.appendChild(title);

      const price = document.createElement("p");
      price.textContent = `Price: $${product.price}`;
      productDiv.appendChild(price);

      productsContainer2.appendChild(productDiv);
    })
  } else {
    console.log("Error!");
  }
})
