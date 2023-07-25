"use strict";
function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2) - (4 * a * c);
	if (d < 0) {
		arr.push();
	} else if (d == 0) {
		let oneRoot = -b / (2 * a);
		arr.push(oneRoot);
	} else if (d > 0) {
		let firstSolution = (-b + Math.sqrt(d)) / (2 * a);
		let secondSolution = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(firstSolution, secondSolution);
	}
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)){
    return false;
  }

  percent = percent/100/12;

  let loanBody = amount - contribution;
  let monthlyPayment = loanBody * (percent + (percent / ((Math.pow((1 + percent), countMonths)) - 1)));
  let totalPayment = monthlyPayment * countMonths;

  totalPayment = Number(totalPayment.toFixed(2));

  return totalPayment;
}

