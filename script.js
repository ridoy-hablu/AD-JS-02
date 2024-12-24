let taskCount = 0;
let completedCount = 0;

function addTask() {
    const taskInput = document.getElementById('task');
    const taskText = taskInput.value;
    if (taskText === '') return;
    taskCount++;
    const date = new Date().toLocaleDateString();
    const taskList = document.getElementById('task-list');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${taskCount}</td>
        <td>${taskText}</td>
        <td>${date}</td>
        <td class="status" onclick="toggleStatus(this)">Pending</td>
        <td class="delete" onclick="deleteTask(this)">X</td>
    `;
    taskList.appendChild(row);

    taskInput.value = '';
    updateCounter();
}

function toggleStatus(el) {
    if (el.textContent === 'Pending') {
        el.textContent = 'Completed';
        el.style.color = 'blue';
        completedCount++;
    } else {
        el.textContent = 'Pending';
        el.style.color = 'green';
        completedCount--;
    }
    updateCounter();
}

function deleteTask(el) {
    const row = el.parentElement;
    const status = row.querySelector('.status').textContent;
    if (status === 'Completed') completedCount--;
    taskCount--;
    row.remove();
    updateCounter();
}

function updateCounter() {
    const counter = document.querySelector('.counter');
    counter.textContent = `${taskCount} Total, ${completedCount} Completed, ${taskCount - completedCount} Pending`;
}