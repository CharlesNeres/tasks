let form = document.querySelector('.create-task-form');
let tasks = document.querySelector('.tasks');

form.addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    let formInput = e.target.firstElementChild;
    createTask(formInput);
    formInput.value = '';
}

function createTask(formInput){
    let task = `
        <div class="task">
            <input type="checkbox" onchange="finishTask(event)" name="task" id="" value="">
            <span>${formInput.value}</span>
            <i class="delete-task bi bi-trash" title="Delete task" onclick="deleteTask(event)"></i>
        </div>
    `;

    tasks.innerHTML += task;
}

function deleteTask(e){
    let task = e.target.parentNode;
    
    tasks.removeChild(task);
}

function finishTask(event){
    let checkbox = event.target
    let task = event.target.parentNode;
    let span = task.children[1];
    

    console.log(task)
    if(checkbox.checked){
        // finish task
        span.classList.toggle("finishTask");
    }else{
        // unfinish task
        span.classList.toggle("finishTask");
    }
}