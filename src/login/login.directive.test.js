import loginDirectiveFactory from './login.directive.js';

describe('encLogin Directive', ()=> {

    describe('directive definition object', ()=> {
        let ddo;

        beforeEach(()=> {
          ddo = loginDirectiveFactory();
        });

        it('restricts directive to elements', ()=> {
            expect(ddo.restrict).to.be.equal('E');
        });

        it('binds directive properties to the controller', ()=> {
            expect(ddo.bindToController).to.be.true;
        });

        it('defines controller reference variable as loginCtrl', ()=> {
            expect(ddo.controllerAs).to.be.equal('loginCtrl');
        });
    });
});
