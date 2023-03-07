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
            <input type="checkbox" name="task" id="" value="">
            <span>${formInput.value}</span>
            <i class="delete-task bi bi-trash" title="Delete task"></i>
        </div>
    `;

    tasks.innerHTML += task;
}
