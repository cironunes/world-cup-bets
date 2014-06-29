'use strict';

angular.module('bt.share')
  .directive('btShareTwitter', function(share) {
    return {
      restrict: 'EA',
      replace: true,
      scope: {
        text: '=',
        url: '=',
        active: '&'
      },
      controller: function($scope, $attrs) {
        $scope.share = function() {
          if (!$attrs.active || $scope.active()) {
            share.shareOnTwitter($scope.text, $scope.url);
          }
        };
      },
      template: '<button ng-click="share()">Share on Twitter</button>'
    };
  });
