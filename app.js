(function() {
  // model
  model = [
    {taskName: 'Do some stuff', taskComplete: false},
    {taskName: 'Eat healthy', taskComplete: true},
    {taskName: 'Get to bed early', taskComplete: true}
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

      // update displayed tasks
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
        // crete a new li for each task
        let taskElement = document.createElement('li');
        taskElement.textContent = task.taskName;
        taskList.appendChild(taskElement);

        // add glyphicon for editing
        let taskEdit = document.createElement('span');
        taskEdit.textContent = 'EDIT';
        taskEdit.style.paddingRight = '10px';
        taskEdit.style.float = 'left';
        taskElement.appendChild(taskEdit);

        // add glyphicon for marking complete
        let taskComplete = document.createElement('span');
        taskComplete.textContent = 'X';
        taskComplete.style.float = 'right';
        taskElement.appendChild(taskComplete);
      });

    },

    init: function() {
      this.renderTasks(controller.getTasks());

      document.getElementById('add_todo').addEventListener('click', controller.createTask);
    }
  };

  controller.init();

})()
