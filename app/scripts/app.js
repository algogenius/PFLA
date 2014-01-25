'use strict';

angular.module('parimeoFreelancerAppApp', ['ngCookies', 'ngSanitize', 'ngRoute'])
    .config(
        ['$routeProvider',
            function ($routeProvider) {
                $routeProvider
                    .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
                    .when('/home', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
                    .when('/contact', {templateUrl: 'views/contact.html', controller: 'MainCtrl'})
                    .when('/imprint', {templateUrl: 'views/imprint.html', controller: 'MainCtrl'})
                    .when('/projects', {templateUrl: 'views/projects.html', controller: 'MainCtrl'})
                    .when('/consultants', {templateUrl: 'views/consultants.html', controller: 'MainCtrl'})
                    .when('/myprofile', {templateUrl: 'views/myprofile.html', controller: 'MainCtrl'})
                    .otherwise({redirectTo: '/'});
            }]);
