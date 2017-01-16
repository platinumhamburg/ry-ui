"use strict";


angular.module('app.rentalApplication', ['ui.router'])
.config(function ($stateProvider) {

    $stateProvider
    .state('app.rentalApplication', {
        abstract: true,
        data: {
            title: 'Rental'
        }
    }) 
    .state('app.rentalApplication.personalInfo', {
        url: '/personalInfo',
        data: {
            title: '个人资料'
        },
        views: {
            "content@app": {
                templateUrl: 'app/rental-application/views/personalInfo.html',
                controller: 'PersonalInfoController'
            }
        }
    })
    .state('app.rentalApplication.houseRental', {
        url: '/houseRental',
        data: {
            title: '租房申请'
        },
        views: {
            "content@app": {
                templateUrl: 'app/rental-application/views/houseRental.html',
                controller: 'RentalApplicationController'
            }
        }
    })
});
