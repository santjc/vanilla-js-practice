const taskCreator_name = document.getElementById('task-creator_name');
const taskCreator_desc = document.getElementById('task-creator_desc1');
const taskCreator_button = document.getElementById('task-creator_button');
const taskDelete_button = document.getElementById('task-control_delete');
let tasks = [];






function AddTask() {
  //Create task
  let newTask = new Task(tasks.length + 1, taskCreator_name.value, taskCreator_desc.value);
  newTask.CreateTask();
  newTask.CreateDeleteButton();
  tasks.push(newTask);

}


taskCreator_button.addEventListener('click', AddTask);
/*remove task*/
