class LoginController {
    constructor($state) {
      this.titleTranslationKey = 'login.title'
        this.$state = $state;
    }

    login() {
        this.$state.go('home');
    }
}

LoginController.$inject = ['$state'];

export default LoginController;
