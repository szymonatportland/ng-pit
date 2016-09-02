var detailsRoutesConfigurator = ($stateProvider) => {
    $stateProvider
      .state('details', {
        url: '/details',
        template: '<enc-details></enc-details>'
    });
};

detailsRoutesConfigurator.$inject = ['$stateProvider'];

export default detailsRoutesConfigurator;
