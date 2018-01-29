// JS Calculator Module...

// main module

const calculator = (() => {

	let add = x => y => x + y;

	let subtract = x => y => x - y;

	let multiply = x => y => x * y;

	let divide = x => y => x / y;

	return {
		add: add,
		subtract: subtract,
		multiply: multiply,
		divide: divide
	};

})();