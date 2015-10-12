import ItemCollection from 'models/item-collection';
import order from 'models/order';
import IndexView from 'views/index';
import OrderView from 'views/order';

var AppRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'order': 'order',
    },

    initialize: function() {
        this.items = new ItemCollection();
    },

    index: function() {

        var view = new IndexView({
            collection: this.items
        });
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

    showView: function(view) {
        console.log('called');
        $('#container').html(view.render().el);
        return this;
    },
});

export default AppRouter;
