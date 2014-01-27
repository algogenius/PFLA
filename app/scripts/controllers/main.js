'use strict';

angular.module('parimeoFreelancerAppApp')
    .controller('MainCtrl',
        ['$scope',
            function ($scope) {
                $scope.news = [
                    'Start der Plattform "PARIMEO Freelancer"',
                    'Weihnachten dieses Jahr wieder am 24.12.',
                    'Doris unterstütz uns im Anforderungsmanangement',
                    'Alex ist agiler Coach und (Multi-)Projektmanager'
                ];
            }]);
