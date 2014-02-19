'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('CVSController',
    ['$scope', 'CVService',
        function ($scope, CVService) {

        $scope.status;
        $scope.cvs;

        getCVS();

        function getCVS() {
            CVService.getCVS()
                .success(function (result) {
                    $scope.cvs = result;
                })
                .error(function (error) {
                    $scope.status = error.message;
                });
        }
    }]);