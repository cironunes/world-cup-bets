'use strict';

angular.module('bt.games')
  .factory('gamesLoader', function($http) {
    var promise;

    function getGames() {
      promise = $http.get('http://worldcup.sfg.io/matches/today')
        .then(function(response) {
          return response.data;
        });
      return promise;
    }

    return {
      getGames: getGames
    };
  });
