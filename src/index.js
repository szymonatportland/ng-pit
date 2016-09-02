import './index.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'file?name=favicon.ico!./favicon.ico';

import home from './home';
import routesConfigurator from './index.routes.js';

var dependencies = [
    uirouter,
    home
];

angular.module('ssApp', dependencies)
    .config(routesConfigurator);