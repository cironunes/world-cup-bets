describe('btGame Controller', function() {
  var scope, isolatedScope;

  beforeEach(module('bt.games'));

  beforeEach(inject(function($compile, $rootScope, $templateCache) {
    $templateCache.put('games/game.tpl.html', '<div>ssss</div>');

    scope = $rootScope.$new();
    scope.match = {
      away_team: {bet: 2},
      home_team: {bet: 1}
    };

    element = $compile('<bt-game match="match"></bt-game>')(scope);
    $rootScope.$apply();
    isolatedScope = element.isolateScope();
  }));

  describe('skipToggleMatch', function() {
    it('should set skipped flag and clear bets', function() {
      isolatedScope.toggleSkipMatch(scope.match);

      expect(scope.match.skipped).toBe(true);
      expect(scope.match.away_team.bet).toBeUndefined();
      expect(scope.match.home_team.bet).toBeUndefined();
    });

    it('should restore the bets and unset flag when called', function() {
      isolatedScope.toggleSkipMatch(scope.match);
      isolatedScope.toggleSkipMatch(scope.match);

      expect(scope.match.skipped).toBe(false);
      expect(scope.match.away_team.bet).toBe(2);
      expect(scope.match.home_team.bet).toBe(1);
    });
  });
});
