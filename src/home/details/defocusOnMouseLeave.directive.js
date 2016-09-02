var defocusOnMouseLeaveDirectiveFactory = ($timeout) => {
    return (scope, element) => {
        element.on('mouseleave', (event) => {
            event.preventDefault();
            let message = 'De-focusing';

            if (scope.focusTask) {
                $timeout.cancel(scope.focusTask);
                message += ' previous focus task cancelled';
            }

            console.log(message);
        })
    };
};

defocusOnMouseLeaveDirectiveFactory.$inject = ['$timeout'];

export default defocusOnMouseLeaveDirectiveFactory;
