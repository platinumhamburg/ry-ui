'use strict';

angular.module('app.rentalApplication').controller('RentalApplicationController', function ($scope) {
	$scope.smartModEg1 =  function () {
		$.SmartMessageBox({
			title: "个人资格审批",
			content: "是否提交您的个人资料给管理员进行审批？",
			buttons: '[No][Yes]'
		}, function (ButtonPressed) {
			if (ButtonPressed === "Yes") {

				$.smallBox({
					title: "个人资格审批",
					content: "<i class='fa fa-clock-o'></i> <i>您的资料已提交给管理员进行审批。</i>",
					color: "#659265",
					iconSmall: "fa fa-check fa-2x fadeInRight animated",
					timeout: 3000
				});
			}
			if (ButtonPressed === "No") {
				$.smallBox({
					title: "个人资格审批",
					content: "<i class='fa fa-clock-o'></i> <i>您拒绝将个人资料提交给管理员审批。</i>",
					color: "#C46A69",
					iconSmall: "fa fa-times fa-2x fadeInRight animated",
					timeout: 3000
				});
			}

		});
	};
	
    $scope.notifyAdmin = function() {

        $.smallBox({
            title: "已通知管理员处理",
            content: "<i class='fa fa-clock-o'></i> <i>请耐心等待...</i>",
            color: "#296191",
            iconSmall: "fa fa-thumbs-up bounce animated",
            timeout: 3000
        });

    };

	
});