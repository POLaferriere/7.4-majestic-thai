var Order = Backbone.Model.extend({
	defaults: function() {
		return {
			orders: [],
			isOrder: true,
		};
	},

	addItem: function(item) {
		this.set('orders', this.get('orders').concat([item]));

	},

	urlRoot: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronrestaurant',

	idAttribute: '_id',
});

var order = new Order();

export default order;