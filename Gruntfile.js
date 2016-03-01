/*
 * grunt-google-site-verification
 * https://github.com/sbstnmsch/grunt-google-site-verification
 *
 * Copyright (c) 2016 Sebastian Misch
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  grunt.initConfig({
    eslint: {
      default: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ]
    },

    clean: {
      tests: ['tmp']
    },

    'google-site-verification': {
      default: {
      },
      missingDestination: {
        options: {
          code: '123'
        }
      },
      missingCode: {
        options: {
        },
        dest: 'tmp'
      },
      withCodeAndDestination: {
        options: {
          code: '123'
        },
        dest: 'tmp/'
      }
    },

    nodeunit: {
      tests: ['test/*-spec.js']
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test',
    ['clean', 'eslint', 'google-site-verification', 'nodeunit']);

  grunt.registerTask('default', ['test']);
};
