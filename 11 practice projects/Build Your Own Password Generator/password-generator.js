const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet = "!@#$%%^&*()_+?/|";

const passBox = document.querySelector(".pass-box");
const totalChar = document.querySelector("#total-char");
const upperInput = document.querySelector("#upper-case");
const lowerInput = document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symbolInput = document.querySelector("#symbols");

const botton = document.querySelector(".btn");

const getRandomData = (dataSet) => {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
};

const generatePaassword = (password = "") => {
  if (upperInput.checked) {
    password = password + getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password = password + getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password = password + getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password = password + getRandomData(symbolSet);
  }
  if(password.length < totalChar.value) {
    return generatePaassword(password)
  }
  passBox.innerText = truncateStringe(password, totalChar.value);
};


botton.addEventListener("click", function () {
  generatePaassword();
});

function truncateStringe(str, num) {
    if(str.length > num) {
        let substr = str.substring(0, num);
        return substr;
    }else{
        return str;
    }
}
