import angular from 'angular';
import usersTableModule from './users-table/users-table';

let componentModule = angular.module('app.components', [
  usersTableModule
])

.name;

export default componentModule;
