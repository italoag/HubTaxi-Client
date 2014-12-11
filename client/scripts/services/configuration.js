'use strict';

angular.module('itaxiApp')
    .factory('config', ['$rootScope', '$timeout', function ($rootScope, $timeout) {

        var config = {
            deviceId: (window.device) ? device.uuid : 'vsoft.deverlopment12333',
            defaultPass: 'defaultPassword',
            name: 'Taxi Go',
            apiHost: 'http://localhost:6868',
            mediaHost: 'http://localhost:6868',
            isLogin: true
        };

        return config;

    }]);