var chartLinkDirectiveFactory = () => {
    return {
        restrict: 'E',
        transclude: true,
        template: '<a href><ng-transclude></ng-transclude></a>',
        scope: {}
    }
};

chartLinkDirectiveFactory.$inject = [];

export default chartLinkDirectiveFactory;
