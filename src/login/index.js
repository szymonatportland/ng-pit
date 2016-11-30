import angular from 'angular';
import uirouter from 'angular-ui-router';

import loginDirectiveFactory from './login.directive.js';
import LoginController from './login.controller.js';
import LoginService from './login.service.js';

import loginRoutesConfigurator from './login.routes.js'

var dependencies = [,
    uirouter
];

export default angular.module('ss.login', dependencies)
    .config(loginRoutesConfigurator)
    .directive('ssLogin', loginDirectiveFactory)
    .controller('LoginController', LoginController)
    .service('LoginService', LoginService)
    .name;
