
function displayName() {
    var name = document.getElementById("name").value;
    var tasksDiv = document.getElementById("tasks");
    var newPara = document.createElement("p");
    newPara.innerHTML = name;
    tasksDiv.appendChild(newPara);
    console.log(name)
}
