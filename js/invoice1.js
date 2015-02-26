// the 'invoice1' module depends on the 'finance' module for proper functionality...
// this will in turn utilize the 'InvoiceController' and 'currencyConverter' services...
angular.module('invoice1', ['finance']).controller('InvoiceController', ['currencyConverter', function (currencyConverter) {

	this.qty = 1;
	
	this.cost = 1;
	
	this.inCurr = 'USD';
	
	this.currencies = currencyConverter.currencies;
	
	this.total = function total (outCurr) {
		return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr);
	};
	
	this.pay = function pay () {
		window.alert('...');
	};

}]);