import angular from 'angular';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import Services from './services/services';

angular.module('app', [
    Components,
    Services
  ])

  .component('app', AppComponent);
