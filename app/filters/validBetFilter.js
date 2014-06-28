'use strict';

angular.module('filters')
  .filter('validBet', function() {
    return function(bet) {
      return bet && bet.home_team && !isNaN(parseInt(bet.home_team.bet)) &&
        bet.away_team && !isNaN(parseInt(bet.away_team.bet));
    };
  });
