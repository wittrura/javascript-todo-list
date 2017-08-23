(function() {
  // model
  model = [
    {taskName: 'do some stuff', taskComplete: false},
    {taskName: 'eat healthy', taskComplete: true},
    {taskName: 'get to bed early', taskComplete: true}
  ];

  // controller
  controller = {
    getTasks: function() {
      return model;
    },

    getNewTask: function() {
      let newTaskInput = document.getElementsByTagName('input')[0];
      return {taskName: newTaskInput.value, taskComplete: false};
    },

    createTask: function() {
      let newTask = controller.getNewTask();
      model.push(newTask);

      view.renderTasks(controller.getTasks());
      return newTask;
    },

    init: function() {
      view.init();
    }
  };

  // view
  view = {
    renderTasks: function(tasks) {
      // clear out task list
      let taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      // clear typed in values in input box
      document.getElementsByTagName('input')[0].value = '';

      tasks.forEach(function(task) {
        let taskElement = document.createElement('li');
        taskElement.textContent = task.taskName;

        taskList.appendChild(taskElement);

        let taskEditPencil = document.createElement('span');
        taskEditPencil.setAttribute('class', 'glyphicon glyphicon-pencil');
        taskEditPencil.style.paddingRight = '10px';
        taskEditPencil.style.float = 'left';
        taskElement.appendChild(taskEditPencil);

        let taskCompleteCheck = document.createElement('span');
        taskCompleteCheck.setAttribute('class', 'glyphicon glyphicon-ok');
        taskCompleteCheck.style.float = 'right';
        taskElement.appendChild(taskCompleteCheck);
      });

    },

    // formatCompletedTaskElement: function(taskElement) {
    //   taskElement.style.
    // },

    init: function() {
      this.renderTasks(controller.getTasks());

      document.getElementById('add_todo').addEventListener('click', controller.createTask);
    }
  };

  controller.init();

})()
