/*! jQueryPlugin - v0.1.0 - 2013-01-20, http://example.com | by Author Name, http://example.com */

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