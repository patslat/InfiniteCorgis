Infinite.Routers.Corgis = Backbone.Router.extend({
  initialize: function ($content, collection) {
    this.$content = $content;
    this.collection = collection;
  },

  routes: {
    "" : "index"
  },

  index: function () {
    var index = new Infinite.Views.CorgisIndex({
      collection: this.collection,
    });

    this.$content.html(index.render().$el);
  }

});
