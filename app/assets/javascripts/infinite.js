window.Infinite = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var $content = $('#content');
    var corgis = new Infinite.Collections.Corgis();
    console.log($content);
    corgis.fetch({
      data: { page: 1 },
      success: function () {
        new Infinite.Routers.Corgis($content, corgis);
        Backbone.history.start({pushState: true});
      }
    });
  }
};

$(document).ready(function(){
  Infinite.initialize();
});
