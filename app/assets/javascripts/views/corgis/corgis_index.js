Infinite.Views.CorgisIndex = Backbone.View.extend({
  initialize: function (options) {
    this.collection = options.collection;
    this.listenTo(this.collection, "add", this.render);
  },

  template: JST['corgis/index'],

  render: function () {
    this.$el.html(this.template());
    var self = this;

    this.collection.each(function (corgi) {
      var show = new Infinite.Views.CorgiShow({ model: corgi });
      self.$el.find('#corgis-index').append(show.render().$el)
    });

    return this;
  },

});
