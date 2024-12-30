import './style.css'


const brandPictures = [
    "./Img/Brand1.jpg",  
    "./Img/Brand 2.jpg", 
    "./Img/Brand 3.jpg", 
    "./Img/Brand 4.png", 
];

const container = document.getElementById("app")

if (container) {
for (let i = 0; i < brandPictures.length; i++) {
    const images = document.createElement("img");
    images.src = brandPictures[i];
    container.appendChild(img); 
}
}