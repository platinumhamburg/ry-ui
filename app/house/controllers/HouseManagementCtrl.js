'use strict';

angular.module('app.house').controller('HouseManagementController', function ($scope, houseList) {
    $scope.houses = houseList.data;

    $scope.tableOptions =  {
        "data": $scope.houses.data,
//            "bDestroy": true,
        "iDisplayLength": 15,
        columns: [
            {data: "campusId"},
            {data: "name"},
            {data: "address"},
            {data: "acquisitionWay"},
            {data: "totalArea"},
            {data: "status"}
        ],
        "order": [[1, 'asc']]
    }

});