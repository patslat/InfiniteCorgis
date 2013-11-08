Infinite.Views.CorgiShow = Backbone.View.extend({
  template: JST['corgis/show'],

  render: function () {
    var show = this.template({ corgi: this.model });

    this.$el.html(show);

    return this;
  }

});
