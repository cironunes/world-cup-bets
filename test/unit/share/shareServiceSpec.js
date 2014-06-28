describe('share service', function() {
  var share, $window;

  beforeEach(module('bt.share'));

  beforeEach(inject(function(_share_, _$window_) {
    share = _share_;
    $window = _$window_;
    spyOn($window, 'open');
  }));

  function getLastUrl() {
    var url = $window.open.mostRecentCall.args[0];
    return /[^?]+/.exec(url)[0];
  }

  function getLastCallParam(param) {
    var url = $window.open.mostRecentCall.args[0];
    return new RegExp('[?&]' + param + '=([^&]+)').exec(url)[1];
  }

  describe('#twitter', function() {
    it('should open the sharer with the correct URL', function() {
      share.shareOnTwitter('my message', 'http://example.com');
      expect(getLastUrl()).toBe('http://twitter.com/intent/tweet');
    });

    it('should use the correct encoded message and URL', function() {
      share.shareOnTwitter('my message', 'http://example.com');
      expect(getLastCallParam('text')).toBe(encodeURIComponent('my message'));
      expect(getLastCallParam('url')).toBe(encodeURIComponent('http://example.com'));
    });
  });

  describe('#facebook', function() {
    it('should open the sharer with the correct URL', function() {
      share.shareOnFacebook('my message', 'http://example.com');
      expect(getLastUrl()).toBe('http://www.facebook.com/sharer.php');
    });

    it('should use the correct encoded message and URL', function() {
      share.shareOnFacebook('my message', 'http://example.com');
      expect(getLastCallParam('p\\[summary\\]')).toBe(encodeURIComponent('my message'));
      expect(getLastCallParam('p\\[url\\]')).toBe(encodeURIComponent('http://example.com'));
    });
  });
});
