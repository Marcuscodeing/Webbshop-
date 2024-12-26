import './style.css'

interface Product {
  id: number;
  title: string 
  price: number;
  description: string;
  image: string 
  category: string;
}


async function getCloths (): Promise<Product[]> {

  try {
    const response = await fetch ("https://api.escuelajs.co/api/v1/categories/1/products");
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
  const products = document.getElementById("product-container");
  if (!products) {
    console.error ("Couldent find product");
    return;
  }

  const products = await getCloths();

} 








