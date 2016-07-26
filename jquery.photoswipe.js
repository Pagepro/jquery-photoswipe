/*globals jQuery, window, document */
(function ($) {
    "use strict";
    var pluginName  =   "photoSwipe",
        defaults    =   {
            link: '.js-lightbox',
            barsSize: {top:0,bottom:0},
            captionEl: false,
            fullscreenEl: false,
            shareEl: false,
            bgOpacity: 0.85,
            tapToClose: true,
            tapToToggleControls: false,
            mainClass: 'pswp--minimal--dark',
            template: '<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">' +
                        '<div class="pswp__bg"></div>' +
                        '<div class="pswp__scroll-wrap">' +
                        '<div class="pswp__container">' +
                        '<div class="pswp__item"></div>' +
                        '<div class="pswp__item"></div>' +
                        '<div class="pswp__item"></div>' +
                        '</div>' +
                        '<div class="pswp__ui pswp__ui--hidden">' +
                        '<div class="pswp__top-bar">' +
                        '<div class="pswp__counter"></div>' +
                        '<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>' +
                        '<button class="pswp__button pswp__button--share" title="Share"></button>' +
                        '<button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>' +
                        '<button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>' +
                        '<div class="pswp__preloader">' +
                        '<div class="pswp__preloader__icn">' +
                        '<div class="pswp__preloader__cut">' +
                        '<div class="pswp__preloader__donut"></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">' +
                        '<div class="pswp__share-tooltip"></div>' +
                        '</div>' +
                        '<button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">' +
                        '</button>' +
                        '<button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">' +
                        '</button>' +
                        '<div class="pswp__caption">' +
                        '<div class="pswp__caption__center"></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>' +
                        '</div>',
            afterChange: function () {}
        };
    // The actual plugin constructor
    function Plugin(element, options) {
        this.element        =   element;
        this.$element       =   $(this.element);
        this.settings       =   $.extend({}, defaults, options);
        this.$nav           =   this.$element.find(this.settings.nav);
        this.$content       =   this.$element.find(this.settings.content);
        this.psContainer = [];
        this.items = [];
        this.init();
    }
    Plugin.prototype = {
        init: function () {
            var that = this;
            this.buildHtml();

            this.psContainer = $('.pswp')[0];
            this.items = this.getItems();

            this.enableClicks();
        },
        buildHtml: function () {
            if (!$('.pswp').length) {
                $('body').append(this.settings.template);
            }
        },
        getItems: function () {
            var that = this;
            var items = [];
            that.$element.find(this.settings.link).each(function() {
                var $href   = $(this).attr('href'),
                    $size   = $(this).data('size').split('x'),
                    $width  = $size[0],
                    $height = $size[1];

                var item = {
                    src: $href,
                    w: $width,
                    h: $height
                }
                items.push(item);
            });
            return items;
        },
        enableClicks: function () {
            var that = this;
            that.$element.find(this.settings.link).on('click', function(event) {
                event.preventDefault();
                var index = $(this).data('no') || 0;
                var options = {
                    index: index,
                    bgOpacity: 0.7,
                    showHideOpacity: true
                }
                options.mainClass = that.settings.mainClass;
                options.barsSize = that.settings.barsSize;
                options.captionEl = that.settings.captionEl;
                options.fullscreenEl = that.settings.fullscreenEl;
                options.shareEl = that.settings.shareEl;
                options.bgOpacity = that.settings.bgOpacity;
                options.tapToClose = that.settings.tapToClose;
                options.tapToToggleControls = that.settings.tapToToggleControls;
                // Initialize PhotoSwipe
                var lightBox = new PhotoSwipe(that.psContainer, PhotoSwipeUI_Default, that.items, options);
                lightBox.init();
            });
        }
    };
    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, pluginName)) {
                $.data(this, pluginName, new Plugin(this, options));
            }
        });
    };
}(jQuery));