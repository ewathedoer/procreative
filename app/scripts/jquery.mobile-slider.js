(function ($) {
    
    'use strict';
 
    $.fn.mobileSlider = function (options) {
 
        var settings = $.extend({
                topBorderPercent: 0.115,
                leftBorderPercent: 0.05,
                screenWidthPercent: 0.91,
                screenHeightPercent: 0.771,
                slideMargin: 20
            }, options),
            $this = this;
        
        
        function initSlider() {
            var $phone = $('.phone', $this),
                $slides = $('.slides', $this),
                $slideItems = $('.slides .slide', $this);
            
            // setting the slider as keyboard-responsive
            $this.attr('tabindex', 0);
            // centering the phone frame
            $phone.css('margin-left', (-($phone.width() / 2)) + 'px');
            // container for slides, setting up the width according to slide number
            $slides.css({
                'width': ($phone.width() * $slideItems.length) + 'px',
                'height': (settings.screenHeightPercent * 100) + '%',
                'padding-top': ($phone.height() * settings.topBorderPercent) + 'px'
            });
            // setting up the width of each slide to fit the area
            $slideItems.each(function () {
                $(this).css({
                    'width': ($phone.width() * settings.screenWidthPercent) + 'px',
                    'padding': '0 ' + settings.slideMargin + 'px'
                });
            });
        }
        
        function calculateSliderActivePosition() {
            var $active = $('.slide.active', $this),
                $slides = $('.slides', $this),
                $phone  = $('.phone', $this);
            // moving and calculating the position of the slide displayed in the center
            $slides.css('margin-left', (
                $phone.position().left - settings.slideMargin - $phone.width() / 2 + $phone.width() * settings.leftBorderPercent -
                ($active.width() + settings.slideMargin * 2.21) * $active.index()
            ) + 'px');
        }
        
        initSlider();
        // displaying in the center the active slide
        calculateSliderActivePosition();

        // user interaction handling
        $(window).resize(function () {
            initSlider();
            calculateSliderActivePosition();
        });
        $('.slide', $this).on('click', function () {
            $('.slide', $this).removeClass('active');
            $(this).addClass('active');
            calculateSliderActivePosition();
        });
        $this.on('keydown', function (event) {
            var $active = $('.slide.active', $this);
            if (event.which === 39 && $active.next().length > 0) {
                $active.next().trigger('click');
            } else if (event.which === 37 && $active.prev().length > 0) {
                $active.prev().trigger('click');
            }
        });
        
        var hm = new Hammer($this.get(0));
        hm.on('swipeleft', function() {
            var $active = $('.slide.active', $this);
            if ($active.next().length > 0) {
                $active.next().trigger('click');
            }
        });
        hm.on('swiperight', function() {
            var $active = $('.slide.active', $this);
            if ($active.prev().length > 0) {
                $active.prev().trigger('click');
            }
        });
 
        return this;
 
    };
 
}(jQuery));