(function() {
    'use strict';

    angular
        .module('RestaApp')
        .config(routeConfig);

    /* @ngInject */
    function routeConfig($stateProvider, $urlRouterProvider) {

    	$urlRouterProvider.otherwise("/home");

    	$stateProvider
	    .state('home', {
	      url: "/home",
	      templateUrl: "app/component/menu/menu.html",
	      controller: 'MenuController'
	    });

    }
})();