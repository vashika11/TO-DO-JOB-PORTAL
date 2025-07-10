function addTask() {
  const input = document.getElementById("todo-input");
  const taskText = input.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(deleteBtn);

  document.getElementById("todo-list").appendChild(li);
  input.value = "";
}
