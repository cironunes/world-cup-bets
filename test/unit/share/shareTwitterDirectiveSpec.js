describe('Directive: shareTwitterDirective', function() {
  beforeEach(module('bt.share'));

  var element,
      share,
      $compile,
      $scope;

  beforeEach(inject(function(_$compile_, _$rootScope_, _share_) {
    $compile = _$compile_;
    $scope = _$rootScope_.$new();
    share = _share_;

    spyOn(share, 'shareOnTwitter');

    element = $compile(
      '<bt-share-twitter text="_text" url="_url" active="_active" />'
    )($scope);

    $scope.$apply();
  }));

  it('should call the share service with given params', function() {
    $scope._text = 'mocked text';
    $scope._url = 'mockedurl';
    $scope._active = true;
    $scope.$digest();

    element.triggerHandler('click');
    expect(share.shareOnTwitter).toHaveBeenCalledWith('mocked text', 'mockedurl');
  });

  it('should call the share service if no active param is defined', function() {
    element = $compile('<bt-share-twitter text="_text" url="_url" />')($scope);
    $scope._text = 'mocked text';
    $scope._url = 'mockedurl';
    $scope.$digest();

    element.triggerHandler('click');
    expect(share.shareOnTwitter).toHaveBeenCalledWith('mocked text', 'mockedurl');
  });

  it('should not call the share service if active is false', function() {
    $scope._text = 'mocked text';
    $scope._url = 'mockedurl';
    $scope._active = false;
    $scope.$digest();

    element.triggerHandler('click');
    expect(share.shareOnTwitter).not.toHaveBeenCalled();
  });
});
