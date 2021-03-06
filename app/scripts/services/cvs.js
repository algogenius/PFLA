'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.factory('CVService',
    ['$resource',
        function ($resource) {
            return $resource(
                'http://10.211.55.6/pfla-backend/cvs/:CvId',
                {CvId: '@CvId'},
                {'get': {method: 'GET', isArray: true, headers: {'Accept': 'application/json'}},
                    'query': {method: 'GET', isArray: true, headers: {'Accept': 'application/json'}},
                    'save': {method: 'PUT'},
                    'add': {method: 'POST'},
                    'insert': {method: 'POST'},
                    'remove': {method: 'DELETE'},
                    'delete': {method: 'DELETE'}});
        }]);

app.factory('ConsultantCVService',
    ['$resource',
        function ($resource) {
            return $resource(
                'http://10.211.55.6/pfla-backend/consultants/:ConsultantId/cvs/:CvId',
                {ConsultantId: '@ConsultantId', CvId: '@CvId'},
                {'get': {method: 'GET', isArray: true, headers: {'Accept': 'application/json'}},
                    'query': {method: 'GET', isArray: true, headers: {'Accept': 'application/json'}}
// currently not supported
//                    'save': {method: 'PUT'},
//                    'add': {method: 'POST'},
//                    'insert': {method: 'POST'},
//                    'remove': {method: 'DELETE'},
//                    'delete': {method: 'DELETE'}
                });
        }]);