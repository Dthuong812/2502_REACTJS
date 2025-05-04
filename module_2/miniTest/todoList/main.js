let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks(filter = 'all') {
    const taskList = document.getElementById('task-list');
    const deleteCompletedButton = document.getElementById('delete-completed');
    taskList.innerHTML = '';

    const filtered = tasks.filter(task => {
      if (filter === 'completed') return task.completed;
      if (filter === 'active') return !task.completed;
      return true;
    });
  
    filtered.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        if (task.completed) li.classList.add('completed');
      
        li.innerHTML = `
          <div class="form-check">
            <input type="checkbox" class="form-check-input me-2" ${task.completed ? 'checked' : ''} data-index="${index}">
            <span>${task.text}</span>
          </div>
          ${
            filter === 'completed'
              ? `<button class="btn btn-outline-danger delete-task" data-index="${index}">
                  🗑 
                </button>`
              : ''
          }
        `;
      
        taskList.appendChild(li);
      });
  
    deleteCompletedButton.style.display = filter === 'completed' ? 'block' : 'none';
  
    addListeners();
  }
function addListeners() {
  document.querySelectorAll('input[type="checkbox"]').forEach(cb => {
    cb.addEventListener('change', e => {
      const index = e.target.dataset.index;
      tasks[index].completed = e.target.checked;
      saveTasks();
      renderTasks(currentFilter);
    });
  });

  document.querySelectorAll('.delete-task').forEach(btn => {
    btn.addEventListener('click', e => {
      const index = e.target.closest('button').dataset.index;
      tasks.splice(index, 1);
      saveTasks();
      renderTasks(currentFilter);
    });
  });
}

let currentFilter = 'all';
document.querySelectorAll('.tab, .nav-link').forEach(tab => {
  tab.addEventListener('click', e => {
    document.querySelectorAll('.tab, .nav-link').forEach(t => t.classList.remove('active'));
    e.target.classList.add('active');
    currentFilter = e.target.dataset.filter;
    renderTasks(currentFilter);
  });
});

document.getElementById('add-task').addEventListener('click', () => {
  const input = document.getElementById('new-task');
  const text = input.value.trim();
  if (text !== '') {
    tasks.push({ text, completed: false });
    saveTasks();
    renderTasks(currentFilter);
    input.value = '';
  }
});

document.getElementById('delete-completed').addEventListener('click', () => {
  tasks = tasks.filter(task => !task.completed);
  saveTasks();
  renderTasks(currentFilter);
});

renderTasks();
