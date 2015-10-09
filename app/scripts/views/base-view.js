var BaseView = Backbone.View.extend({
	render: function(){
		this.$el.html(this.template());
	},
});

export default BaseView;