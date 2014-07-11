'use strict';

var app = angular.module('parimeoFreelancerAppApp',
    [ // module dependencies
        'ngCookies',
        'ngSanitize',
        'ngRoute',
        'ngResource',
        'ui.bootstrap',
        'xeditable'
    ]);

app.config(
    ['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {templateUrl: 'views/main.html', controller: 'MainController'})
                .when('/home', {templateUrl: 'views/main.html', controller: 'MainController'})
                .when('/contact', {templateUrl: 'views/contact.html', controller: 'MainController'})
                .when('/imprint', {templateUrl: 'views/imprint.html', controller: 'MainController'})
                .when('/projects', {templateUrl: 'views/projects.html', controller: 'MainController'})
                .when('/myprofile', {templateUrl: 'views/myprofile.html', controller: 'MainController'})

                .when('/consultants', {templateUrl: 'views/consultants.html', controller: 'ConsultantsController'})
                .when('/consultants/:ConsultantId/:Task', {templateUrl: 'views/consultant.html', controller: 'ConsultantController'})

                .otherwise({redirectTo: '/'});
        }]);


app.controller('AppController',
    ['$rootScope', '$scope', '$route', '$routeParams', '$location' ,
        function ($rootScope, $scope, $route, $routeParams, $location) {

            $scope.$route = $route;
            $scope.$location = $location;
            $scope.$routeParams = $routeParams;

            // $scope.$on("$routeChangeStart", update());
            // $scope.$on("$routeChangeSuccess", update());
            // $scope.$on("$routeChangeError", update());
            // $scope.$on("$routeUpdate", update());
            // $scope.$on("$locationChangeSuccess", update());
            // $scope.$on("$viewContentLoaded", update());
//            function update() {
//                console.log("Event fired!");
//            }
        }]);
