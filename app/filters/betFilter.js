'use strict';

angular.module('filters')
  .filter('bet', function($filter) {
    var MESSAGE = 'Here goes my #WorldCupBets: ',
      validityCheck = $filter('validBet');

    function formatBetMessage(bet) {
      return bet.home_team.code + ' ' + bet.home_team.bet + ' x ' + bet.away_team.bet + ' ' + bet.away_team.code;
    }

    return function(bet) {
      return validityCheck(bet) ? MESSAGE + formatBetMessage(bet) : null;
    };
  });
