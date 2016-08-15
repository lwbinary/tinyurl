var app = angular.module('tinyurlApp');

// $scope belongs to angular core
app.controller('urlController',
    ["$scope", "http", "$routeParams", function($scope, $http, $routeParams){ // order matters!
    $scope.submit = function () {
    $http.get('/api/v1/urls/' + $routeParams.shortUrl)
        .success(function (data) {
            $scope.shortUrl = data.shortUrl;
            $scope.longUrlToShow = 'http://localhost:3000/' + data.shortUrl;
        });

}]);