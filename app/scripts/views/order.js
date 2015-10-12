import BaseView from 'views/base-view';
import order from 'models/order';
import {
    mapToJSON
}
from 'functions';

var OrderView = BaseView.extend({
    className: 'order-view',

    initialize: function() {
        this.listenTo(this.model, 'change:orders', this.render);
    },

    template: JST['order'],

    events: {
        'click .fa-minus': 'removeOrder',
    },

    render: function() {
    	console.log('rendered');
        this.$el.html(this.template(mapToJSON(this.model.get('orders'))));
        this.$('.total').text((this.orderTotal(order) / 100).toFixed(2));
        return this;
    },

    addOrder: function(model, collection) {
        this.$el.append(this.template(_.last(collection).toJSON()));
    },

    removeOrder: function(e) {
    	var name = e.toElement.parentElement.textContent;
    	var orders = this.model.get('orders');
		orders.splice(_.findIndex(orders, function(model) {
            return model.get('name') === name;
        }), 1);
       	this.model.set('orders', orders);
      	this.render();
        // this.model.set({orders: orders});
    },

    orderTotal: function(order) {
        // debugger;
        var total = _.reduce(_.pluck(mapToJSON(this.model.get('orders')), 'price'), function(a, b) {
            return Number(a) + Number(b);
        });
        if (isNaN(total)) {
        	return 0;
        } else {
        	return total;
        }
    }
});

export default OrderView;
