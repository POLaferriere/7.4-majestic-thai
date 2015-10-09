import ItemCollection from 'models/item-collection';
import IndexView from 'views/index';

var AppRouter = Backbone.Router.extend({
	routes: {
		'': 'index'
	},

	initialize: function() {
		this.items = new ItemCollection();
	},

	index: function(){
		var view = new IndexView({collection: this.items});
		this.items.fetch();
		this.showView(view);
	},

	showView: function(view) {
		$('#container').html(view.render().el);
		return this;
	}, 
});

export default AppRouter;