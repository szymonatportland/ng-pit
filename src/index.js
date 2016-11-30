import './index.scss';
import './common/common.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import 'file?name=favicon.ico!./favicon.ico';
import ngAria from 'angular-aria';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import ngMessages from 'angular-messages';
import ngMaterial from 'angular-material';

import home from './home';
import header from './header';
import portfolio from './portfolio';
import login from './login';
import commons from './common/application-commons';
import routesConfigurator from './index.routes.js';

var dependencies = [
    uirouter,
    home,
    ngAria,
    ngAnimate,
    ngMessages,
    ngSanitize,
    ngMaterial,
    header,
    portfolio,
    login,
    commons
];

angular.module('ssApp', dependencies)
    .config(routesConfigurator)
    .config(($mdThemingProvider, $mdIconProvider)=> {
        var encBlueMap = $mdThemingProvider.extendPalette('light-blue', {
            'contrastDefaultColor': 'light'
        });
        $mdThemingProvider.definePalette('encBlue', encBlueMap);

        $mdThemingProvider.theme('default')
            .primaryPalette('encBlue')
            .accentPalette('blue-grey')
            .warnPalette('red');
        $mdIconProvider
            .defaultFontSet('material-icons')
            .fontSet('md', 'material-icons')
    });