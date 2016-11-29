import './header.scss';
import controller from './header.controller';
import template from './header.html';

var headerDirectiveFactory = () => {
    return {
        restrict: 'E',
        template,
        controller,
        controllerAs: 'headerCtrl',
        bindToController: true
    }
};

export default headerDirectiveFactory;
