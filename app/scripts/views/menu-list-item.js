import BaseView from 'views/base-view';

var MenuListItemView = BaseView.extend({
	tagName: 'li',
	template: JST['menu-list-item'],

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	}
})

export default MenuListItemView;