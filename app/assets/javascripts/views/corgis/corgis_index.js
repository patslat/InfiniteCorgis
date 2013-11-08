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
      var show = new Infinite.Views.Corgi({ model: corgi });
      $(self.$el.find('#corgis-index')).append(show.render().$el)
    });

    console.log(this.collection.currentPage);
    console.log(this.collection.numPages);

    this.listenForScroll();

    return this;
  },

  listenForScroll: function () {
    $(window).off("scroll"); //remove past view's listeners

    var throttledCallback = _.throttle(this.nextPage.bind(this), 200);

    $(window).on("scroll", throttledCallback);
  },

  nextPage: function () {
    var self = this;

    if ($(window).scrollTop() > $(document).height() - $(window).height() - 50) {
      console.log("scrolled to bottom!");

      if (self.collection.currentPage < self.collection.numPages) {
        self.collection.fetch({
          data: { page: parseInt(self.collection.currentPage) + 1 },
          remove: false,
          wait: true,
          success: function () {
            // add will fire and page will rerender
            console.log("successfully fetched page " + self.collection.currentPage);
          }
        });
      }
    }
  }

});
