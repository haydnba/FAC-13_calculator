// JS Calculator Module...

const calculate = x => {
  
  	// const value = x;
  
	const add = y => x + y;

	const subtract = y => x - y;

	const multiply = y => x * y;

	const divide = y => x / y;

	return {
    	value: x,
    	add: add,
		subtract: subtract,
		multiply: multiply,
		divide: divide
	};

};

export { calculate };