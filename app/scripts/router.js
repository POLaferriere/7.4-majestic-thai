import ItemCollection from 'models/item-collection';
import order from 'models/order';
import IndexView from 'views/index';
import OrderView from 'views/order';
import CheckoutView from 'views/checkout';

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'index': 'index',	
        'order': 'order',
        'checkout': 'checkout'
    },

    initialize: function() {
        this.items = new ItemCollection();
    },

    index: function() {
        if (this.orderView) {
            this.orderView.remove();
        }
        if (this.checkoutView) {
            this.checkoutView.remove();
        }
        var view = new IndexView({
            collection: this.items
        });
        this.items.reset();
        this.items.fetch();
        this.showView(view);

    },

    order: function() {
        if (!this.orderView) {
            var view = new OrderView({
                model: order
            });
            this.orderView = view;
            $('#container').append(view.render().el);
        }

    },

    checkout: function() {
        var view = new CheckoutView({
            model: order
        });
        this.checkoutView = view;
        $('#container').append(view.render().el);

    },

    showView: function(view) {
        console.log('called');
        $('#container').html(view.render().el);
        return this;
    },
});

export default AppRouter;
