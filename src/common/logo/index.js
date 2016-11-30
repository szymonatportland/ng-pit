import angular from 'angular';

import logoDirectiveFactory from './logo.directive.js';
import LogoController from './logo.controller';


var dependencies = [];

export default angular.module('ss.logo', dependencies)
    .directive('ssLogo', logoDirectiveFactory)
    .controller('LogoController', LogoController)
    .name;
