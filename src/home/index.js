import angular from 'angular';
import uirouter from 'angular-ui-router';

import homeRoutesConfigurator from './home.routes.js'
import homeDirectiveFactory from './home.directive.js';
import HomeController from './home.controller.js';
import HomeService from './home.service.js';

import details from './details/index.js';

var dependencies = [
    uirouter,
    details
];

export default angular.module('ss.home', dependencies)
    .config(homeRoutesConfigurator)
    .directive('ssHome', homeDirectiveFactory)
    .controller('HomeController', HomeController)
    .service('HomeService', HomeService)
    .name;
