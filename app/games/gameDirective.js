'use restrict'

angular.module('bets')
  .directive('btGame', function() {
    return {
      restrict: 'E',
      scope: { match: '=' },
      templateUrl: 'games/game.tpl.html'
    }
  });
