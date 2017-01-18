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
    .state('app.rentalApplication.myRental', {
        url: '/myRental',
        data: {
            title: '我的租产'
        },
        views: {
            "content@app": {
                templateUrl: 'app/rental-application/views/myRental.html',
                controller: 'MyRentalController',
                resolve: {
                        projects: function($http, APP_CONFIG){
                            return $http.get(APP_CONFIG.apiRootUrl + '/myRental/myRental-data.json')
                        }
                }
            }
        },
        resolve: {
                scripts: function(lazyScript){
                    return lazyScript.register([
                        'build/vendor.datatables.js'
                    ]);
                }
        }
    })
    .state('app.rentalApplication.rentalPayment', {
        url: '/rentalPayment',
        data: {
            title: '资费缴纳'
        },
        views: {
            "content@app": {
                templateUrl: 'app/rental-application/views/rentalPayment.html',
                controller: 'RentalPaymentController'
            }
        }
    })
});
