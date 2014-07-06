'use strict';

describe('Ctrl: AppCtrl', function() {
  var scope, validBet;

  beforeEach(module('bets', function($filterProvider) {
    $filterProvider.register('validBet', function() {
      validBet = jasmine.createSpy('validBet');
      return validBet;
    });
  }));

  beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    $controller('AppCtrl', {$scope: scope});
  }));

  describe('#hasValidBets', function() {
    it('should return true if length of valid bets is greater than 0', function() {
      var games = {};

      validBet.andReturn([1]);
      scope.hasValidBets(games);

      expect(scope.hasValidBets(games)).toBe(true);
      expect(validBet).toHaveBeenCalledWith(games);
    });

    it('should return false if length of valid bets is equal to 0', function() {
      var games = {};

      validBet.andReturn([]);
      scope.hasValidBets(games);

      expect(scope.hasValidBets(games)).toBe(false);
    });

    it('should return false if return is null', function() {
      var games = {};

      validBet.andReturn(null);
      scope.hasValidBets(games);

      expect(scope.hasValidBets(games)).toBe(false);
    });

    it('should return false if return is undefined', function() {
      var games = {};

      validBet.andReturn(undefined);
      scope.hasValidBets(games);

      expect(scope.hasValidBets(games)).toBe(false);
    });
  });
});

