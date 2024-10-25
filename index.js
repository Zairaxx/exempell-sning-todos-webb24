let todoInput = document.querySelector("#todo");
let addTodoBtn = document.querySelector("#addTodo");
let todoList = document.querySelector("#todoList");

addTodoBtn.addEventListener("click", () => {
    if(todoList.children.length === 5) {
        alert("Too many todos. Get some work done first!");
    } else {
    let li = document.createElement("li");
    let newTodo = todoInput.value;

    //Delete btn

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", (event) => {
        event.target.parentElement.remove()
    })

    li.textContent = newTodo;

    li.append(deleteBtn);
    

     todoList.append(li);
}
})