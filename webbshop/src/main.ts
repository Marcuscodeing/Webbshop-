import './style.css'


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


