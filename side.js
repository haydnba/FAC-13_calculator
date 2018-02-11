




const init = function() {

	const settings = document.querySelectorAll('.setting');
	const digits = document.querySelectorAll('.numeric');
	const operators = document.querySelectorAll('.operator');
	const display = document.querySelector('#display');

	return {
		settings: settings,
		digits: digits,
		operators: operators,
		display: display,
	}

}


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


class Calculation {

	constructor(figure, operator) {		
		let _result = calculate(parseFloat(figure));
		let _operator = operator;
		let _history = [];
		this.getResult = function() {
			return _result;
		}
		this.setResult = function(figure) {
			return _result = calculate(_result[_operator](parseFloat(figure)));
		}
		this.getOperator = function() {
			return _operator;
		}
		this.setOperator = function(operator) {
			return _operator = operator;
		}
		this.getHistory = function() {
			return _history.join(' ');
		}
		this.setHistory = function(value) {
			return _history.push(value);
		}
	}

	display(whatever) {
		return whatever;
	}

	evaluate(whatever) {
		return whatever;
	}

}


class Operand {

	constructor(digit) {
		let _result = digit.id !== 'point' ? [digit.value] : [0, digit.value];
		this.getResult = function() {
			return _result.join('');
		}
		this.setResult = function(digit) {
			if (digit.id !== 'point') {
				return _result.push(digit.value);
			} else if (!_result.includes(digit.value)) {
				return _result.push(digit.value);
			}
		}
	}

}



// class History {

// 	constructor(calculation, datetime) {

// 		this.calculation = calculation;
// 		this.datetime = datetime;

// 	}

// }

var test;

var output;


for (let item of init().digits) {
	item.addEventListener('click', e => {
		if (!output) {
			output = new Operand(e.target);
		} else {
			output.setResult(e.target);
		}
		init().display.querySelector('#figure-display').innerHTML = `<p>${output.getResult()}</p>`;
	});
}

for (let item of init().operators) {
	item.addEventListener('click', e => {
		if (output) {
			if (!test) {
				test = new Calculation(output.getResult(), e.target.id);
				test.setHistory(test.getResult().value);
				test.setHistory(e.target.id);	
			} else {
				test.setResult(output.getResult());
				test.setHistory(output.getResult());
				test.setHistory(`( = ${test.getResult().value})`);
				if (e.target.id === 'equals') {
					// make my history take a new entry equal to test.evaluate() etc...
					test.evaluate();
					// test = '';
				} else {
					test.setOperator(e.target.id);
					test.setHistory(e.target.id);					
				}
				init().display.querySelector('#figure-display').innerHTML = `<p>${test.getResult().value}</p>`;
			}
			init().display.querySelector('#operator-display').innerHTML = `<p>${e.target.value}</p>`;
			output = '';
			console.log(test.getHistory());
		}
	});
}



// for (let item of init().settings) {
// 	item.addEventListener('click', e => {
// 		input.value = [];
// 		operator === 'equals' ? result = '' : '';
// 		display.innerHTML = `<p>${input.value.join('')}</p>`;
// 	});
// }





window.addEventListener('DOMContentLoaded', init);

