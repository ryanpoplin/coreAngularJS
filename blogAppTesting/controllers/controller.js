// 'ControllerModule' === module name...
// [] === module dependencies...such as: other modules, services, etc...
// method chaining feature === .controller, etc... different methods of the module...
angular.module('ControllerModule', []).controller('HeaderController', function ($scope) {

	// are $scope and this interchangeable???

	$scope.title = "Weather App...";

	$scope.updateTitle = function () {
		$scope.title = "New Weather App...";
	};

});