const form = document.querySelector("#new-task-form");
const input = document.querySelector("#new-task-input");
const listEl = document.querySelector("#tasks");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (input.value.trim() === '') {
        input.value = '';
        return false;
    }
    const task = input.value;
    const taskEl = document.createElement("div");
    const taskContentEl = document.createElement("div");

    taskEl.append(taskContentEl);

    const taskInputEl = document.createElement("input");
    taskInputEl.value = task;

    taskContentEl.append(taskInputEl);

    const taskActionsEl = document.createElement("div");

    const taskEditEl = document.createElement("button");
    taskEditEl.innerText = "Edit";
    const taskDeleteEl = document.createElement("button");
    taskDeleteEl.innerText = "Delete";

    taskActionsEl.append(taskEditEl);
    taskActionsEl.append(taskDeleteEl);
    taskEl.append(taskActionsEl);
    listEl.append(taskEl);

    input.value = "";
    taskEditEl.onclick = () => {
        const edit = prompt("Изменить на другое");
        taskContentEl.innerText = edit;
    };
    taskDeleteEl.addEventListener("click", () => {
        listEl.removeChild(taskEl);
    });
});
