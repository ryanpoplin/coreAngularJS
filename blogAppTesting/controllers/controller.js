// 'ControllerModule' === module name...
// [] === module dependencies...such as: other modules, services, etc...
// method chaining feature === .controller, etc... different methods of the module...
angular.module('HeaderModule', []).factory("Data", function () {

	return {

		getTitle: function () {

			return "The Best Weather App Ever...";

		}

	}

}).filter('customuppercase', function() {

	// the custom data structure and algorithm layer...

	return function (input) {

		if (input.length > 20) {

			return input.toUpperCase();

		} else {

			return input;

		}

	}

// module method chaining is fun...
}).controller('HeaderController', function ($scope, Data) {

	// are $scope and this interchangeable???

	$scope.title = Data.getTitle();

	$scope.updateTitle = function () {
		
		$scope.title = "New Weather App...";
	
	};

});