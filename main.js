




const setup = function() {

	const calculate = x => {
  
		const add = y => x + y;

		const subtract = y => x - y;

		const multiply = y => x * y;

		const divide = y => x / y;

		const equals = () => result;

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

	const figures = document.getElementsByClassName('numeric');

	// console.log(digits);

	const operators = document.getElementsByClassName('operator');

	// console.log(operators);

	const settings = document.getElementsByClassName('setting');

	// console.log(settings);

	const output = {
		value: [],
		log: []
	}




	let display = document.getElementById('display');

	for (let item of figures) {
		item.addEventListener('click', e => {
			if (e.srcElement.id == 'point') {
				if (!output.value.includes(e.srcElement.value)) {
					output.value.push(e.srcElement.value);
				}
			} else {
				output.value.push(e.srcElement.value);				
			}
			display.innerHTML = `<p>${output.value.join('')}</p>`;
		});
	}


	for (let item of settings) {
		item.addEventListener('click', e => {
			output.value = [];
			e.srcElement.id == 'reset' ? output.log = [] : '';
			display.innerHTML = `<p>${output.value.join('')}</p>`;
		});
	}


	for (let item of operators) {
		item.addEventListener('click', e => {
			if (!output.value.length < 1) {
				if (!result) {
					result = calculate(parseFloat(output.value.join('')));					
				} else {
					result = calculate(result[operator](parseFloat(output.value.join(''))));
				}
				output.value = [];
				display.innerHTML = `<p>${result.value}</p>`;
			}
			operator = e.srcElement.value;
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

