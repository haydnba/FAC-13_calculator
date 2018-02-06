




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
	var operator;

	const output = {
		value: [],
		log: []
	}

	const figures = document.getElementsByClassName('numeric');
	const operators = document.getElementsByClassName('operator');
	const settings = document.getElementsByClassName('setting');
	const display = document.getElementById('display');


	for (let item of figures) {
		item.addEventListener('click', e => {
			if (output.log[output.log.length - 1] === '=') {
				result = '';
			}
			if (e.srcElement.id === 'point') {
				if (output.value.length < 1) {
					output.value.push(`0${e.srcElement.value}`);
				} else if (!output.value.includes(e.srcElement.value)) {
					output.value.push(`${e.srcElement.value}`);
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
			operator === 'equals' ? result = '' : '';
			e.srcElement.id !== 'reset' ? '' : ((output.log = []) && (result = ''));
			display.innerHTML = `<p>${output.value.join('')}</p>`;
		});
	}


	for (let item of operators) {
		item.addEventListener('click', e => {
			if (!output.value.length < 1) {
				if (!result) {
					result = calculate(parseFloat(output.value.join('')));
					output.log.push(result.value);				
				} else {
					result = calculate(result[operator](parseFloat(output.value.join(''))));
					output.log.push(output.value.join(''));					
					output.log.push(result.value);
				}
				output.value = [];
				display.innerHTML = `<p>${result.value} ${e.srcElement.id !== 'equals' ? e.srcElement.innerHTML : '' }</p>`;
			}
			operator = e.srcElement.value;
			output.log.push(e.srcElement.innerHTML);
			console.log(operator);
			console.log(output.log);
		});
	}




}



window.addEventListener('DOMContentLoaded', setup);

