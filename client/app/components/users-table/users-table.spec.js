import Users-tableModule from './users-table';
import Users-tableController from './users-table.controller';
import Users-tableComponent from './users-table.component';
import Users-tableTemplate from './users-table.html';

describe('Users-table', () => {
  let $rootScope, makeController;

  beforeEach(window.module(Users-tableModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new Users-tableController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(Users-tableTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
    // component/directive specs
    let component = Users-tableComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(Users-tableTemplate);
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(Users-tableController);
    });
  });
});
