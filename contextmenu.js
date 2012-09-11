/* contextmenu 1.1.0 */
(function($){
  // Methods
  var methods = {
    init: function(element, options){
      var $this = this;
      // Bind options
      var contextmenu = $.extend(element, options);
      contextmenu.init(contextmenu);
      contextmenu.bind({
        'contextmenu': function(e){
          if(!e.ctrlKey || !contextmenu.ctrl){
            e.preventDefault();
            $this.start(contextmenu);
            $('#contextmenu').remove();
            var c = $(document.createElement('div'))
              .attr({ 'id': 'contextmenu', 'class': contextmenu.style })
              .css({
                'position': 'absolute',
                'display':  'none',
                'z-index':  '10000'
              });
            $(document.body).append(c);
            for(var i in contextmenu.menu){
              var menu_item = $(document.createElement('a'));
              if(typeof contextmenu.menu[i]['callback'] === 'function'){
                menu_item.click(contextmenu.menu[i]['callback']);
              }
              else{
                menu_item.attr({ 'href': contextmenu.menu[i]['callback'] });
              }
              menu_item.attr({ 'id': contextmenu.menu[i]['id'], 'class': contextmenu.menu[i]['class'] });
              menu_item.html(contextmenu.menu[i]['title']).appendTo(c);
            }
            // Set position
            var ww = $(document).width();
            var wh = $(document).height();
            var w = c.outerWidth();
            var h = c.outerHeight();
            var x = e.pageX > (ww - w) ? (ww - w) : e.pageX;
            var y = e.pageY > (wh - h) ? (wh - h) : e.pageY;
            c.css({
              display : 'block',
              top     : y,
              left    : x
            });
          }
        }
      });
      $(document).click(function(){
        $this.finish(contextmenu);
      }).keydown(function(e){
        if(e.keyCode === 27){
          $this.finish(contextmenu);
        }
      }).scroll(function(){
        $this.finish(contextmenu);
      }).resize(function(){
        $this.finish(contextmenu);
      });
    },
    start: function(contextmenu){
      contextmenu.start(contextmenu);
      return;
    },
    finish: function(contextmenu){
      contextmenu.finish(contextmenu);
      $('#contextmenu').remove();
      return;
    },
    error: function(contextmenu){
      contextmenu.error(contextmenu);
      return;
    }
  };
  $.fn.contextmenu = function(options){
    options = $.extend({
      init    : function(){},
      start   : function(){},
      finish  : function(){},
      error   : function(){},
      ctrl    : 1,
      style   : '',
      menu    : []
    }, options);
    this.each(function(){
      methods.init($(this), options);
    });
  };
})(jQuery);
