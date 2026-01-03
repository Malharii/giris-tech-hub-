const taskName = document.getElementById("taskName");
const taskDesc = document.getElementById("taskDesc");
const taskDeadline = document.getElementById("taskDeadline");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];
let editIndex = -1;

addTaskBtn.addEventListener("click", () => {
  if (!taskName.value || !taskDesc.value || !taskDeadline.value) {
    alert("Please fill all fields");
    return;
  }

  const task = {
    name: taskName.value,
    desc: taskDesc.value,
    deadline: taskDeadline.value,
  };

  if (editIndex === -1) {
    tasks.push(task);
  } else {
    tasks[editIndex] = task;
    editIndex = -1;
    addTaskBtn.textContent = "Add Task";
  }

  clearForm();
  displayTasks();
});

function displayTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "card p-3 task-card";

    div.innerHTML = `
      <h5>${task.name}</h5>
      <p>${task.desc}</p>
      <small>Deadline: ${task.deadline}</small>
      <br><br>
      <button class="btn btn-warning btn-sm me-2" onclick="editTask(${index})">Edit</button>
      <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
    `;

    taskList.appendChild(div);
  });
}

function editTask(index) {
  taskName.value = tasks[index].name;
  taskDesc.value = tasks[index].desc;
  taskDeadline.value = tasks[index].deadline;

  editIndex = index;
  addTaskBtn.textContent = "Update Task";
}

function deleteTask(index) {
  tasks.splice(index, 1);
  displayTasks();
}

function clearForm() {
  taskName.value = "";
  taskDesc.value = "";
  taskDeadline.value = "";
}
