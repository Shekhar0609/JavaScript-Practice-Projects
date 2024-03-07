const inputText = document.querySelector("#input-text");
const toDoBox = document.querySelector(".to-do-box");

inputText.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addTodo(this.value);
    this.value == "";
  }
});

const addTodo = (text) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = `${text}
    <i class="fa-solid fa-xmark"></i>`;

    
    listItem.addEventListener("click", function () {
        this.classList.toggle("done");
    });
    
    
    listItem.querySelector("i").addEventListener("click", function () {
        listItem.remove();
    });
    
    toDoBox.appendChild(listItem);
};
