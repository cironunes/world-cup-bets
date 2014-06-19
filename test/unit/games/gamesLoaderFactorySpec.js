describe('Factory: Games Loader', function() {
  beforeEach(module('bt.games'));

  var gamesLoader,
      $httpBackend;

  beforeEach(inject(function(_$httpBackend_, _gamesLoader_) {
    $httpBackend = _$httpBackend_;
    gamesLoader = _gamesLoader_;
  }));

  afterEach(function() {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('#getGames', function() {
    it('should fetch the games', function() {
      var expected;

      $httpBackend.when('GET', 'http://worldcup.sfg.io/matches/today').respond([
        {
          "home_team": {
            "country": "Colombia",
            "code": "COL",
            "goals": 0
          },
          "away_team": {
            "country": "Ivory Coast",
            "code": "CIV",
            "goals": 0
          }
        }
      ]);

      gamesLoader.getGames().then(function(data) {
        expected = data;
      });

      $httpBackend.flush();
      expect(expected.length).toBe(1);
    });
  });
});
