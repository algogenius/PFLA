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
                console.log("edit form");
                $scope.formConsultant.$show();
            }

            $scope.cancelForm = function () {
                console.log("cancel form");
                $scope.formConsultant.$cancel();
            }

            $scope.persistConsultant = function () {
                if ($scope.task === 'add') {
                    console.log("add consultant");
                    ConsultantService.add($scope.consultant);
                } else if ($scope.task === 'edit') {
                    console.log("save consultant");
                    ConsultantService.save($scope.consultant);
                }
            }

            if ($scope.task === 'add') {
                // TODO Verbesserung!!! Siehe Button, der diese Methode aufruft.
                /**
                 if (typeof flug.Datum == "string") {
                   this.Datum = moment(flug.Datum).toDate();
                 } else {
                   this.Datum = flug.Datum;
                 }
                 */
                $scope.consultants = {};
                $scope.consultant = {
                    'fullname': '',
                    'start': new Date(),
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
                        console.log("fetching consultant");
                        // ermittle den ersten (und einzigen) Berater aus dem JSON Array
                        $scope.consultant = $scope.consultants[0];

                        $scope.cvs = ConsultantCVService.get({}, {ConsultantId: $scope.consultant.id});

                        if ($scope.task === 'edit') {
                            $scope.editForm();
                        }
                    });
            }
        }]);