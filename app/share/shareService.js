'use strict';

angular.module('bt.share')
  .service('share', ['$window', function($window) {
    var TWITTER_URL_TPL = 'http://twitter.com/intent/tweet?text={0}&url={1}',
      FACEBOOK_URL_TPL = 'http://www.facebook.com/sharer.php?s=100&' +
        'p[title]=title&p[url]={1}&' +
        'p[summary]={0}&' +
        'p[images][0]=' +
        'http://upload.wikimedia.org/wikipedia/en/thumb/e/e8/WC-2014-Brasil.svg/719px-WC-2014-Brasil.svg.png';

    function replaceTextAndUrl(tpl, text, url) {
      return tpl.replace('{0}', encodeURIComponent(text))
        .replace('{1}', encodeURIComponent(url));
    }

    this.shareOnTwitter = function(text, url) {
      url = replaceTextAndUrl(TWITTER_URL_TPL, text, url);
      $window.open(url, null, 'height=440, width=720');
    };

    // TODO: add title and images params
    this.shareOnFacebook = function(text, url) {
      url = replaceTextAndUrl(FACEBOOK_URL_TPL, text, url);
      $window.open(url, null, 'height=440, width=720');
    };
  }]);
