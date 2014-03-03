'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.factory('ConsultantService',
    ['$resource',
        function ($resource) {
            return $resource(
                'http://10.211.55.6/restsvc01/consultants/:ConsultantId',
                {ConsultantId: '@Id'},
                { 'get': {
                    method: 'GET',
                    isArray: true,
                    headers: {
                        'Accept': 'application/json'
                    }},
                    'save': {
                        method: 'POST'},
                    'query': {
                        method: 'GET',
                        isArray: true,
                        headers: {
                            'Accept': 'application/json'
                        }},
                    'remove': {
                        method: 'DELETE'},
                    'delete': {
                        method: 'DELETE'}
                });
        }]);