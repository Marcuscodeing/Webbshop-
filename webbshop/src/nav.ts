
import './style.css'

window.onload =function myFunction(): void {
    document.querySelector('.icon')?.addEventListener('click', myFunction);
    const x = document.getElementById("myLinks") as HTMLElement;

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
