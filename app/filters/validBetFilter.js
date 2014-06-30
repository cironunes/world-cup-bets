'use strict';

angular.module('filters')
  .filter('validBet', function() {
    function isBetValid(bet) {
      /* jshint camelcase: false */
      return bet && bet.home_team && !isNaN(parseInt(bet.home_team.bet)) &&
        bet.away_team && !isNaN(parseInt(bet.away_team.bet));
    }

    return function(bets) {
      var validBets, current, i;

      if (angular.isArray(bets)) {
        validBets = [];

        for (i = 0; i < bets.length; i++) {
          current = bets[i];

          if (isBetValid(current)) {
            validBets.push(current);
          }
        }
      } else {
        validBets = isBetValid(bets) ? bets : null;
      }

      return validBets;
    };
  });
