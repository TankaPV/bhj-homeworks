const taskInput = document.getElementById('task__input');
console.log(taskInput);

const tasksList = document.getElementById('tasks__list');
console.log(tasksList);

const tasksAdd = document.getElementById('tasks__add');
console.log(tasksAdd);

function appendElement(value) {
    const div = document.createElement('div');        
    div.className = 'task';
    div.innerHTML = `<div class="task__title">
    ${value}
    </div>
    <a href="#" class="task__remove">&times;</a>
    </div>`;
    tasksList.appendChild(div);
}

function updateStorage() {
    const data = [];
    for (let element of tasksList.querySelectorAll('.task')) {
      data.push(element.querySelector('.task__title').textContent);
    }
    localStorage.setItem('key', JSON.stringify(data));
}

document.addEventListener('keydown', (e) => {
    if (e.code === 'Enter'|| e.code === 'NumpadEnter') {
        if (taskInput.value !== '') {
            appendElement(taskInput.value);
            taskInput.value = '';
        }
    }
});

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (taskInput.value !== '') {
        appendElement(taskInput.value);
        updateStorage();
        console.log(localStorage.getItem('key'));
        taskInput.value = '';
    }    
});

document.addEventListener('DOMContentLoaded', () => {
    const arr = JSON.parse(localStorage.getItem('key'));
    if (arr) {
        for (let element of arr) {
            appendElement(element);
        }
    }        
});

tasksList.addEventListener('click', (e) => {
    e.preventDefault();
    const task = Array.from(tasksList.querySelectorAll('.task'));
    task.forEach((element) => {
        const remove = element.querySelector('.task__remove');
        if (e.target === remove) {
            element.remove();
            updateStorage();
        }
    });
});