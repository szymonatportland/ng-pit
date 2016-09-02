import './details.scss';
import template from './details.html';
import controller from './details.controller.js';

var detailsDirectiveFactory = () => {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'detailsCtrl',
        bindToController: true,
        scope: {
            selected: '='
        }
    }
};

export default detailsDirectiveFactory;
