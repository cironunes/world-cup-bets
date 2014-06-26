'use strict';

angular.module('bt.share')
  .service('share', ['$window', function($window) {
    function formatBetMessage(match) {
      return match.home_team.code + ' ' + match.home_team.bet + ' x ' + match.away_team.bet + ' ' + match.away_team.code;
    }

    function openTwitterShare(msg) {
      $window.open('https://twitter.com/share?text=' + encodeURIComponent(msg), 'twitter-share', 'height=440,width=720');
    }

    this.shareOnTwitter = function(bets) {
      var msgs = [],
        i;

      for (i = 0; i < bets.length; i++) {
        msgs.push(formatBetMessage(bets[i]));
      }

      openTwitterShare('Here goes my #WorldCupBets: ' + msgs.join(' - ') + '.');
    };
  }]);
