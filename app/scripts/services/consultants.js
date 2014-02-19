'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.factory('ConsultantService',
    ['$http',
        function ($http) {

            var urlBase = 'http://10.211.55.6/restsvc01/consultants';
            var factory = {};

            factory.getConsultants = function () {
                return $http.get(urlBase);
            }

            factory.getConsultant = function (id) {
                return $http.get(urlBase + '/' + id);
            }

            factory.insertConsultant = function (consultant) {
                $http.post(urlBase, consultant);
            }

            factory.updateConsultant = function (consultant) {
                $http.put(urlBase, consultant.id, consultant);
            }

            factory.deleteConsultant = function (id) {
                $http.delete(urlBase + '/' + id);
            }

            return factory;
        }]);