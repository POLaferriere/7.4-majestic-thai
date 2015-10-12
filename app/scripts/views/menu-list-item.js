import BaseView from 'views/base-view';
import order from 'models/order';

var MenuListItemView = BaseView.extend({
    tagName: 'li',
    className: 'menu-list-item',
    template: JST['menu-list-item'],

    render: function() {
    	var model = this.model.toJSON();
    	model.price = (model.price / 100).toFixed(2);
        this.$el.html(this.template(model)) 	;
    },

    events: {
        'click .menu-list-item-title': 'showDetails',
        'click .fa-times': 'closeDetails',
        'click .menu-list-item-add': 'addItem'
    },

    showDetails: function() {
        if (!this.$el.hasClass('detailed')) {
        	this.$el.siblings('.detailed').removeClass('detailed');
            this.$el.addClass('detailed');
        }
    },

    closeDetails: function() {
        console.log('closed');
        $('.menu-list-item').removeClass('detailed');
    },

    addItem: function(){
    	order.addItem(this.model);
    	window.location = '#order';
    }
});

export default MenuListItemView;
