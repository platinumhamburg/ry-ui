'use strict';

angular.module('app.rentalApplication').controller('PersonalInfoController', function ($scope) {
	$scope.smartModEg1 =  function () {
		$.SmartMessageBox({
			title: "个人资料确认",
			content: "请确认您的个人资料是否填写无误？",
			buttons: '[No][Yes]'
		}, function (ButtonPressed) {
			if (ButtonPressed === "Yes") {

				$.smallBox({
					title: "个人资料确认",
					content: "<i class='fa fa-clock-o'></i> <i>您的资料已更新。</i>",
					color: "#659265",
					iconSmall: "fa fa-check fa-2x fadeInRight animated",
					timeout: 3000
				});
			}
			if (ButtonPressed === "No") {
				$.smallBox({
					title: "个人资料确认",
					content: "<i class='fa fa-clock-o'></i> <i>您的资料可修改。</i>",
					color: "#C46A69",
					iconSmall: "fa fa-times fa-2x fadeInRight animated",
					timeout: 3000
				});
			}

		});
	};
});