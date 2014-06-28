describe('Filter: bet', function() {
  var betValiditySpy, filter;

  beforeEach(module('filters', function($filterProvider) {
    $filterProvider.register('validBet', function() {
      betValiditySpy = jasmine.createSpy('isBetValid').andReturn(true);
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
});
