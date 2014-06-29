'use strict';

angular.module('bt.share')
  .directive('btShareTwitter', function(share, $window) {
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
      template: '<button class="bt-share-twitter" ng-click="share()"><img src="images/icon-twitter.png"></button>'
    };
  });
