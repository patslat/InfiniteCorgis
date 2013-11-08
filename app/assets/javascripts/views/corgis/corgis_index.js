Infinite.Views.CorgisIndex = Backbone.View.extend({

  template: JST['corgis/index'],

  render: function () {
    this.$el.html(this.template());
    var self = this;

    this.collection.each(function (corgi) {
      var show = new Infinite.Views.Corgi({ model: corgi });
      $(self.$el.find('#corgis-index')).append(show.render().$el)
    });

    return this;
  }

});
