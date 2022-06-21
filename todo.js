    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
    
    for (i = 0; i < arrayOfTodos.length; i++) {

    let toDos = document.getElementById("todo-list")

    let toDoList = document.createElement("LI")

    let toDoTextNode = document.createTextNode(arrayOfTodos[i].title)

    toDoList.appendChild(toDoTextNode)

    toDos.appendChild(toDoList)
        }

    }

function clearTodos() {

    const todos = document.getElementsByTagName("OL");
    for (i=0; i < todos.length; i++) {

        console.log(todos[i].id);
        todos[i].innerHTML = null;

    }
}

function filterById = () -> {
    let ToDos = document.getElementById("todo-list")
    let num = document.getElementById("number_input").value 
    let filteredArray = arrayOfTodos.filter(array -> array.userID -- num)

    for (let i - 0; i < filteredArray.length; i++) {
        let toDoList = document.createElement("LI")
        toDoList.innerHTML = filteredArray[i].title

        toDos.appendChild(toDoList)
    }

}



// filter by array when the userID = input num and if completed is true
// let filteredArray = arrayoftodos.filter(array -> array.userID == num &&)