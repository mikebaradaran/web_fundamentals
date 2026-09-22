define([
	'backbone'
], function(Backbone) {
	// The model for a single task.
	var Task = Backbone.Model.extend({
		defaults: {
			text: 'New task',
			completed: false
		}
	});

	return Task;
});