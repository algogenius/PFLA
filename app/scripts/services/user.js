'use strict';

var app = angular.module('parimeoFreelancerAppApp');

app.factory('UserService',
    [function () {
        return {
            isLogged: false,
            userName: ''
        };
    }]);