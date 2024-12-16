document.getElementById("addButton").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const taskList = document.getElementById("taskList");

  // Cria a tarefa
  const li = document.createElement("li");
  li.textContent = taskText;

  // Adiciona botão de remover
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Excluir";
  deleteButton.classList.add("delete");
  deleteButton.addEventListener("click", () => {
    li.remove();
  });

  // Marcar como concluído
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  li.appendChild(deleteButton);
  taskList.appendChild(li);

  // Limpa o campo de entrada
  taskInput.value = "";
  taskInput.focus();
}
