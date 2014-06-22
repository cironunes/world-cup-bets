'use strict';

angular.module('filters')
  .filter('flags', function() {
    return function(input) {
      return input.replace(' ', '-');
    };
  });
