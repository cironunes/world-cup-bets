'use strict';

angular.module('bt.share')
  .service('share', ['$window', function($window) {
    var MESSAGE = 'Here goes my #WorldCupBets: ';

    function formatBetMessage(match) {
      return match.home_team.code + ' ' + match.home_team.bet + ' x ' + match.away_team.bet + ' ' + match.away_team.code;
    }

    function openTwitterShare(msg) {
      $window.open(
        'https://twitter.com/share?text=' + encodeURIComponent(msg),
        'twitter-share',
        'height=440, width=720'
      );
    }

    function openFacebookShare(msg) {
      $window.open(
        'http://www.facebook.com/sharer.php?s=100&' +
        'p[title]=title&p[url]=http://www.worldcupbets.com&' +
        'p[summary]=' + encodeURIComponent(msg) +
        'summary&p[images][0]= ' +
        'http://upload.wikimedia.org/wikipedia/en/thumb/e/e8/WC-2014-Brasil.svg/719px-WC-2014-Brasil.svg.png',
        'facebook-share',
        'height=440, width=720'
      );
    };

    this.shareOnTwitter = function(bet) {
      bet = formatBetMessage(bet);
      openTwitterShare(MESSAGE + bet);
    };

    this.shareOnFacebook = function(bet) {
      bet = formatBetMessage(bet);
      openFacebookShare(MESSAGE + bet);
    };
  }]);
