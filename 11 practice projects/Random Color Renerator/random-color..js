const colorCode = document.querySelector(".color-code");
const colorBtn = document.querySelector(".color-btn");

const getColor = () => {
    //hexa-decimal code
    const randomNumber = Math.floor(Math.random()*16777215);
    const randomCode = "#"+ randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode
    colorCode.innerText = randomCode;
    
}

colorBtn.addEventListener('click',getColor)

getColor();