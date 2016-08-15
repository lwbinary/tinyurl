var app = angular.module('tinyurlApp');

// $scope belongs to angular core
app.controller('homeController',
    ["$scope", "http", "$location" function($scope, $http, $location){
    $scope.submit = function () {
        // use ngResource for server data communications
        // POST the URL with JSON body
        $http.post('/api/va/urls', {
            longUrl: $scope.longUrl
        })
        .success(function (data) { // callback: call the fn() when success
            $location.path('/urls/' + data.shortUrl); // data is what returned

        });
    }
}]);