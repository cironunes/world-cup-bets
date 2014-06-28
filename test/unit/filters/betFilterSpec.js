describe('Filter: bet', function() {
  var betValiditySpy, filter;

  beforeEach(module('filters', function($filterProvider) {
    $filterProvider.register('validBet', function() {
      betValiditySpy = jasmine.createSpy('isBetValid').andCallFake(function(bets) {
        return bets;
      });

      return betValiditySpy;
    });
  }));

  beforeEach(inject(function($filter) {
    filter = $filter('bet');
  }));

  it('should properly format a bet message', function() {
    var str = filter(mockBet('BRA', 2, 'CHI', 1));
    expect(str).toBe('Here goes my #WorldCupBets: BRA 2 x 1 CHI');
  });

  it('should return null if the bet is invalid', function() {
    betValiditySpy.andReturn(false);
    var str = filter(mockBet('BRA', 2, 'CHI', 1));
    expect(str).toBeNull();
  });

  it('should return more than one bet separated by dash', function() {
    var bets = [
      mockBet('BRA', 2, 'CHI', 1),
      mockBet('COL', 1, 'URU', 3)
    ], str = filter(bets);

    expect(str).toBe('Here goes my #WorldCupBets: BRA 2 x 1 CHI - COL 1 x 3 URU');
  });

  it('should ignore invalid bets', function() {
    var bets = [
      mockBet('BRA', 2, 'CHI', 1),
      {},
      mockBet('COL', 1, 'URU', 3)
    ], str;

    betValiditySpy.andReturn([bets[0], bets[2]]);

    str = filter(bets);
    expect(str).toBe('Here goes my #WorldCupBets: BRA 2 x 1 CHI - COL 1 x 3 URU');
  });

  it('should return null if all bets are invalid', function() {
    var bets = [
      mockBet('BRA', undefined, 'CHI', 1),
      {},
      mockBet('COL', 1, 'URU', 'invalid bet')
    ], str;

    betValiditySpy.andReturn([]);
    str = filter(bets);
    expect(str).toBeNull();
  });
});
