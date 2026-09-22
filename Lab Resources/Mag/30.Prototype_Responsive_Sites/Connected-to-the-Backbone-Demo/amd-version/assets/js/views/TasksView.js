define([
	'backbone',
	'models/Task',
	'collections/Tasks',
	'views/TaskView'
], function(Backbone, Task, Tasks, TaskView) {
	// The view for the wrapping tasks list
	var TasksView = Backbone.View.extend({
		el: '#tasks',

		initialize: function() {
			this.collection = new Tasks;
			this.items = this.$el.children('ul');

			this.collection.on('add', this.appendNewTask, this);
		},

		events: {
			'click .add': 'add',
			'click .clear': 'clearCompleted'
		},

		add: function() {
			var text = prompt('What do you need to do?');
			var task = new Task({ text: text });

			this.collection.add(task);
		},

		appendNewTask: function(task) {
			var taskView = new TaskView({ model: task });
			this.items.append(taskView.el);
		},

		clearCompleted: function() {
			var completedTasks = this.collection.completed();
			this.collection.remove(completedTasks);
		}
	});

	return TasksView;
});