const TargetService = require('./target.service');
const EntryService = require('./entry.service');
const TaskService = require('./task.service');

module.exports = function createServices({ models, config }) {
  return {
    targetService: new TargetService({ models, config }),
    entryService: new EntryService({ models, config }),
    taskService: new TaskService({ models, config }),
  };
};
