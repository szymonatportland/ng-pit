import './login.scss';
import template from './login.html';
import controller from './login.controller.js';

var loginDirectiveFactory = ()=>{
    return {
      restrict: 'E',
      template,
      controller,
      controllerAs: 'loginCtrl',
      bindToController: true
    }
};

export default loginDirectiveFactory;
