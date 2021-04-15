import './index.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
// import 'file?name=favicon.ico!./favicon.ico';

import {registerApplication, start} from 'single-spa';

import home from './home';
import routesConfigurator from './index.routes.js';

var dependencies = [
    uirouter,
    home
];

angular.module('ssApp', dependencies)
    .config(routesConfigurator);

window.ssNgApp = window.singleSpaAngularjs.default({
    angular: angular,
    mainAngularModule: 'ssApp',
    uiRouter: true,
    preserveGlobal: false
})


registerApplication({
    name: '@enc/ssNgApp',
    app: ssNgApp,
    activeWhen: () => true
})

start();
