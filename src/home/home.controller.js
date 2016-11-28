class HomeController {
    constructor() {

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

    doSomething() {
        console.log('BANG!!!')
    }
}

HomeController.$inject = [];

export default HomeController;
