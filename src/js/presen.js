$(function(){
  var Presentation = function(target) {
    var $target = $(target);

    var init_target_size = function() {
      $target.
        css("width", "800px").
        css("height", "600px");
    };

    var init_target_style = function() {
      $target.
        css("border", "1px solid black").
        css("background-color", "gray");
    };

    var init_target = function() {
      init_target_size();
      init_target_style();
    };

    init_target();
  };

  new Presentation("#presen_board");
});
