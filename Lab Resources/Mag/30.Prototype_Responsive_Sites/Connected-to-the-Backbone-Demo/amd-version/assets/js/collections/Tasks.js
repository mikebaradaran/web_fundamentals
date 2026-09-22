define([
	'backbone',
	'models/Task'
], function(Backbone, Task) {
	// A collection of Task models
	var Tasks = Backbone.Collection.extend({
		model: Task,

		completed: function() {
			return _.filter(this.models, function(model) {
				return model.get('completed');
			});
		}
	});

	return Tasks;
});