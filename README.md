# grunt-google-site-verification

[![Greenkeeper badge](https://badges.greenkeeper.io/sbstnmsch/grunt-google-site-verification.svg)](https://greenkeeper.io/)

> Generate Google site verifications on the fly.

[![Build Status](https://travis-ci.org/sbstnmsch/grunt-google-site-verification.svg?branch=master)](https://travis-ci.org/sbstnmsch/grunt-google-site-verification) ♦
[![npm version](https://badge.fury.io/js/grunt-google-site-verification.svg)](http://badge.fury.io/js/grunt-google-site-verification)

[![NPM](https://nodei.co/npm/grunt-google-site-verification.png)](https://nodei.co/npm/grunt-google-site-verification/)


## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out
the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains
how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as
install and use Grunt plugins. Once you're familiar with that process, you may
install this plugin with this command:

```shell
npm install grunt-google-site-verification --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile
with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-google-site-verification');
```

## The "google-site-verification" task

### Overview
In your project's Gruntfile, add a section named `google-site-verification` to
the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  google-site-verification: {
    options: {
      code: '<YOUR-VERIFICATION-CODE>'
    },
    dest: '<YOUR-BUILD-FOLDER>'
  }
});
```

### Options

#### options.code
Type: `String`
Default value: `undefined`

A verification code Google generated for your domain ownership. If you omit
this option the plugin falls back to the environment variable
`GOOGLE_SITE_VERIFICATION`.
This can be useful if you don't want to have your verification code in your
repository, for custom builds or i.e. Travis-CI deployments.

### Usage Examples
This example writes a verification file to './build/google834ee6e921e63f8e.html'.

```js
grunt.initConfig({
  google-site-verification: {
    options: {
      code: '834ee6e921e63f8e'
    },
    dest: 'build'
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code
using [Grunt](http://gruntjs.com/).

## Release History
* 2016/03/02 - v0.1.0 - Bump to 0.1.0 semver as everything is working as expected
* 2016/03/01 - v0.0.2 - Cleanup, dependency updates + nicer logging
* 2016/03/01 - v0.0.1 - Basic functionality
