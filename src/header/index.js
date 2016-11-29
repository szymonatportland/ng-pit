import angular from 'angular';

import headerDirectiveFactory from './header.directive.js';
import HeaderController from './header.controller';



var dependencies = [];

export default angular.module('ss.header', dependencies)
    .directive('ssHeader', headerDirectiveFactory)
    .controller('HeaderController', HeaderController)
    .name;
