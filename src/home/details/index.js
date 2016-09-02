import angular from 'angular';
import uirouter from 'angular-ui-router';

import detailsDirectiveFactory from './details.directive.js';
import focusOnMouseEnterDirectiveFactory from './focusOnMouseEnter.directive.js';
import defocusOnMouseLeaveDirectiveFactory from './defocusOnMouseLeave.directive.js';
import chartLinkDirectiveFactory from './chartLinkDirective.js';

import DetailsController from './details.controller.js';
import DetailsService from './details.service.js';

import detailsRoutesConfigurator from './details.routes.js'

var dependencies = [uirouter];

export default angular.module('encompass.details', dependencies)
    .config(detailsRoutesConfigurator)
    .service('detailsService', DetailsService)
    .directive('ssDetails', detailsDirectiveFactory)
    .directive('ssChartLink', chartLinkDirectiveFactory)
    // .directive('ssFocusOnMouseEnter', focusOnMouseEnterDirectiveFactory)
    // .directive('ssDefocusOnMouseLeave', defocusOnMouseLeaveDirectiveFactory)
    .controller('DetailsController', DetailsController)
    .name;
