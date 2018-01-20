var figureArray = [];
		var problemArray = [];
		var solutionArray = [];
		var calProblem = "";
		var calSolution = "";
		var dotIndex = "";
		var operatorIndex = "";

		function putFigure(button) {
			var myNum = button.value;
			figureArray.push(myNum);
			document.getElementById("demoA").innerHTML = figureArray.join("");
			operatorIndex = "";
		}

		function putDot() {
			while (!dotIndex) {
				var myDot = ".";
				figureArray.push(myDot);
				document.getElementById("demoA").innerHTML = figureArray.join("");
				dotIndex = true;
			}
		}

		function putOperand() {
			var myOperand = figureArray.join("");
			problemArray.push(myOperand);
			document.getElementById("demoB").innerHTML = problemArray.join("<br>");
			figureArray = [];
			dotIndex = "";
		}

		function putOperator(button) {
			var myOperator = button.value;
			while (!operatorIndex) {
				if (problemArray.length == 2) {
					putOperand();
					consolidateProblem();
					problemArray = [calSolution, myOperator]
					document.getElementById("demoB").innerHTML = problemArray.join("<br>");
					operatorIndex = true;
				}
				else {
					putOperand();
					problemArray.push(myOperator);
					document.getElementById("demoB").innerHTML = problemArray.join("<br>");
					operatorIndex = true;
				}
			}
		}

		function consolidateProblem() {
			makeExpression();
			evaluateExpression();
		}

		function makeExpression() {
			var x = parseFloat(problemArray[0]);
			var y = parseFloat(problemArray[2]);
			var z = problemArray[1];
			switch (z) {
				case "+": (calSolution = x + y) && (calProblem = x + " + " + y);
					break;
				case "-": (calSolution = x - y) && (calProblem = x + " - " + y);
					break;
				case "*": (calSolution = x * y) && (calProblem = x + " * " + y);
					break;
				case "/": (calSolution = x / y) && (calProblem = x + " / " + y);
					break;
			}
		}

		function evaluateExpression() {
			return calSolution;
		}

		function equalsPress() {
			if (operatorIndex == true) {
				var i = problemArray.length - 2;
				var defaultOperand = problemArray[i];
				problemArray.push(defaultOperand);
			}
			else {
				putOperand();
			}
			consolidateProblem();
			document.getElementById("demoA").innerHTML = calSolution;
			document.getElementById("demoB").innerHTML = calProblem + "<br>=<br>" + calSolution;
			operatorIndex = true;
		}