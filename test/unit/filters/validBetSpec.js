describe('Filter: validBet', function() {
  var filter;

  beforeEach(module('filters'));

  beforeEach(inject(function($filter) {
    filter = $filter('validBet');
  }));

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

  function simpleBet(home, away) {
    return bet('BRA', home, 'CHI', away);
  }

  describe('should be valid if', function() {
    var _bet;

    afterEach(function() {
      expect(filter(_bet)).toBeTruthy();
    });

    it('it contains bets for both teams', function() {
      _bet = simpleBet(1, 2);
    });

    it('it contains 0 as bet for teams', function() {
      _bet = simpleBet(0, 0);
    });
  });

  describe('should be invalid if', function() {
    var _bet;

    afterEach(function() {
      expect(filter(_bet)).toBeFalsy();
    });

    it('home team does not have a bet', function() {
      _bet = simpleBet(undefined, 0);
    });

    it('away team does not have a bet', function() {
      _bet = simpleBet(0, undefined);
    });

    it('home team does not have a valid bet', function() {
      _bet = simpleBet('', 1);
    });

    it('away team does not have a valid bet', function() {
      _bet = simpleBet(2, 'text');
    });
  });
});
