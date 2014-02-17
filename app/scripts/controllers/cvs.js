'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('CVSController',
    ['$scope', 'CV', function ($scope, CV) {

        $scope.status;
        $scope.cvs;

        getCVS();

        function getCVS() {
            CV.getCVS()
                .success(function (cvs) {
                    $scope.cvs = cvs;
                })
                .error(function (error) {
                    $scope.status = error.message;
                });
        }
    }]);