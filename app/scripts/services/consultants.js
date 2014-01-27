'use strict';

angular.module('parimeoFreelancerAppApp')
    .factory('Consultant',
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