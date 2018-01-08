import angular from 'angular';
import usersTableComponent from './users-table.component';

let usersTableModule = angular.module('users-table', [
])

.component('usersTableComponent', usersTableComponent)

.name;

export default usersTableModule;
