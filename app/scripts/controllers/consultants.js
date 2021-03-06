'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('ConsultantsController',
    ['$scope', 'ConsultantService',
        function ($scope, ConsultantService) {

            $scope.deleteConsultant = function (consultant) {
                ConsultantService.delete({ConsultantId: consultant.id}).$promise.then(function () {
                    $scope.consultants = ConsultantService.query();
                });
            }

            $scope.consultants = ConsultantService.query();
        }]);

app.controller('ConsultantController',
    ['$scope', '$routeParams', '$filter', 'ConsultantService', 'ConsultantCVService',
        function ($scope, $routeParams, $filter, ConsultantService, ConsultantCVService) {

            $scope.task = $routeParams.Task;

            $scope.editForm = function () {
                $scope.formConsultant.$show();
            }

            $scope.cancelForm = function () {
                $scope.formConsultant.$cancel();
            }

            $scope.persistConsultant = function () {
                if ($scope.task === 'add') {
                    ConsultantService.add($scope.consultant);
                    $scope.task = "edit";
                } else if ($scope.task === 'edit') {
                    ConsultantService.save($scope.consultant);
                }
            }

            if ($scope.task === 'add') {
                $scope.consultants = {};
                $scope.consultant = {
                    'fullname': '',
                    'start': Date.now(),
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
                $scope.$on("$viewContentLoaded", function () {
                    $scope.editForm();
                });
            } else {
                $scope.consultants = ConsultantService.get(
                    {},
                    {ConsultantId: $routeParams.ConsultantId},
                    function () {
                        // ermittle den ersten (und einzigen) Berater aus dem JSON Array
                        $scope.consultant = $scope.consultants[0];

                        $scope.cvs = ConsultantCVService.get({}, {ConsultantId: $scope.consultant.id});

                        if ($scope.task === 'edit') {
                            $scope.editForm();
                        }
                    });
            }
        }]);