function addTask() {
    let input = document.getElementById("taskInput");
    let list = document.getElementById("taskList");

    if (input.value.trim() === "") return;
function addTask() {
    let input = document.getElementById("taskInput");
    let list = document.getElementById("taskList");

    if (input.value.trim() === "") return;

    let item = document.createElement("li");
    item.textContent = input.value;

    list.appendChild(item);
    input.value = "";
}

    let item = document.createElement("li");
    item.textContent = input.value;

    list.appendChild(item);
    input.value = "";
}
