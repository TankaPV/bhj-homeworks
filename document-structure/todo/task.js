const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const tasksAdd = document.getElementById('tasks__add');

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
    const data =Array.from(tasksList.querySelectorAll('.task')).map((item) => item.querySelector('.task__title').textContent); 
    localStorage.setItem('key', JSON.stringify(data));
}

tasksAdd.addEventListener('click', (e) => {
    e.preventDefault();
    if (taskInput.value.trim()) {
        appendElement(taskInput.value);
        updateStorage();
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
            const emptyArr = JSON.parse(localStorage.getItem('key'));
            if (!emptyArr.length) {
                localStorage.clear();
            }
        }
    });
});