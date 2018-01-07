import angular from 'angular';
import uiRouter from 'angular-ui-router';
import users-tableComponent from './users-table.component';

let users-tableModule = angular.module('users-table', [
  uiRouter
])

.component('users-table', users-tableComponent)

.name;

export default users-tableModule;
