let todos = []

function addTodo() {
    const inputTodo = document.getElementById('inputTodo');
    const title = inputTodo.value;
    const id = '' + new Date().getTime();

    todos.push({
        name: title,
        id: id
    })

    inputTodo.value = '';
    console.log(todos)
    showTodo()
    
}

function removeTodo(event) {
    const deleteBtn = event.target
    const deleteTodo = deleteBtn.id

    todos = todos.filter(todo => todo.id !== deleteTodo)
    showTodo()
    console.log(todos)
}

function showTodo() {
    document.getElementById("todoContainer").textContent = '';
    // document.getElementById("deleteBtnContainer").textContent = '';

    todos.forEach(function(todo) {
        const titleContainer = document.createElement('p');
        titleContainer.id = "titleContainer"
        titleContainer.textContent = "● " + todo.name;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Done"
        deleteBtn.style.padding = "5px 10px"
        deleteBtn.style.borderRadius = "5px"
        deleteBtn.style.border = "1px solid black"
        deleteBtn.style.marginLeft = "5px";
        deleteBtn.style.backgroundColor = "#ffb5a7"
        deleteBtn.style.cursor = "pointer"
        deleteBtn.id = todo.id;
        deleteBtn.onclick = removeTodo;
        titleContainer.appendChild(deleteBtn)

        const todoContainer = document.getElementById('todoContainer');
        todoContainer.appendChild(titleContainer)
    })
}