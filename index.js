var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "index.html"
    })
    .when("/home", {
        templateUrl : "home/home.html"
    })
    .when("/projects", {
        templateUrl : "projects.html"
    })
    .when("/contact", {
        templateUrl : "contact.html"
    });
});