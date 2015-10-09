import CollectionView from 'views/collection-view';
import MenuListItemView from 'views/menu-list-item';

var MenuListView = CollectionView.extend({
	tagName: 'ul',
	ItemViewConstructor: MenuListItemView,
});

export default MenuListView;