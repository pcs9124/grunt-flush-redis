/*
 * grunt-flush-redis
 * https://github.com/yaymukund/grunt-flush-redis
 *
 * Copyright (c) 2012 Mukund Lakshman
 * Licensed under the MIT license.
 */

var redis = require('redis');

module.exports = function(grunt) {

  // Please see the grunt documentation for more information regarding task and
  // helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

  // ==========================================================================
  // TASKS
  // ==========================================================================

  grunt.registerTask('flush-redis', 'Flush a redis database.', function() {
    redis.createClient().flushdb();
  });
};
