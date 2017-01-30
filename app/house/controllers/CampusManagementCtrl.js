'use strict';

angular.module('app.house').controller('CampusManagementController', function ($scope, $http, $q, DTOptionsBuilder, DTColumnBuilder) {
    //表格相关
    $scope.standardOptions = DTOptionsBuilder
        .fromSource('/api/houses/campusList2.json')
         //Add Bootstrap compatibility
        .withDOM("<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs'l>r>" +
            "t" +
            "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>")
        .withButtons([
            {
                extend: 'print',
                text: '打印',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                extend: 'copy',
                text: '复制',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                extend: 'excel',
                text: '导出Excel',
                exportOptions: {
                    modifier: {
                        page: 'current'
                    }
                }
            },
            {
                text: '其它',
                key: '1',
                action: function (e, dt, node, config) {
                    alert('你点击了该按钮！');
                }
            }
        ])
        .withBootstrap()
        ;
    $scope.standardColumns = [
        DTColumnBuilder.newColumn('campusId').withClass('text-danger'),
        DTColumnBuilder.newColumn('name'),
        DTColumnBuilder.newColumn('address'),
        DTColumnBuilder.newColumn('acquisitionWay'),
        DTColumnBuilder.newColumn('totalArea')
    ];

});