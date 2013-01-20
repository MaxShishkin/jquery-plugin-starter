(function ($, undefined) {
  'use strict';

  var Plugin = function (elem, opts) {
    this.$elem = $(elem);
    this.opts = $.extend({}, $.fn.plugin.options, opts);
  };

  $.fn.plugin = function (opts) {
    return this.each(function () {
      $.data(this, 'plugin', new Plugin(this, opts));
    });
  }

  $.fn.plugin.options = {

  };

}(jQuery));