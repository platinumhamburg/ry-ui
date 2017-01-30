angular.module('app.house', ['ui.router', 'datatables', 'datatables.buttons'])
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
                    controller: 'HouseGlobalController',
                }   
            }
        })
        .state('app.house.management', {
            url: '/house/management',
            data: {
                title: '房屋总览'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/house/views/houseManagement.html',
                    controller: 'HouseManagementController',
                    resolve: {
                        houseList: function($http, APP_CONFIG){
                            return $http.get(APP_CONFIG.apiRootUrl + '/houses/campusList.json')
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
        .state('app.house.campusManagement', {
            url: '/house/campusManagement',
            data: {
                title: '房屋总览'
            },
            views: {
                "content@app": {
                    templateUrl: 'app/house/views/campusManagement.html',
                    controller: 'CampusManagementController'
                }
            }
        })
});
