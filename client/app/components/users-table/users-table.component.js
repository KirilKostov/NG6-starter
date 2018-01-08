import template from './users-table.html';
import controller from './users-table.controller';
import './users-table.scss';

let usersTableComponent = {
  bindings: {
      users: '<',
      onNewUserAdded: '&',
      onUserDeleted: '&',
      onUserEdited: '&',
  },
  template,
  controller
};

export default usersTableComponent;
