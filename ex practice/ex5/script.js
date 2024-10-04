document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
    const addButton = document.getElementById('add-btn');

    // Function to create a task item
    function createTask(taskText) {
        const taskItem = document.createElement('li');
        taskItem.className = 'task-item';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        const label = document.createElement('label');
        label.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';

        // Event to delete task
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        // Append elements to taskItem
        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskItem.appendChild(deleteBtn);

        return taskItem;
    }

    // Event listener to add a new task
    addButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = createTask(taskText);
            taskList.appendChild(taskItem);
            taskInput.value = '';  // Clear input field
        }
    });

    // Optional: Add task by pressing 'Enter'
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
