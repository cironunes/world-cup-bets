'use strict';

angular.module('bt.share')
  .directive('btShareFacebook', function(share) {
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
            share.shareOnFacebook($scope.text, $scope.url);
          }
        };
      },
      template: '<button class="bt-share bt-share-facebook" ng-click="share()">Share it</button>'
    };
  });
