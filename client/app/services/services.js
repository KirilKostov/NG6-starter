import angular from 'angular';
import UserService from './user.service';

let serviceModule = angular.module('user-service', [
])

.service('UserService', UserService)
.name;

export default serviceModule;
