describe('Filter: Flags', function() {
  beforeEach(module('filters'));

  var flagsFilter;

  beforeEach(inject(function(_flagsFilter_) {
    flagsFilter = _flagsFilter_;
  }));

  it('should get the correct name of the file of the flag', function() {
    expect(flagsFilter('Korea Republic')).toBe('Korea-Republic');
  });
});
