var formEl = document.getElementById("task-form");
var tasksToDoEl = document.getElementById("tasks-to-do");

var taskFormHandler = function(event) {
  event.preventDefault();
  var taskTitleInput = document.querySelector("[name='task-name'").value;
  var taskTypeInput = document.querySelector("[name='task-type']").value;

  // check if inputs are empty (validate)
  if (taskTitleInput === "" || taskTypeInput === "") {
    alert("You need to fill out the task form!");
    return false;
  }

  // reset form fields for next task to be entered
  document.querySelector("input[name='task-name']").value = "";
  document.querySelector("select[name='task-type']").selectedIndex = 0;

  var taskDataObj = {
    title: taskTitleInput,
    type: taskTypeInput
  }

  createTaskEl(taskDataObj);
};

var createTaskEl = function(taskDataObj) {
  // create list item
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";
  taskInfoEl.innerHTML = "<h3 class='task-title'>" + taskDataObj.title + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  listItemEl.appendChild(taskInfoEl);

  // add list item to list
  tasksToDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", taskFormHandler);
