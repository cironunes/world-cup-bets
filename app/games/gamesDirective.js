'use strict';

angular.module('bt.games')
  .directive('btGames', function() {
    return {
      restrict: 'E',
      templateUrl: 'games/games.tpl.html'
    };
  });
