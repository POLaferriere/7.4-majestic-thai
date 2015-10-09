import BaseView from 'views/base-view';

var MenuListItemView = BaseView.extend({
    tagName: 'li',
    className: 'menu-list-item',
    template: JST['menu-list-item'],

    render: function() {
        this.$el.html(this.template(this.model.toJSON()));
    },

    events: {
        'click .menu-list-item-title': 'showDetails',
        'click .menu-list-item-close': 'closeDetails',
    },

    showDetails: function() {
        if (!this.$el.hasClass('detailed')) {
            this.$el.addClass('detailed');
        }
    },

    closeDetails: function() {
        console.log('closed');
        $('.menu-list-item').removeClass('detailed');
    }
});

export default MenuListItemView;
