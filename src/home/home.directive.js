import './home.scss';
import template from './home.html';
import controller from './home.controller.js';

var homeDirectiveFactory = () => {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'homeCtrl',
        bindToController: true
    }
};

export default homeDirectiveFactory;
