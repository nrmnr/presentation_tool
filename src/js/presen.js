$(function(){
  var Presentation = function(target) {
    var $target = $(target);
    $target.
      css("width", "800px").
      css("height", "600px").
      css("border", "1px solid black").
      css("background-color", "gray");
  };

  new Presentation("#presen_board");
});
