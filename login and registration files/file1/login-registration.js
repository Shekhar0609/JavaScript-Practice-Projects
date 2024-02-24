const wrapper = document.querySelector(".wrapper");
const registerLink = document.querySelector(".register-link");
const loginLink = document.querySelector(".login-link");
const loginPop = document.querySelector(".login-pop");
const closeBox = document.querySelector(".close-box");

registerLink.addEventListener("click", () => {
    wrapper.classList.add("active");
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove("active");
});

loginPop.addEventListener('click', () => {
    wrapper.classList.add("active-pop");
});

closeBox.addEventListener('click', () => {
    wrapper.classList.remove("active-pop");
});