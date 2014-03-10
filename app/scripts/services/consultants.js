'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.factory('ConsultantService',
    ['$resource',
        function ($resource) {
            return $resource(
                'http://10.211.55.6/restsvc01/consultants/:ConsultantId',
                {ConsultantId: '@ConsultantId'},
                { 'get': {method: 'GET', isArray: true, headers: {'Accept': 'application/json'}},
                    'query': {method: 'GET', isArray: true, headers: {'Accept': 'application/json'}},
                    'save': { method: 'PUT'},
                    'add': { method: 'POST'},
                    'insert': { method: 'POST'},
                    'remove': { method: 'DELETE'},
                    'delete': { method: 'DELETE'}
                });
        }]);