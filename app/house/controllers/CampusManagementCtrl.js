'use strict';

angular.module('app.house').controller('CampusManagementController', function ($compile, $scope, $http, $q, DTOptionsBuilder, DTColumnBuilder) {
    var vm = this;
    vm.selected = {};
    vm.selectAll = false;
    vm.toggleAll = toggleAll;
    vm.toggleOne = toggleOne;

    var titleHtml = '<input type="checkbox" ng-model="$scope.selectAll" ng-click="$scope.toggleAll($scope.selectAll, $scope.selected)">';

    //表格相关
    $scope.standardOptions = DTOptionsBuilder
        .fromSource('/api/houses/campusList2.json')
        .withOption('createdRow', function(row, data, dataIndex) {
            // Recompiling so we can bind Angular directive to the DT
            $compile(angular.element(row).contents())($scope);
        })
        .withOption('headerCallback', function(header) {
            if (!vm.headerCompiled) {
                // Use this headerCompiled field to only compile header once
                vm.headerCompiled = true;
                $compile(angular.element(header).contents())($scope);
            }
        })
        .withLanguage({
            "sEmptyTable":     "没有查询到数据",
            "sInfo":           "显示从 _START_ 至 _END_ ，总计 _TOTAL_ 项数据",
            "sInfoEmpty":      "显示从 0 至 0 总计 0 项数据",
            "sInfoFiltered":   "(从 _MAX_ 项数据中过滤)",
            "sInfoPostFix":    "",
            "sInfoThousands":  ",",
            "sLengthMenu":     "显示 _MENU_ 项数据",
            "sLoadingRecords": "载入中...",
            "sProcessing":     "处理中...",
            "sSearch":         "搜索：",
            "sZeroRecords":    "没有查询到匹配的数据",
            "oPaginate": {
                "sFirst":    "首页",
                "sLast":     "末页",
                "sNext":     "下一页",
                "sPrevious": "上一页"
            },
            "oAria": {
                "sSortAscending":  ": activate to sort column ascending",
                "sSortDescending": ": activate to sort column descending"
            }
        })
        .withDOM(/*"<'dt-toolbar'r>" + */
            "t" +
            "<'dt-toolbar-footer'<'col-sm-3 col-xs-12 hidden-xs'f><'col-sm-3 col-xs-12 hidden-xs'l><'col-sm-3 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-3'p>>")
        .withBootstrap()
        .withBootstrapOptions({
            TableTools: {
                classes: {
                    container: 'btn-group',
                    buttons: {
                        normal: 'btn btn-danger'
                    }
                }
            },
            ColVis: {
                classes: {
                    masterButton: 'btn btn-primary'
                }
            }
        })
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
        ]);

    $scope.standardColumns = [
        DTColumnBuilder.newColumn(null).withTitle(titleHtml).notSortable()
            .renderWith(function(data, type, full, meta) {
                vm.selected[full.id] = false;
                return '<input type="checkbox" ng-model="$scope.selected[' + data.id + ']" ng-click="$scope.toggleOne($scope.selected)">';
            }),
        DTColumnBuilder.newColumn('id').withTitle('校区编号').withClass('text-danger'),
        DTColumnBuilder.newColumn('name').withTitle('校区名称'),
        DTColumnBuilder.newColumn('address').withTitle('地址'),
        DTColumnBuilder.newColumn('acquisitionWay').withTitle('取得方式'),
        DTColumnBuilder.newColumn('totalArea').withTitle('总面积')
    ];


    function toggleAll (selectAll, selectedItems) {
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                selectedItems[id] = selectAll;
            }
        }
    }
    function toggleOne (selectedItems) {
        for (var id in selectedItems) {
            if (selectedItems.hasOwnProperty(id)) {
                if(!selectedItems[id]) {
                    vm.selectAll = false;
                    return;
                }
            }
        }
        vm.selectAll = true;
    }
});