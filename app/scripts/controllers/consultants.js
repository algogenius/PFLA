'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('ConsultantsController',
    ['$scope', '$log', 'ConsultantService',
        function ($scope, $log, ConsultantService) {
            $scope.consultants = ConsultantService.query(
                function () {
                },
                function (error) {
                    $log.info('Bei der Abfrage der Berater ist ein Fehler aufgetreten!');
                });
        }]);

app.controller('ConsultantController',
    ['$scope', '$routeParams', '$log', 'ConsultantService',
        function ($scope, $routeParams, $log, ConsultantService) {
            $scope.consultants = ConsultantService.get(
                {},
                {Id: $routeParams.Id},
                function () {
                    // ermittle den ersten (und einzigen) Berater aus dem JSON Array
                    $scope.consultant = $scope.consultants[0];
                },
                function (error) {
                    $log.info('Bei der Abfrage des Beraters ist ein Fehler aufgetreten!');
                });

            $scope.saveConsultant = function () {
                $scope.consultant.$save();
            }
        }]);
