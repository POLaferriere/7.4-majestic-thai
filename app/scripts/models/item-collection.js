import Item from 'models/item';

var ItemCollection = Backbone.Collection.extend({
	url: 'http://tiny-lasagna-server.herokuapp.com/collections/aaronrestaurant?limit=100',
	model: Item,
	comparator: 'type',
});

export default ItemCollection;