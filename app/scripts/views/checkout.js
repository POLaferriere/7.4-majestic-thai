import {
    mapToJSON, mapPrices
}
from 'functions';

var CheckoutView = Backbone.View.extend({
	className: 'checkout-view',

	template: JST['checkout'],

	events: {
		'click .back': 'closeView',
		'click .confirm': 'sendOrder',
	},

	render: function() {
    	var orderJSON = mapToJSON(this.model.get('orders'));
    	mapPrices(orderJSON);
        this.$el.html(this.template(orderJSON));
        this.$('.subtotal').text('$' + (this.orderTotal() / 100).toFixed(2));
        this.$('.tax').text('$' + (this.orderTotal() / 100 * 0.07).toFixed(2));
        var total = Number((this.orderTotal() / 100).toFixed(2)) + Number((this.orderTotal() / 100 * 0.07).toFixed(2));
        this.$('.total').text('$' + total.toFixed(2));
        this.model.set('total', total);
        
        return this;
    },

    orderTotal: function() {
        var total = _.reduce(_.pluck(mapToJSON(this.model.get('orders')), 'price'), function(a, b) {
            return Number(a) + Number(b);
        });
        if (isNaN(total)) {
        	return 0;
        } else {
        	return total;
        }
    },

    closeView: function() {
    	window.location = '#order';
    	this.remove();
    },

    sendOrder: function() {
    	this.model.save({silent: true});
    	window.location = '#index';
    }
});

export default CheckoutView;
