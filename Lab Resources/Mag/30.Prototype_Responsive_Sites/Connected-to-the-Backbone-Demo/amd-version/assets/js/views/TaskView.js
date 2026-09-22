define(['backbone'], function(Backbone) {
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

	return TaskView;
});