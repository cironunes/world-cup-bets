describe('share service', function() {
  var share, $window;

  beforeEach(module('bt.share'));

  beforeEach(inject(function(_share_, _$window_) {
    share = _share_;
    $window = _$window_;
    spyOn($window, 'open');
  }));

  function getLastMessage() {
    var url = $window.open.mostRecentCall.args[0];
    return decodeURIComponent(url.substring(url.indexOf('text=') + 5));
  }

  function bet(home, homeBet, away, awayBet) {
    return {
      home_team: {
        code: home,
        bet: homeBet
      },
      away_team: {
        code: away,
        bet: awayBet
      }
    };
  }

  it('should create a twitter message for each bet, and join them by " - "', function() {
    share.shareOnTwitter([
      bet('BRA', 1, 'CHI', 2)
    ]);

    expect(getLastMessage().indexOf('BRA 1 x 2 CHI')).not.toBe(-1);

    share.shareOnTwitter([
      bet('BRA', 1, 'CHI', 2),
      bet('DEF', 3, 'ABC', 4)
    ]);

    expect(getLastMessage().indexOf('BRA 1 x 2 CHI - DEF 3 x 4 ABC')).not.toBe(-1);
  });

  it('should keep the message under 140 chars with 4 matches', function() {
    share.shareOnTwitter([
      bet('BRA', 1, 'CHI', 2),
      bet('DEF', 3, 'ABC', 4),
      bet('GHI', 5, 'JKL', 6),
      bet('MNF', 7, 'OPQ', 8)
    ]);

    expect(getLastMessage().length).toBeLessThan(140);
  });
});
