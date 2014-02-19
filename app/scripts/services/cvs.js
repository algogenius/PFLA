'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.factory('CVService',
    ['$http',
        function ($http) {

            var urlBase = 'http://10.211.55.6/restsvc01/cvs';
            var factory = {};

            factory.getCVS = function () {
                return $http.get(urlBase);
            };

            factory.getCV = function (id) {
                return $http.get(urlBase + '/' + id);
            };

            factory.insertCV = function (cv) {
                $http.post(urlBase, cv);
            };

            factory.updateCV = function (cv) {
                $http.put(urlBase, cv.id, cv);
            };

            factory.deleteCV = function (id) {
                $http.delete(urlBase + '/' + id);
            };

            return factory;
        }]);