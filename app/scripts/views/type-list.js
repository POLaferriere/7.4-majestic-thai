import BaseView from 'views/base-view';
import ItemCollection from 'models/item-collection';
import MenuListView from 'views/menu-list';
import capitalizeFirstLetter from 'capitalize';

var TypeListView = BaseView.extend({
	className: "type-list",

    initialize: function() {
    	this.typeList = new MenuListView({collection: this.collection});
        this.listenTo(this.collection, 'update', this.addName);
    },

    template: JST['type-list'],

    events: {
    	'click .type-title': 'activate',
    },

    render: function() {
    	this.$el.html('<h1 class="type-title"></h1>');
    	this.$el.append(this.typeList.render().el);	
    	return this;
    },

    addName: function() {
    	this.$('.type-title').text(capitalizeFirstLetter(this.collection.reduce(function(x, model){return model.get('type');})));
    },

    activate: function() {
    	this.$el.toggleClass('active');
    }
});

export default TypeListView;
