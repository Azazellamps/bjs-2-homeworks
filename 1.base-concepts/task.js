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

function calculateTotalMortgage(percent, contribution, amount, date) {
	let totalAmount;
	let S = amount - contribution;
	let P = percent / 100 / 12;


	let dateFrom = new Date();
	let fullMonthsDataTo = date.getFullYear() * 12;
	let fullMonthsDataFrom = dateFrom.getFullYear() * 12;
	let n = fullMonthsDataTo - fullMonthsDataFrom;
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));
	totalAmount = (payment * n).toFixed(2);

  
	return totalAmount;
}

