'use strict';

angular.module('app.house').controller('HouseGlobalController', function ($scope, $http, $q, SmartMapStyle, uiGmapGoogleMapApi) {
    $scope.demoTree2 = [
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> 武汉大学</span>", "expanded": false, "children": [
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Administrators</span>", "expanded": true, "children": [
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
                {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"}
            ]},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" name=\"checkbox-inline\"><i></i>Michael.Jackson</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Sunny.Ahmed</label> </span>"},
            {"content": "<span> <label class=\"checkbox inline-block\"><input type=\"checkbox\" checked=\"checked\" name=\"checkbox-inline\"><i></i>Jackie.Chan</label> </span>"},
            {"content": "<span><i class=\"fa fa-lg fa-minus-circle\"></i> Child</span>", "expanded": true, "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>",  "children": [
                    {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                        {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                    ]},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Grand Child</span>"},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Grand Child</span>", "children": [
                {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                    {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
                ]},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"fa fa-lg fa-plus-circle\"></i> Great Grand Child</span>", "children": [
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
                {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"}
            ]},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"},
            {"content": "<span><i class=\"icon-leaf\"></i> Great Grand Child</span>"}
        ]},
        {"content": "<span><i class=\"fa fa-lg fa-folder-open\"></i> 党政直属</span>", "children": [
            {"content": "<span><i class=\"icon-leaf\"></i> Child</span>"}
        ]}
    ]

    $scope.styles = SmartMapStyle.styles;

    $scope.setType = function (key) {
        SmartMapStyle.getMapType(key).then(function (type) {
            $scope.map.control.getGMap().mapTypes.set(key, type);
            $scope.map.control.getGMap().setMapTypeId(key);
        });
        $scope.currentType = key;
    };


    $scope.map = {
        center: {latitude: 45, longitude: -73},
        zoom: 8,
        control: {}
    };


    uiGmapGoogleMapApi.then(function (maps) {

        })
        .then(function () {
            return SmartMapStyle.getMapType('colorful')
        }).then(function () {
        $scope.setType('colorful')
    });

});