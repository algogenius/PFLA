'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('ConsultantsController',
    ['$scope', 'ConsultantService',
        function ($scope, ConsultantService) {

            $scope.deleteConsultant = function (consultant) {
                // TODO CHanf: Modaler Bestätigungsdialog
                ConsultantService.delete({ConsultantId: consultant.id}).$promise.then(function () {
                    $scope.consultants = ConsultantService.query();
                });
            }

            $scope.consultants = ConsultantService.query();
        }]);

app.controller('ConsultantController',
    ['$scope', '$routeParams', 'ConsultantService', 'ConsultantCVService',
        function ($scope, $routeParams, ConsultantService, ConsultantCVService) {

            $scope.task = $routeParams.Task;

            $scope.isEditing = function () {
                return ($scope.task === 'add' || $scope.task === 'edit');
            }

            $scope.editForm = function () {
                $scope.task = 'edit';
                $scope.formConsultant.$show();
                // TODO CHanf: Im Formular fehlen die Daten des Beraters? Warum klappt das nur, wenn man im View-Mode startet?
            }

            $scope.cancelForm = function () {
                $scope.formConsultant.$cancel();
            }

            $scope.persistConsultant = function (data) {
                if ($scope.task === 'add') {
                    ConsultantService.add(data);
                } else if ($scope.task === 'edit') {
                    ConsultantService.save(data);
                }
                $scope.task = 'view';
            }

            if ($scope.task === 'add') {
                $scope.consultants = {};
                $scope.consultant = {
                    'fullname': '',
                    'start': '',
                    'locations': '',
                    'keyskills': '',
                    'address': '',
                    'address_billing': '',
                    'shortdescription': '',
                    'email': '',
                    'mobile': '',
                    'phone': '',
                    'fax': ''
                };
            } else {
                $scope.consultants = ConsultantService.get(
                    {},
                    {ConsultantId: $routeParams.ConsultantId},
                    function () {
                        // ermittle den ersten (und einzigen) Berater aus dem JSON Array
                        $scope.consultant = $scope.consultants[0];
                        $scope.cvs = ConsultantCVService.get({}, {ConsultantId: $scope.consultant.id});
                    });
            }
        }]);