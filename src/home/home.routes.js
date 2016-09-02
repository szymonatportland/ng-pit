var homeRoutesConfigurator = ($stateProvider) => {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<ss-home></ss-home>'
        });
};

homeRoutesConfigurator.$inject = ['$stateProvider'];

export default homeRoutesConfigurator;
