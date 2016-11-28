import './button.scss';

var buttonGroupDirectiveFactory = () => {
    return {
        restrict: 'E',
        template: '<button class="button-group" ng-click="action()">{{label}}</button>',
        replace: true,
        scope: {
            label: '@',
            action: '&'
        }
    }
};

export default buttonGroupDirectiveFactory;
