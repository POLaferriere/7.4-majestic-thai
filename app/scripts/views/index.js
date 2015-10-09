import BaseView from 'views/base-view';
import MenuListView from 'views/menu-list';

var IndexView = BaseView.extend({
	initialize: function(){
		this.menuListView = new MenuListView({collection: this.collection});
	},

	render: function(){
		this.$el.append(this.menuListView.render().el);
		return this;
	},

	remove: function() {
		this.menuListView.remove();
		Backbone.View.prototype.remove.apply(this, arguments);
	},
});

export default IndexView;