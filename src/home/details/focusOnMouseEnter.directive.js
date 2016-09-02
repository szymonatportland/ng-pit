var focusOnMouseEnterDirectiveFactory = ($timeout) => {
    return (scope, element, attr) => {
        element.on('mouseenter', (event) => {
            event.preventDefault();

            scope.focusTask = $timeout(() => {
                console.log(`highlighting ${scope.$apply(attr.ssFocusOnMouseEnter)}`);
            }, 400);
        });
    };
};

focusOnMouseEnterDirectiveFactory.$inject = ['$timeout'];

export default focusOnMouseEnterDirectiveFactory;
