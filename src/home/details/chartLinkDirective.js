var chartLinkDirectiveFactory = ($timeout) => {
    return {
        restrict: 'E',
        transclude: true,
        template: '<a href><ng-transclude></ng-transclude></a>',
        scope: {
            ssFocusOnMouseEnter: '@',
            ssDefocusOnMouseLeave: '@',
            ssSelectOnClick: '@'
        },
        link: (scope, element, attrs) => {
            let focusTask;

            if ('ssFocusOnMouseEnter' in attrs && attrs['ssFocusOnMouseEnter'] !== undefined) {
                element.on('mouseenter', (event) => {
                    event.preventDefault();
                    focusTask = $timeout(() => {
                        console.log(`highlighting ${scope.ssFocusOnMouseEnter}`);
                        focusTask = undefined;
                    }, 400);
                });
            }

            if ('ssDefocusOnMouseLeave' in attrs && attrs['ssDefocusOnMouseLeave'] !== undefined) {
                element.on('mouseleave', (event) => {
                    event.preventDefault();
                    let message = 'De-focusing';

                    if (focusTask) {
                        $timeout.cancel(focusTask);
                        message += ' previous focus task cancelled';
                    }

                    console.log(message);
                })
            }

            if ('ssSelectOnClick' in attrs && attrs['ssSelectOnClick'] !== undefined) {
                element.on('click', (event) => {
                    event.preventDefault();
                    console.log(`selecting ${scope.ssSelectOnClick}`);
                })
            }
        }
    }
};

chartLinkDirectiveFactory.$inject = ['$timeout'];

export default chartLinkDirectiveFactory;
