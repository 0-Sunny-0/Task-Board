// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// variables for event listener on add task button
const addTaskButton = document.querySelector('#addTaskButton');
const taskForm = document.querySelector('#taskForm');
const submit = document.querySelector('#submit');

addTaskButton.addEventListener('click', function(event) {
    event.preventDefault();
});


// Todo: create a function to generate a unique task id
function generateTaskId() {
    
}

// Todo: create a function to create a task card
function createTaskCard(task) {

}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {

}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
});
