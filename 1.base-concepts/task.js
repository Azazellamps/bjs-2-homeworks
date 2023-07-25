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

	let percentNumb = parseFloat(percent);
	let contributionNumb = parseFloat(contribution);
	let amountNumb = parseFloat(amount);

	if ((Number.isNaN(percentNumb) === true) || (percent <= 0)) {
		return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
	};

	if ((Number.isNaN(amountNumb) === true) || (amount <= 0)) {
		return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
	};

	if ((Number.isNaN(contributionNumb) === true) || (contributionNumb > amountNumb)) {
		return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
	};


	let dateFrom = new Date();
	let fullMonthsDataTo = date.getFullYear() * 12;
	let fullMonthsDataFrom = dateFrom.getFullYear() * 12;
	let n = fullMonthsDataTo - fullMonthsDataFrom;
	let payment = S * (P + (P / (((1 + P) ** n) - 1)));
	totalAmount = (payment * n).toFixed(2);
	return totalAmount;
}
