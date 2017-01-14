"use strict";


angular.module('app.house', ['ui.router','uiGmapgoogle-maps'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.house', {
        abstract: true,
            data: {
                title: 'UI Elements'
            }
        })
        .state('app.house.global', {
            url: '/house/global',
            data: {
                title: '房屋总览'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/house/views/houseGlobal.html',
                    controller: 'HouseGlobalController'
                }
            }
        })
});
