'use strict';

angular.module('filters')
  .filter('bet', function($filter) {
    var MESSAGE = 'Here goes my #WorldCupBets: ',
      validityCheck = $filter('validBet');

    function formatBetMessage(bet) {
      return bet.home_team.code + ' ' + bet.home_team.bet + ' x ' + bet.away_team.bet + ' ' + bet.away_team.code;
    }

    return function(bets) {
      var betsStr, i, str;

      bets = validityCheck(bets);

      if (angular.isArray(bets)) {
        betsStr = [];

        for (i = 0; i < bets.length; i++) {
          betsStr.push(formatBetMessage(bets[i]));
        }

        str = betsStr.join(' - ');
      } else {
        str = bets ? formatBetMessage(bets) : null;
      }

      return str ? MESSAGE + str : null;
    };
  });
