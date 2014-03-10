'use strict';

var app = angular.module('parimeoFreelancerAppApp',
    [ // module dependencies
        'ngCookies',
        'ngSanitize',
        'ngRoute',
        'ngResource',
        'xeditable'
    ]);

app.config(
    ['$routeProvider',
        function ($routeProvider) {
            $routeProvider
                .when('/', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
                .when('/home', {templateUrl: 'views/main.html', controller: 'MainCtrl'})
                .when('/contact', {templateUrl: 'views/contact.html', controller: 'MainCtrl'})
                .when('/imprint', {templateUrl: 'views/imprint.html', controller: 'MainCtrl'})
                .when('/projects', {templateUrl: 'views/projects.html', controller: 'MainCtrl'})
                .when('/myprofile', {templateUrl: 'views/myprofile.html', controller: 'MainCtrl'})

                .when('/consultants', {templateUrl: 'views/consultants.html', controller: 'ConsultantsController'})
                .when('/consultants/:ConsultantId', {templateUrl: 'views/consultant.html', controller: 'ConsultantController'})

                .otherwise({redirectTo: '/'});
        }]);
