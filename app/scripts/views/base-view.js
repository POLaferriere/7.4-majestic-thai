var BaseView = Backbone.View.extend({
	render: function(){
		this.$el.html(this.template());
		return this;
	},
});

export default BaseView;