(function() {
  model = [
    {taskName: 'do some stuff', taskComplete: false},
    {taskName: 'eat healthy', taskComplete: true},
    {taskName: 'get to bed early', taskComplete: true}
  ];

  controller = {
    getTasks: function() {
      return model;
    },
    init: function() {

      view.init();
    }
  };

  view = {
    renderTasks: function(tasks) {
      tasks.forEach(function(task) {
        let taskElement = document.createElement('li');
        taskElement.textContent = task.taskName;
        document.getElementById('taskList').appendChild(taskElement);
      });

    },
    init: function() {
      this.renderTasks(controller.getTasks());
    }
  };

  controller.init();
})()
