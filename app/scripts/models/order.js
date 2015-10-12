var Order = Backbone.Model.extend({
	defaults: function() {
		return {
			orders: [],
		};
	},

	addItem: function(item) {
		this.set('orders', this.get('orders').concat([item]));

	},

	removeItem: function(name) {
		var self = this;
		var orders = self.get('orders');
		orders.splice(_.findIndex(orders, function(model) {
            return model.get('name') === name;
        }), 1);
        debugger;
        this.set('orders', orders);
	}
});

var order = new Order();

export default order;