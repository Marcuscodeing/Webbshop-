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