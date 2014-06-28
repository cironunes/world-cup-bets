describe('Filter: validBet', function() {
  var filter;

  beforeEach(module('filters'));

  beforeEach(inject(function($filter) {
    filter = $filter('validBet');
  }));

  function simpleBet(home, away) {
    return mockBet('BRA', home, 'CHI', away);
  }

  describe('should be valid if', function() {
    var _bet;

    afterEach(function() {
      expect(filter(_bet)).toBe(_bet);
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
      expect(filter(_bet)).toBeNull();
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

  describe('for arrays', function() {
    it('should return a subset of valid bets only', function() {
      var bets = [
          simpleBet(1, 2),
          simpleBet(1, undefined),
          simpleBet(),
          {},
          simpleBet(0, 0)
        ],
        validBets = filter(bets);

      expect(validBets.length).toBe(2);
      expect(validBets[0]).toBe(bets[0]);
      expect(validBets[1]).toBe(bets[4]);
    });
  });
});
