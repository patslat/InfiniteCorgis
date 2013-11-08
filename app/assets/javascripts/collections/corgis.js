Infinite.Collections.Corgis = Backbone.Collection.extend({

  model: Infinite.Models.Corgi,

  url: '/corgis',

  parse: function (data) {
    this.currentPage = data.current_page
    this.numPages = data.num_pages;

    return data.models;
  }

});
