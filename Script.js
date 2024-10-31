var listOftasks = document.getElementById("list");

function addTodo() {
    var inputFeild = document.getElementById("input");
    if (inputFeild.value) {
        var taskElement = document.createElement("li");
        var textOfTask = document.createTextNode(inputFeild.value);
        taskElement.appendChild(textOfTask);
        listOftasks.appendChild(taskElement);

        // Create button of aditing with text

        var aditingTaskBtn = document.createElement("button");
        var textOfAddingTaskBtn = document.createTextNode("adit");
        aditingTaskBtn.appendChild(textOfAddingTaskBtn);
        taskElement.appendChild(aditingTaskBtn);
        aditingTaskBtn.setAttribute('onclick', 'editSingleItem(this)');
        taskElement.appendChild(aditingTaskBtn);

        // Create button of deleting with text

        var deletingTaskBtn = document.createElement("button");
        var textOfDeletingBtn = document.createTextNode("Remove");
        deletingTaskBtn.appendChild(textOfDeletingBtn);
        deletingTaskBtn.setAttribute("onclick", "removeSingleItem(this)");
        taskElement.appendChild(deletingTaskBtn);
        inputFeild.value = "";
    } else {
        alert("Enter text");
    }
}

function removeAllTodos() {
    listOftasks.innerHTML = "";
}

function removeSingleItem(e) {
    return e.parentNode.remove()
}

function editSingleItem(e) {
    var updateVal = prompt("Enter update value");
    e.parentNode.firstChild.nodeValue = updateVal;
}
