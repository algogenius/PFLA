'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.factory('Consultant',
    ['$resource',
        function ($resource) {
            return $resource('consultants/:consultantId.json',
                {},
                {
                    query: {
                        method: 'GET',
                        params: {consultantId: 'consultants'},
                        isArray: true
                    }
                });
        }]);