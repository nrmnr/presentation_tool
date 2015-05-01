$(function(){
  var Page = function($parent, page_data) {
    var title = page_data.title;
    var $page = $("<div></div>");
    this.element = $page;
    $page.append("<div>" + title + "</div>");
    $page.hide();
    $parent.append($page);
  };

  var Presentation = function(target, presen_data) {
    var $target = $(target);
    var current_page = 0;
    var pages = [];

    var init_target_size = function() {
      $target.
        css("width", "800px").
        css("height", "600px");
    };

    var init_target_style = function() {
      $target.
        css("border", "1px solid black").
        css("background-color", "white");
    };

    var init_target_action = function() {
      $target.click(function() {
        current_page++;
        if (!show_current_page()) {
          current_page--;
        }
      });
    };

    var init_target = function() {
      init_target_size();
      init_target_style();
      init_target_action();
    };

    var hide_all_pages = function() {
      $.each(pages, function(i, page) {
        page.element.hide();
      });
    };

    var show_current_page = function() {
      if (0 <= current_page && current_page < pages.length) {
        hide_all_pages();
        pages[current_page].element.show();
        return true;
      } else {
        return false;
      }
    };

    var init_pages = function() {
      $.each(presen_data.pages, function(i, page_data) {
        pages.push(new Page($target, page_data));
      });
      show_current_page();
    };

    init_target();
    init_pages();
  };

  var presen_data = {
    pages: [
      {
        title: "Page 1"
      },
      {
        title: "Page 2"
      }
    ]
  };
  new Presentation("#presen_board", presen_data);
});
