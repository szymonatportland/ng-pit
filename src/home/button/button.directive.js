import './button.scss';
import template from './button.html';

var buttonDirectiveFactory = () => {
    return {
        restrict: 'E',
        template,
        replace: true,
        scope: {
            label: '@',
            size: '@',
            color: '@',
            type: '@',
            event: '&'
        }
    }
};

export default buttonDirectiveFactory;
