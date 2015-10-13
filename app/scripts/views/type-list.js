import BaseView from 'views/base-view';
import ItemCollection from 'models/item-collection';
import MenuListView from 'views/menu-list';
import { capitalizeFirstLetter } from 'functions';

var TypeListView = BaseView.extend({
	className: "type-list",

    initialize: function() {
    	this.typeList = new MenuListView({collection: this.collection});
        this.listenTo(this.collection, 'update', this.addName);
    },

    template: JST['type-list'],

    events: {
    	'click .type-title': 'activate',
    	'click .fa-plus': 'activate',
    	'click .fa-minus': 'activate',
    },

    render: function() {
    	this.$el.html('<h1 class="type-title"></h1><i class="fa fa-plus"></i><i class="fa fa-minus"></i>');
    	this.$el.append(this.typeList.render().el);	
    	return this;
    },

    addName: function() {
    	this.$('.type-title').text(capitalizeFirstLetter(this.collection.reduce(function(x, model){return model.get('type');}))+'s');
    },

    activate: function() {
    	this.$el.siblings('.active').removeClass('active');
    	this.$el.find('.detailed').removeClass('detailed');
    	this.$el.toggleClass('active');
    }
});

export default TypeListView;
