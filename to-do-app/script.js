// ========== BONUS: Todo App ==========
let todos = [];

function addTodo() {
    // Write your code here
    // step 1: store input (id todoInput) in a variable first, store again the variable as __.value, then insert value into todos array using .push()

    const todoInput = document.getElementById('todoInput')
    const input = todoInput.value;
    const prioritySelect = document.getElementById('prioritySelect');
    const priority = prioritySelect.value;

    //Step 1.1: creating an alert which ensures input to not be blank
    if(input==""){
        alert('please enter a valid input');
        return;
    }
    //Step 1.2: Creating another variable the type of object that needs to be pushed to todos array
    const todo = {
        text: input,
        completed: false,
        priority: priority
    };
    todos.push(todo)
    todoInput.value = "";
    console.log(todos)

    renderTodos();
    updateStats();

}

function toggleTodo(index) {
    // Write your code here 
    todos[index].completed = !todos[index].completed;

    renderTodos();
    updateStats();

}

function deleteTodo(index) {
    // Write your code here
    todos.splice(index,1);
    
    renderTodos();
    updateStats();
}

function renderTodos() {
    // Write your code here
    const list = document.querySelector("#todosList");

    list.innerHTML = '';

    todos.forEach(function(todo,index){
        const container = document.createElement('div');
        container.classList.add('todo-card');
        container.classList.add(todo.priority);


        // const priorityText = document.createElement('span');
        // priorityText.textContent = `(${todo.priority})`;

        // if(todo.priority=='high'){
        //     priorityText.style.color = 'red'
        // } else if(todo.priority=='medium'){
        //     priorityText.style.color = 'orange'
        // } else{
        //     priorityText.style.color = 'green'
        // }


        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        checkbox.checked = todo.completed;

        checkbox.addEventListener('change',function(){
            toggleTodo(index)
            console.log(todos)

        });

        


        const text = document.createElement('span');
        text.textContent = todo.text;
        text.style.margin = '0 10px';

        if (todo.completed){
            text.style.textDecoration='line-through';
        }

        const erase = document.createElement('button')
        erase.textContent = 'Delete';

        erase.addEventListener('click',function(){
            deleteTodo(index);
            console.log(todos)

        });

        container.appendChild(checkbox);
        container.appendChild(text);
        container.appendChild(erase);
        // container.appendChild(priorityText);

        list.appendChild(container)
    })
}

function updateStats() {
    // Write your code here

    const total = todos.length

    const completed = todos.filter(function(todo) {todo.completed}).length;

    document.getElementById('todoStats').textContent = `Total:${total}|Completed:${completed}`;
}

document.getElementById('todoInput')?.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addTodo();
    }
});