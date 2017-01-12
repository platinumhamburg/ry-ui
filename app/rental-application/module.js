"use strict";


angular.module('app.rentalApplication', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
        .state('app.rentalApplication', {
            url: '/rentalApplication',
            data: {
                title: '租房申请'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/rental-application/views/rentalApplication.html',
                    controller: 'RentalApplicationController'
                }
            }
        })
});
