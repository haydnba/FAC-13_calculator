




const setup = function() {

	const calculate = x => {
  
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

	var result;

	// console.log(result);

	var operator;

	// console.log(operator);

	const digits = document.getElementsByClassName('numeric');

	// console.log(digits);

	const operators = document.getElementsByClassName('operator');

	// console.log(operators);

	const settings = document.getElementsByClassName('setting');

	// console.log(settings);

	const output = {
		value: [],
		log: []
	}




	// this is the bit where - generate first figure and display it...
	// @TODO sort out the decimal point repetition problem!!
	// let figure = [];

	let display = document.getElementById('display');

	for (let item of digits) {
		// console.log(digit);
		item.addEventListener('click', x => {
			output.value.push(x.srcElement.value);
			display.innerHTML = `<p>${output.value.join('')}</p>`;
			// console.log(output.value);
		});
	}


	// let's do some stuff with the setter buttons...

	for (let item of settings) {
		item.addEventListener('click', x => {
			// console.log(x.srcElement);
			output.value = [];
			x.srcElement.id == 'reset' ? output.log = [] : '';
			display.innerHTML = `<p>${output.value.join('')}</p>`;
		});
	}



	// let's do some sums...

	let test = document.getElementById('result');

	// test.innerHTML = result.value;

	for (let item of operators) {
		item.addEventListener('click', x => {
			// @TODO - sort out many problems!! - multiple presses of operator lead to NANs...
			if (!result) {
				result = calculate(parseFloat(output.value.join('')));
				console.log(result);
				output.value = [];
			} else {
				result = calculate(result[operator](parseFloat(output.value.join(''))));
				console.log(result);
				output.value = [];
			}
			operator = x.srcElement.value;
			console.log(operator)
		});
	}


	// return {
	// 	result: result,
	// 	digits: digits,
	// 	operators: operators,
	// 	settings: settings
	// }


}

// const init = setup();


window.addEventListener('DOMContentLoaded', setup);

