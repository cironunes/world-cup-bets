'use strict';

angular.module('bets')
  .controller('AppCtrl', function($scope, gamesLoader) {
    gamesLoader.getGames().then(function(data) {
      $scope.games = data;
    });
  });
