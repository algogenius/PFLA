'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('ConsultantsController',
    ['$scope', 'ConsultantService',
        function ($scope, ConsultantService) {

            $scope.status;
            $scope.consultants;

            getConsultants();

            function getConsultants() {
                ConsultantService.getConsultants()
                    .success(function (result) {
                        $scope.consultants = result;
                    })
                    .error(function (error) {
                        $scope.status = error.message;
                    });
            }
        }]);

app.controller('ConsultantController',
    ['$scope', '$routeParams', 'ConsultantService',
        function ($scope, $routeParams, ConsultantService) {

            $scope.status;
            $scope.consultant;

            getConsultant($routeParams.id);

            function getConsultant(id) {
                ConsultantService.getConsultant(id)
                    .success(function (result) {
                        $scope.consultant = result;
                    })
                    .error(function (error) {
                        $scope.status = error.message;
                    });
            }
        }]);
