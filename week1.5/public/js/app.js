var app angular.module('tinyurlApp', ['ngRoute', 'ngResource']);

// .config to config the router
app.config(function ($routeProvider){
    $routeProvider
        .when('/', { // root directory: /#/
            templateUrl: "./public/views/home.html", // embed this page
            controller: "homeController" // using this controller/action
        });
       .when('.urls/:shortUrl', {
            templateUrl: "./public/views/url.html",
            controller: "urlController"
        });
});