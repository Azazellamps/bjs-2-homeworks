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