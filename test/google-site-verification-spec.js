var grunt = require('grunt');

exports['google-site-verification'] = {
  withCode: function(test) {
    'use strict';

    var file = grunt.file.read('tmp/google123.html');

    test.expect(1);

    test.equal(file, 'google-site-verification: google123.html',
      'should generate a verification file.');

    test.done();
  }
};
