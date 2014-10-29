(function($){
  $.mexpand = function(container, options){
    var base = this;
    base.$container = $(container);
    base.container = container;
    base.$container.data("mexpand", base);
    
    base.boxWrapper = '<div class="me-box" data-mexpand="box"></div>';

    base.init = function(){
      base.options = $.extend({},$.mexpand.defaultOptions, options);

      base.$elements = base.$container.children(base.options.element);

      function clean(){
        base.$elements.removeClass('me-selected me-last');
        $('[data-mexpand~=box]', base.container).slideUp(400, function(){$(this).remove();});
        //TODO: apply effects on remove box
      }

      function getElementsByRow(){
        return Math.round( base.$container.width() / base.$elements.width() );
      }

      function getLastRowElement(element){
        var elementIndex  = element.index();
        var elementsByRow = getElementsByRow();
        var lastRowIndex = elementIndex + elementsByRow - (elementIndex % elementsByRow) - 1;
        return base.$elements.eq(lastRowIndex); 
      }

      function drawBoxAfter(element){
        if (element){
          element.addClass('me-last');
          element.after(base.boxWrapper);
          $('[data-mexpand~=box]', base.container).html(base.options.box)
          //TODO: Apply effects on append box
        }
      }

      function expand(element){
        clean();
        $(element).addClass('me-selected'); 
        var lastRowElement = getLastRowElement($(element));
        drawBoxAfter(lastRowElement);
        if (jQuery.isFunction(base.callback))
          base.callback(element, lastRowElement);
      }

      function setEvents(){
        base.$container.on('click', base.options.element, function(){expand(this)});

        $(window).resize(function() {
           $('.me-selected', base.container).click();
        });
      }

      setEvents();
    };

    // base.functionName = function(paramaters){};

    base.init();
  };

  $.mexpand.defaultOptions = {
    element: "div",       //element to expand selector
    box: "Mexpander: Example text appended on element",  // function or content to apend into element
    callback: null        //calback(element, lastRowElement)
  };

  $.fn.mexpand = function(options){
    return this.each(function(){
      (new $.mexpand(this, options));
    });
  };

})(jQuery);