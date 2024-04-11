let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksdiv = document.querySelector(".tasks");

// Empty Array To Store The Tasks
let arrayOfTasks = []

// Add Task
submit.onclick = function () {
    if (input.value !=="") {
       addTaskToArray(input.value);
       input.value = ""; 
    }
}

function addTaskToArray(taskText){
    // Task Data
    const task = {
        id: Date.now(),
        title: taskText,
        completed:false,
    };
    // Push Task To Array Of Tasks
    arrayOfTasks.push(task);
    // Add Tasks To Page
    addElementsToPageForm(arrayOfTasks);
}

function addElementsToPageForm(arrayOfTasks){
    // Empty Tasks Div
    tasksdiv.innerHTML = "";
    // Looping On Array Of Tasks
    arrayOfTasks.forEach((task) => {
        // Create Mzin Div
        let div = document.createElement("div");
        // Check If Task Done
        if (task.completed) {
            div.className = " task done";
        }
        div.setAttribute("data-id",task.id);
        div.append(document.createTextNode(task.title));
        // Create Delete Btn
        let span = document. createElement("span");
        span.className = "delete";
        span.append(document.createTextNode("X"));
        // Append Btn To Main Div
        div.append(span);
        // Add Task Div To Tasks Container
        tasksdiv.append(div);
        
    });  
};   

function addDataToLocalStorageFrom(arrayOfTasks) {
    window.localStorage.setItem("tasks",JSON.stringify(arrayOfTasks));
}

function getDataFromLocalStorage() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
    }
}