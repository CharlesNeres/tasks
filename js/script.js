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
            <form action="" class="form-edit-task" name="form-edit-task">
                <input type="text" value="${formInput.value}" disabled>            
            </form>          
            <i class="delete-task bi bi-trash" title="Delete task" onclick="deleteTask(event)"></i>
            <i class="edit-task bi bi-pencil" title="Edit task" onclick="editTask(event)"></i>
        </div>
    `;

    tasks.innerHTML += task;
}

function deleteTask(e){
    let task = e.target.parentNode;
    
    tasks.removeChild(task);
}

function editTask(e){
    // div class task
    let task = e.target.parentNode; 
    // form to edit task
    let form = task.children[1];
    // input inside form to edit task
    let taskInput = form.firstElementChild;
    
    // when click on edit task icon, taskinput will be enabled and focused
    taskInput.disabled = false;
    taskInput.focus();
    
    // if the user press enter, the taskinput will be disabled and lose focus
    form.addEventListener('submit', function(e){
        e.preventDefault();
        taskInput.disabled = true;
        taskInput.blur();
    });

    // if the user click outisde the input field, the focus will be lost
    taskInput.addEventListener('blur', function(){
        this.disabled = true;        
    });
}

function finishTask(event){
    let checkbox = event.target
    let form = event.target.nextElementSibling;   
    // input inside form
    let taskInput = form.firstElementChild;
    
    if(checkbox.checked){
        // finish task
        taskInput.classList.toggle("finishTask");
    }else{
        // unfinish task
        taskInput.classList.toggle("finishTask");
    }
}