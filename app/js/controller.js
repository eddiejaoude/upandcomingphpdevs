var phpdevsApp = angular.module('phpdevsApp', []);

phpdevsApp.controller('PhpdevsCtrl', function ($scope, $http) {
  $http.get('/data.json').success(function(data) {
    $scope.people = data;
  });
});
