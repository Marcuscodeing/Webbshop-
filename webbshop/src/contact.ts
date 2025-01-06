const myForm = document.getElementById("contact-form") as HTMLFormElement;
const msg = document.getElementById("message") as HTMLTextAreaElement;
const emailInput = document.getElementById("e-mail") as HTMLInputElement;
const telephone = document.getElementById("tel") as HTMLInputElement;

function handleSubmit(event:Event): void{
    event.preventDefault();
    const message = msg.value;
    const email = emailInput.value;
    const tel = telephone.value;
    if(!message || !email  || !tel){
        alert("fields must be filled");
        return;
    }
alert ("form submitted");
myForm.reset();
    
}
myForm.addEventListener("submit", handleSubmit);
