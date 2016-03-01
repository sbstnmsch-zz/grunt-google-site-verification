/*
 * grunt-google-site-verification
 * https://github.com/sbstnmsch/grunt-google-site-verification
 *
 * Copyright (c) 2016 Sebastian Misch
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  grunt.registerMultiTask(
    'google-site-verification', 'Generate Google site verification file', function () {

    var
      options = this.options({}),
      code = options.code || process.env.GOOGLE_SITE_VERIFICATION,
      path = require('path');

    if (!this.files.length || !this.files[0].dest) {
      grunt.log.writeln('No destination path defined.');
    } else if (!code) {
      grunt.log.writeln('No code defined in config nor environment.');
    } else {
      var
        filename = 'google' + code + '.html',
        dest = path.join(this.files[0].dest , filename);

      grunt.file.write(dest, 'google-site-verification: ' + filename);
      grunt.log.writeln(('File "' + filename + '" created.').cyan);
    }
  });
};
