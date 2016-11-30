import './logo.scss';
import template from './logo.html';
import controller from './logo.controller.js';

var logoDirectiveFactory = ()=>{
    return {
      restrict: 'E',
      template,
      controller,
      replace: true,
      controllerAs: 'logoCtrl',
      bindToController: true
    }
};

export default logoDirectiveFactory;
