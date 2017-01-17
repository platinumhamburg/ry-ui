'use strict';

angular.module('app.house').controller('HouseManagementController', function ($scope, houseList) {
    $scope.houses = houseList.data;

    $scope.tableOptions =  {
        "data": $scope.houses.data,
//            "bDestroy": true,
        "iDisplayLength": 15,
        columns: [
            {data: "orderId"},
            {data: "customerId"},
            {data: "purchase"},
            {data: "delivery"},
            {data: "basePrice"},
            {data: "postalZip"},
            {data: "status"}
        ],
        "order": [[1, 'asc']]
    }

});