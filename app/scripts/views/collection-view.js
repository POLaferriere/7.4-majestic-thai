var CollectionView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'add', this.addChild);
    this.listenTo(this.collection, 'remove', this.removeChild);
    this.listenTo(this.collection, 'sort', this.sortChildren);

    this.children = [];
  },

  addChild: function(model, collection) {
    var index = collection.indexOf(model);
    var ItemViewConstructor = this.ItemViewConstructor || Backbone.View;
    var view = new ItemViewConstructor({model: model});
    view.render();
    this.children.splice(index, 0, view);
    if(index < this.children.length - 1) {
      var nextModel = collection.at(index + 1);
      var nextView = _.findWhere(this.children, {model: nextModel});
      if(nextView) {
        nextView.$el.before(view.el);
      } else {
        this.$el.append(view.el);
      }
    }
  },

  removeChild: function(model, collection) {
    var view = _.findWhere(this.children, {model: model});
    var index = this.children.indexOf(view);
    this.children.splice(index, 1);
    view.remove();
  },

  sortChildren: function() {
    var els = this.collection.map((model) => {
      var view = _.findWhere(this.children, {model: model});
      return view.el;
    });
    this.$el.append(els);
  },

  remove: function() {
    _.invoke(this.children, 'remove');
    Backbone.View.prototype.remove.apply(this, arguments);
  }
});

export default CollectionView;