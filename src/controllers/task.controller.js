const errorHandlers = require('../error-handlers');

class TaskController {
  constructor(container) {
    this.path = '/task';
    this.taskService = container.services.taskService;
  }

  getActiveTasks(req, res) {
    this.taskService.getActiveTasks()
      .then(res.send.bind(res))
      .catch(errorHandlers.sendError(res));
  }
}

TaskController.routes = [
  {
    path: '/active',
    method: 'get',
    bind: 'getActiveTasks',
  },
];

module.exports = TaskController;
