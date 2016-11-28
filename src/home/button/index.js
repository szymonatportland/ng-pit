import angular from 'angular';

import buttonTemplateFactory from './button-template.factory';

import buttonDirectiveFactory from './button.directive.js';
import buttonGroupDirectiveFactory from './button-group.directive.js';

var dependencies = [];

export default angular.module('ss.button', dependencies)
    .directive('ssButton', buttonDirectiveFactory)
    .directive('ssButtonGroup', buttonGroupDirectiveFactory)
    .factory('buttonTemplates', buttonTemplateFactory)
    .name;
