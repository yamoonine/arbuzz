(function () {
	'use strict';

	function type(o) {
	  return Object.prototype.toString.call(o).slice(8, -1).toLowerCase();
	}

	var result = type(Symbol('type checker'));

	console.log(result);

}());
