describe('Directive: Games', function() {
  beforeEach(module('bt.games'));

  var scope,
      element,
      $compile,
      $rootScope;

  beforeEach(inject(function(_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;

    scope = $rootScope.$new();

    element = $compile('<bt-games></bt-games>')(scope);
  }));

});
