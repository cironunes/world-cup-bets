'use strict';

angular.module('bt.share')
  .directive('btShareTwitter', function(share) {
    return {
      restrict: 'E',
      scope: {
        bet: '='
      },
      template: '<button ng-click="shareOnTwitter()">Share on Twitter</button>',
      link: function($scope, $element, $attrs) {
        $scope.shareOnTwitter = function() {
          share.shareOnTwitter($scope.bet);
        };
      }
    };
  });
