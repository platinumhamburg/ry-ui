'use strict';

angular.module('app.house').controller('CampusManagementController', function ($scope, $http, $q, DTOptionsBuilder, DTColumnBuilder) {
    //表格相关
    $scope.standardOptions = DTOptionsBuilder
        .fromSource('/api/houses/campusList2.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-3 col-xs-12 hidden-xs'f><'col-sm-3 col-xs-12 hidden-xs'l><'col-sm-3 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-3'p>>")
        .withButtons([
            {
                extend: 'print',
                text: '<i class="fa fa-print"></i> 打印',
                className: 'btn btn-default',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                extend: 'copy',
                text: '<i class="fa fa-clipboard"></i> 复制',
                className: 'btn btn-default',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                extend: 'excel',
                text: '<i class="fa fa-table"></i> 导出Excel',
                className: 'btn btn-default',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                text: '<i class="fa fa-cube"></i> 其它',
                className: 'btn btn-default pull-right',
                key: '1',
                action: function (e, dt, node, config) {
                    alert('你点击了该按钮！');
                }
            }
        ])
        .withBootstrap();
    $scope.standardColumns = [
        DTColumnBuilder.newColumn('campusId').withClass('text-danger'),
        DTColumnBuilder.newColumn('name'),
        DTColumnBuilder.newColumn('address'),
        DTColumnBuilder.newColumn('acquisitionWay'),
        DTColumnBuilder.newColumn('totalArea')
    ];

});