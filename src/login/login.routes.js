var loginRoutesConfigurator = ($stateProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<ss-login layout="column"layout-align="center center" flex></ss-login>'
    });
};

loginRoutesConfigurator.$inject = ['$stateProvider'];

export default loginRoutesConfigurator;
