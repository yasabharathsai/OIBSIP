const input = document.querySelector(".text");
const todoList = document.querySelector(".list");
const button = document.querySelector(".input-section button");
const todoForm = document.querySelector(".form");


todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
});

showTasks();

button.onclick = () => {
  let usertyped = input.value;
  if(usertyped.length == 0){
    alert("Please Enter the Task Name");
  }else{
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    arr = [];
  } else {
    arr = JSON.parse(getLocalStorage);
  }
  arr.push(usertyped);
  localStorage.setItem("New Todo", JSON.stringify(arr));
  showTasks();
}
};

function showTasks() {
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    arr = [];
  } else {
    arr = JSON.parse(getLocalStorage);
  }
  let newLine = "";
  arr.forEach((element, index) => {
    newLine += `<li>
        ${element} <span onclick="deleteTask(${index})"><i class="fas fa-trash"></i> </span>
      </li>`;
  });
  todoList.innerHTML = newLine;
  input.value = "";
}

function deleteTask(index) {
  let getLocalStorage = localStorage.getItem("New Todo");
  arr = JSON.parse(getLocalStorage);
  arr.splice(index, 1);
  localStorage.setItem("New Todo", JSON.stringify(arr));
  showTasks();
}