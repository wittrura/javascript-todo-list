(function() {
  // model
  model = [
    {taskName: 'Do some stuff', taskComplete: false},
    {taskName: 'Eat healthy', taskComplete: false},
    {taskName: 'Get to bed early', taskComplete: false},
    {taskName: 'Bring lunch to school', taskComplete: true}
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

    completeTask: function(event) {
      console.log('completed task');
      // console.log('re-rendered task list');
    },

    editTask: function(event) {
      console.log('edited task');
      // console.log('re-rendered task list');
    },

    init: function() {
      view.init();
    }
  };

  // view
  view = {
    cleanTasks: function() {
      // clear out task list
      let taskList = document.getElementById('taskList');
      taskList.innerHTML = '';
      // clear typed in values in input box
      document.getElementsByTagName('input')[0].value = '';
    },

    renderTasks: function(tasks) {
      this.cleanTasks();

      tasks.forEach(function(task) {
        // only show components which are NOT complete
        if (!task.taskComplete) {
          // create a new li for each task
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
        }
      });

    },

    init: function() {
      this.renderTasks(controller.getTasks());

      document.getElementById('add_todo').addEventListener('click', controller.createTask);

      document.getElementById('taskList').addEventListener('click', function(e) {
        console.log('clicked to update' + e.target.textContent);
      });

      document.getElementById('taskList').addEventListener('click', function(e) {
        console.log('clicked to delete' + e.target.textContent);
      });
    }
  };

  controller.init();

})()
