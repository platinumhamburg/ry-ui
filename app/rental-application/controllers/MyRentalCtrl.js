'use strict';

angular.module('app.rentalApplication').controller('MyRentalController', function ($scope, projects) {
	$scope.projects = projects.data;

    $scope.tableOptions =  {
        "data": projects.data.data,
//            "bDestroy": true,
        "iDisplayLength": 15,
        "columns": [
            {
                "class":          'details-control',
                "orderable":      false,
                "data":           null,
                "defaultContent": ''
            },
            { "data": "name" },
            { "data": "est" },
            { "data": "contacts" },
            { "data": "status" },
            { "data": "starts" },
            { "data": "ends" }
        ],
        "order": [[1, 'asc']]
    }
});