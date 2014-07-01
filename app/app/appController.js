'use strict';

angular.module('bets')
  .controller('AppCtrl', function($scope, $filter, gamesLoader) {
    var validBetFilter = $filter('validBet');

    gamesLoader.getGames().then(function(data) {
      $scope.games = data;
    });

    $scope.hasValidBets = function(games) {
      var validity = validBetFilter(games);

      return validity ? validity.length > 0 : false;
    };
  });
