class HomeController {
    constructor($http, $scope, $cookies, $httpParamSerializerJQLike) {

        this.$http = $http;
        this.$scope = $scope;
        this.$cookies = $cookies;
        this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;

        this.apiUrl = 'http://sitepoint-wp-rest-api.test/wp-json/wp/v2';

        this.getPosts();

        this.buttonGroup = [
            {
                labelTranslationKey: "button one",
                action: console.log('ONE')
            },
            {
                labelTranslationKey: "button two",
                action: console.log('TWO')
            },
            {
                labelTranslationKey: "button three",
                action: console.log('THREE')
            }
        ];
    }

    getPosts() {
        return this.$http.get((this.apiUrl + '/posts'))
            .then(response =>{
               this.posts = response.data;
                console.log(response.data);
                return this.posts;
            })
            .catch(err =>{
                console.log('nothing here!');
                return this.error = 'I\'m a failure';
            })
    }

    doSomething() {
        console.log('BANG!!!')
    }
}

HomeController.$inject = ['$http', '$scope', '$httpParamSerializerJQLike'];

export default HomeController;
