(function() {
    'use strict';

    angular
        .module('RestaApp.component.menu')
        .run(appRun);

     appRun.$inject = ['routehelper'];

    /* @ngInject */
    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/component/menu/menu.html',
                    controller: 'MenuController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();