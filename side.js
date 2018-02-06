




const init = function() {

	const settings = document.querySelectorAll('.setting');
	const figures = document.querySelectorAll('.numeric');
	const operators = document.querySelectorAll('.operator');
	const display = document.querySelector('#display');

	return {
		settings: settings,
		figures: figures,
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

	constructor(value, operator) {		
		let _result = calculate(parseFloat(value));
		let _operator = operator;
		this.getResult = function() {
			return _result;
		}
		this.setResult = function(value) {
			return _result = calculate(_result[_operator](parseFloat(value)));
		}
		this.getOperator = function() {
			return _operator;
		}
		this.setOperator = function(operator) {
			return _operator = operator;
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

	constructor(figure) {
		let _result = figure.id !== 'point' ? [figure.value] : [0, figure.value];
		this.getResult = function() {
			return _result.join('');
		}
		this.setResult = function(figure) {
			if (figure.id !== 'point') {
				return _result.push(figure.value);
			} else if (!_result.includes(figure.value)) {
				return _result.push(figure.value);
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

// var display = setInterval(function() {
// 	init().display.innerHTML = `<p>${output ? output.getResult() : 0}</p>`
// }, 100);

for (let item of init().figures) {
	item.addEventListener('click', e => {
		if (!output) {
			output = new Operand(e.target);
		} else {
			output.setResult(e.target);
		}
		init().display.querySelector('#figure-display').innerHTML = `<p>${output.getResult()}</p>`
	});
}

for (let item of init().operators) {
	item.addEventListener('click', e => {
		if (output) {
			if (!test) {
				test = new Calculation(output.getResult(), e.target.id);			
			} else {
				test.setResult(output.getResult());
				if (e.target.id === 'equals') {
					// make my history take a new entry equal to test.evaluate() etc...
					test.evaluate();
					// test = '';
				} else {
					test.setOperator(e.target.id);
				}
			}
			init().display.querySelector('#operator-display').innerHTML = `<p>${e.target.value}</p>`
			output = '';
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

