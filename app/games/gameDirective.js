'use strict';

angular.module('bt.games')
  .directive('btGame', function() {
    return {
      restrict: 'E',
      scope: { match: '=' },
      controller: function($scope) {
        $scope.toggleSkipMatch = function(match) {
          match.skipped = !match.skipped;

          if (match.skipped) {
            match.home_team.bkpBet = match.home_team.bet;
            match.away_team.bkpBet = match.away_team.bet;
            match.home_team.bet = undefined;
            match.away_team.bet = undefined;
          } else {
            match.home_team.bet = match.home_team.bkpBet;
            match.away_team.bet = match.away_team.bkpBet;
          }
        };
      },
      templateUrl: 'games/game.tpl.html'
    };
  });
