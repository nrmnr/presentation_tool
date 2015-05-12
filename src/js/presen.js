$(function(){
  var Page = function($parent, page_data) {
    var create_contents = function(info) {
      var $contents = $("<div></div>");
      $contents.addClass("contents");
      $contents.
        css("left",   info.x).
        css("top",    info.y).
        css("width",  info.w).
        css("height", info.h);
      $contents.append(info.contents);
      return $contents;
    };

    var init_page_contents = function(contents) {
      $.each(contents, function(i, info) {
        var $contents = create_contents(info);
        $page.append($contents);
      });
    };

    var init_page_element = function($parent, page_data) {
      var title = page_data.title;
      var $page = $("<div></div>");
      $page.addClass("page");
      //$page.append("<div>" + title + "</div>");
      $page.hide();
      $parent.append($page);
      return $page;
    };

    var $page = init_page_element($parent, page_data);
    init_page_contents(page_data.contents);
    this.element = $page;
  };

  var Presentation = function(target, presen_data) {
    var $target = $(target);
    var current_page = 0;
    var pages = [];
    var $page_num = $("#page_num");

    var init_target_size = function() {
      $target.
        css("width", "800px").
        css("height", "600px");
      $page_num.css("width", $target.css("width"));
    };

    var init_target_style = function() {
      $target.
        css("border", "1px solid black").
        css("background-color", "white");
    };

    var init_target_action = function() {
      $target.click(function() {
        current_page = (current_page + 1) % pages.length;
        show_current_page();
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
        $page_num.html(current_page+1);
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
        title: "Page 1",
        contents: [
          {x:20, y:20, w:300, h:50,
           contents: "二次方程式 $ ax^2 + bx +c = 0 $ の解の公式"},
          {x:20, y:80, w:300, h:100,
           contents: "\\[ x = \\frac{-b \\pm{} \\sqrt{b^2 - 4ac}}{2a} \\]"}
        ]
      },
      {
        title: "Page 2",
        contents: [
          {x:20, y:20, w:300, h:50,
           contents: "二次方程式 $ ax^2 + 2bx +c = 0 $ の解の公式"},
          {x:20, y:80, w:300, h:100,
           contents: "\\[ x = \\frac{-b \\pm{} \\sqrt{b^2 - ac}}{a} \\]"}
        ]
      }
    ]
  };
  new Presentation("#presen_board", presen_data);

  $(".contents").draggable({containment:"parent", scroll:false});
});
