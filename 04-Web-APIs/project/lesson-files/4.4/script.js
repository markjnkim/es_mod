var taskIdCounter = 0;

var formEl = document.getElementById("task-form");
var tasksToDoEl = document.getElementById("tasks-to-do");
var tasksInProgressEl = document.getElementById("tasks-in-progress");
var tasksCompletedEl = document.getElementById("tasks-completed");
var pageContentEl = document.getElementById("page-content");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskTitleInput = document.querySelector("input[name='task-name']").value;
  var taskTypeInput = document.querySelector("select[name='task-type']").value;

  // check if inputs are empty (validate)
  if (!taskTitleInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  // check if task is new or one being edited by seeing if it has a data-task-id attribute
  var isEdit = formEl.hasAttribute("data-task-id");

  if (isEdit) {
    var taskId = formEl.getAttribute("data-task-id");
    completeEditTask(taskTitleInput, taskTypeInput, taskId);
  } else {
    createTask(taskTitleInput, taskTypeInput);
  }
};

var createTask = function(taskTitle, taskType) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.setAttribute("data-task-id", taskIdCounter);
  listItemEl.setAttribute("draggable", "true");

  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-title'>" + taskTitle + "</h3><span class='task-type'>" + taskType + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // create buttons for task
  var taskButtonsEl = createTaskButtons(taskIdCounter);
  listItemEl.appendChild(taskButtonsEl);
  tasksToDoEl.appendChild(listItemEl);

  // increase task counter for next unique id
  taskIdCounter++;
};

var createTaskButtons = function(taskId) {
  // create container to hold three buttons
  var buttonContainerEl = document.createElement("div");
  buttonContainerEl.className = "task-buttons";

  // create edit button
  var editButtonEl = document.createElement("button");
  editButtonEl.textContent = "Edit";
  editButtonEl.className = "btn edit-btn";
  editButtonEl.setAttribute("data-task-id", taskId);
  buttonContainerEl.appendChild(editButtonEl);
  // create delete button
  var deleteButtonEl = document.createElement("button");
  deleteButtonEl.textContent = "Delete";
  deleteButtonEl.className = "btn delete-btn";
  deleteButtonEl.setAttribute("data-task-id", taskId);
  buttonContainerEl.appendChild(deleteButtonEl);
  // create change status dropdown
  var statusSelectEl = document.createElement("select");
  statusSelectEl.setAttribute("name", "status-change");
  statusSelectEl.setAttribute("data-task-id", taskId);
  statusSelectEl.className = "select-status";
  buttonContainerEl.appendChild(statusSelectEl);
  // create status options
  var statusChoices = ["To Do", "In Progress", "Done"];

  for (var i = 0; i < statusChoices.length; i++) {
    // create option element
    var statusOptionEl = document.createElement("option");
    statusOptionEl.setAttribute("value", statusChoices[i]);
    statusOptionEl.textContent = statusChoices[i];

    // append to select
    statusSelectEl.appendChild(statusOptionEl);
  }

  return buttonContainerEl;
};

var completeEditTask = function(taskTitle, taskType, taskId) {
  // find task list item with taskId value
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

  // set new values
  taskSelected.querySelector("h3.task-title").textContent = taskTitle;
  taskSelected.querySelector("span.task-type").textContent = taskType;

  alert("Task Updated!");

  // remove data attribute from form
  formEl.removeAttribute("data-task-id");
};

var taskButtonHandler = function(event) {
  // get target element from event
  var targetEl = event.target;

  if (targetEl.matches(".edit-btn")) {
    console.log("edit", targetEl);
    editTask(targetEl.dataset.taskId);
  } else if (targetEl.matches(".delete-btn")) {
    console.log("delete", targetEl);
    deleteTask(targetEl.dataset.taskId);
  }
};

var taskStatusChangeHandler = function(event) {
  console.log(event.target.value);

  // find task list item based on event.target's data-task-id attribute
  var taskId = event.target.dataset.taskId;

  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

  // convert value to lower case
  var statusValue = event.target.value.toLowerCase();

  if (statusValue === "to do") {
    tasksToDoEl.appendChild(taskSelected);
  } else if (statusValue === "in progress") {
    tasksInProgressEl.appendChild(taskSelected);
  } else if (statusValue === "done") {
    tasksCompletedEl.appendChild(taskSelected);
  }
};

var editTask = function(taskId) {
  console.log(taskId);

  // get task list item element
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");

  // get content from task title and type
  var taskTitle = taskSelected.querySelector("h3.task-title").textContent;
  console.log(taskTitle);

  var taskType = taskSelected.querySelector("span.task-type").textContent;
  console.log(taskType);

  // write values of taskTitle and taskType to form to be edited
  document.querySelector("input[name='task-name']").value = taskTitle;
  document.querySelector("select[name='task-type']").value = taskType;

  // set data attribute to the form with a value of the task's id so it knows which one is being edited
  formEl.setAttribute("data-task-id", taskId);
};

var deleteTask = function(taskId) {
  console.log(taskId);
  // find task list element with taskId value and remove it
  var taskSelected = document.querySelector(".task-item[data-task-id='" + taskId + "']");
  taskSelected.remove();
};

var dropTaskHandler = function(event) {
  var id = event.dataTransfer.getData("text/plain");
  console.log(id);
  var draggableElement = document.querySelector("[data-task-id='" + id + "']");
  var dropzone = event.target.closest(".task-list");

  // set status of task based on dropzone id
  var statusSelectEl = draggableElement.querySelector("select[name='status-change']");
  var statusType = dropzone.id;

  if (statusType === "tasks-to-do") {
    statusSelectEl.selectedIndex = 0;
  } else if (statusType === "tasks-in-progress") {
    statusSelectEl.selectedIndex = 1;
  } else if (statusType === "tasks-completed") {
    statusSelectEl.selectedIndex = 2;
  }

  dropzone.appendChild(draggableElement);

  event.dataTransfer.clearData();
};

// stops page from loading the dropped item as a resource (opening a new link)
var dropzoneDragHandler = function(event) {
  event.preventDefault();
  event.target.closest(".task-list").setAttribute("style", "background: rgba(68, 233, 255, 0.7); border-style: dashed;");
};

var dragTaskHandler = function(event) {
  if (event.target.matches("li.task-item")) {
    event.dataTransfer.setData("text/plain", event.target.dataset.taskId);
  }
};

var dragLeaveHandler = function(event) {
  event.target.closest(".task-list").removeAttribute("style");
};


// Create a new task
formEl.addEventListener("submit", taskFormHandler);

// for edit and delete buttons
pageContentEl.addEventListener("click", taskButtonHandler);

// for changing the status
pageContentEl.addEventListener("change", taskStatusChangeHandler);

// for dragging
pageContentEl.addEventListener("dragstart", dragTaskHandler);
pageContentEl.addEventListener("dragover", dropzoneDragHandler);
pageContentEl.addEventListener("dragleave", dragLeaveHandler);
pageContentEl.addEventListener("drop", dropTaskHandler);
