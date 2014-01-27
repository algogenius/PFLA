'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.controller('ConsultantsController',
    ['$scope', 'Consultant',
        function ($scope, Consultant) {
            $scope.consultants = Consultant.query();
        }]);

app.controller('ConsultantController',
    ['$scope', '$routeParams', 'Consultant',
        function ($scope, $routeParams, Consultant) {
            $scope.consultant = Consultant.get({consultantId: $routeParams.consultantId});
        }]);
