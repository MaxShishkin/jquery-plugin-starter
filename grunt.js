/*global module:false*/
module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    pkg: '<json:package.json>',

    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>, ' +
        '<%= pkg.homepage %> | ' +
        'by <%= pkg.author.name %>, <%= pkg.author.url %> */'
    },

    concat: {
      demo: {
        src: ['<banner>', 'app/jquery.plugin.js'],
        dest: 'demo/js/jquery.plugin.js'
      }
    },

    min: {
      demo: {
        src: ['<banner>', 'app/jquery.plugin.js'],
        dest: 'demo/js/jquery.plugin.min.js'
      }
    }
  });

  grunt.registerTask('demo', 'concat min');
};