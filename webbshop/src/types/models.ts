
// interface för att skapa struktur för en produkt med title, price, img. 

export interface Product {
    id: number;
    title: string 
    price: number;
    image: string; 
    category: string;
  }

// interface för att definera en vara i kundkorgen. 

export interface CartItem {
    product: Product;
    size: string;
    quantity: number;
}
