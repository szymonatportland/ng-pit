import './index.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'file?name=favicon.ico!./favicon.ico';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

import home from './home';
import routesConfigurator from './index.routes.js';

var dependencies = [
    uirouter,
    home,
    ngAria,
    ngAnimate,
    ngMessages,
    ngSanitize,
    ngMaterial
];

angular.module('ssApp', dependencies)
    .config(routesConfigurator);