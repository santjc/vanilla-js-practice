class Task {
    constructor(id, title, desc) {
        this.id = id;
        this.title = title;
        this.desc = desc;

        this.newTaskContainer = document.createElement('figure');
        this.newTaskController = document.createElement('div');
        this.newTaskTitle = document.createElement('h3');
        this.newTaskDesc_ul = document.createElement('ul');
        this.newTaskDelete = document.createElement('button');
    }

    CreateTask() {
        this.newTaskContainer.classList.add('task');
        this.newTaskController.classList.add('task-control');
        this.newTaskContainer.appendChild(this.newTaskController);

        this.newTaskContainer.setAttribute('id', this.id);

        //Title
        this.newTaskTitle.classList.add('task-title');
        this.newTaskTitle.innerText = this.title;
        this.newTaskController.appendChild(this.newTaskTitle);

        //Description
        this.newTaskContainer.appendChild(this.newTaskDesc_ul);
        var newTaskDesc_li = document.createElement('li');
        newTaskDesc_li.innerText = this.desc;
        this.newTaskDesc_ul.appendChild(newTaskDesc_li);




        //Display task
        var taskContainer = document.querySelector('.task-container');
        taskContainer.append(this.newTaskContainer);
        setTimeout(() => {
            this.newTaskContainer.style.opacity = 1;
        }, 100);


    }
    
    CreateDeleteButton() {
        this.newTaskDelete.id = 'task-control_delete';
        var deleteIcon = document.createElement('i');
        
        deleteIcon.classList.add('fas', 'fa-trash-alt');
        this.newTaskDelete.appendChild(deleteIcon);
        this.newTaskController.appendChild(this.newTaskDelete);

        this.newTaskDelete.onclick = event => {
            this.RemoveTask();
          }
    }

    RemoveTask(){
        this.newTaskContainer.remove();
    }

}