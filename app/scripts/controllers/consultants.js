'use strict';

angular.module('parimeoFreelancerAppApp')
    .controller('ConsultantsController',
        ['$scope', 'Consultant',
            function ($scope, Consultant) {
                $scope.consultants = Consultant.query();
            }]);
