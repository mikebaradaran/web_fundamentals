(function() {

// The model for a single task.
var Task = Backbone.Model.extend({
	defaults: {
		text: 'New task',
		completed: false
	}
});


// The view for a single task.
var TaskView = Backbone.View.extend({
	tagName: 'li',
	events: {
		'click .delete': 'delete',
		'click .complete': 'updateStatus',
		'dblclick span': 'edit'
	},

	template: _.template( $('#taskTemplate').html() ),

	initialize: function() { 
		this.model.on('change', this.render, this);
		this.model.on('remove', this.unrender, this);

		this.render();
	},

	edit: function() {
		var text = prompt('What should we change your task to?', this.model.get('text') );
		this.model.set('text', text);
	},

	delete: function() {
		this.model.destroy();
		this.$el.remove();
	},

	updateStatus: function() {
		this.model.set('completed', !this.model.get('completed'));
		this.render();
	},

	render: function() {
		var markup = this.template(this.model.toJSON());
		this.$el.html(markup);
	},

	unrender: function() {
		this.$el.remove();
	}
});


// A collection of Task models
var Tasks = Backbone.Collection.extend({
	model: Task,

	completed: function() {
		return _.filter(this.models, function(model) {
			return model.get('completed');
		});
	}
});


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


// Here we goo!
new TasksView;

})();
