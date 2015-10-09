import BaseView from 'views/base-view';
import MenuListView from 'views/menu-list';
import ItemCollection from 'models/item-collection';
import TypeListView from 'views/type-list';

var IndexView = BaseView.extend({
    initialize: function() {
        this.appsCollection = new ItemCollection();
      	this.appListView = new TypeListView({
      		collection: this.appsCollection
      	});

        this.soupCollection = new ItemCollection();
        this.soupListView = new TypeListView({
          collection: this.soupCollection
        });

        this.entreeCollection = new ItemCollection();
        this.entreeListView = new TypeListView({
          collection: this.entreeCollection
        });

        this.saladCollection = new ItemCollection();
        this.saladListView = new TypeListView({
          collection: this.saladCollection
        });

        this.dessertCollection = new ItemCollection();
        this.dessertListView = new TypeListView({
          collection: this.dessertCollection
        });

        this.listenTo(this.collection, 'update', this.filter);

      	
    },

    render: function() {
    	this.$el.append(this.appListView.render().el);
    	this.$el.append(this.soupListView.render().el);
    	this.$el.append(this.saladListView.render().el);
    	this.$el.append(this.entreeListView.render().el);
    	this.$el.append(this.dessertListView.render().el);
        return this;
    },

    remove: function() {
        Backbone.View.prototype.remove.apply(this, arguments);
    },

    filter: function(collection) {
        this.appsCollection.add(collection.filter(function(model) {
            return model.get('type') === 'appetizer';
        }));
        this.soupCollection.add(collection.filter(function(model) {
            return model.get('type') === 'soup';
        }));
        this.saladCollection.add(collection.filter(function(model) {
            return model.get('type') === 'salad';
        }));
        this.entreeCollection.add(collection.filter(function(model) {
            return model.get('type') === 'entree';
        }));
        this.dessertCollection.add(collection.filter(function(model) {
            return model.get('type') === 'dessert';
        }));
    },
});

export default IndexView;
