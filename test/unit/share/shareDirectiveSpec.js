describe('Directive: Share', function() {
  beforeEach(module('bt.share'));

  var element,
      share,
      $compile,
      $scope;

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

  beforeEach(inject(function(_$compile_, _$rootScope_, _share_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    share = _share_;

    $scope.match = {
      home_team: {
        code: 'USA',
        bet: 0
      },
      away_team: {
        code: 'GER',
        bet: 1
      }
    };

    element = $compile(
      '<bt-share-twitter bet="match"></bt-share-twitter>'
    )($scope);

    $scope.$digest();
  }));

  it('should exist', function() {
    expect(element[0].innerText).toBe('Share on Twitter');
  });

  it('should share the bet', function() {
    spyOn(share, 'shareOnTwitter');

    element.find('button').triggerHandler('click');

    expect(share.shareOnTwitter).toHaveBeenCalled();
  });
});
