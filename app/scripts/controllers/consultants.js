'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('ConsultantsController',
    ['$scope', '$log', 'ConsultantService',
        function ($scope, $log, ConsultantService) {
            $scope.consultants = ConsultantService.query(
                function () {
                    $log.info('Anfrage an REST Service erfolgreich!');
                },
                function (error) {
                    $log.info('Ein Fehler ist aufgetreten');
                    console.dir(error);
                });
        }]);

app.controller('ConsultantController',
    ['$scope', '$routeParams', '$log', 'ConsultantService',
        function ($scope, $routeParams, $log, ConsultantService) {
            $scope.consultant = ConsultantService.get(
                {},
                {Id: $routeParams.Id},
                function () {
                    $log.info('Anfrage an REST Service erfolgreich!');
                },
                function (error) {
                    $log.info('Ein Fehler ist aufgetreten');
                    console.dir(error);
                });
        }]);
