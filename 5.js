'use strict';

/**
 * Функция сложения чисел
 * @param a
 * @param b
 * @returns {*}
 */
function sum(a, b) {
	return a + b;
};

/**
 * Функция разности чисел
 * @param a
 * @param b
 * @returns {number}
 */
const difference = function(a, b) {
	return a - b;
};

/**
 * Функция деления чисел
 * @param a
 * @param b
 * @returns {number}
 */
const division = (a, b) => a / b;

/**
 * Функция произведения чисел
 * @param a
 * @param b
 * @returns {number}
 */
const multiplication = (a, b) => {
	return a * b;
};

/**
 * Операции параметра "operation":
 * Сложение - "sum";
 * Разность - "difference";
 * Деление - "division";
 * Произведение - "multiplication";
 * @type {number}
 */

let a = 20, b = 10, operation = "sum", result = null;

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "sum":
			return sum(arg1, arg2);
		case "difference":
			return difference(arg1, arg2);
		case "division":
			return division(arg1, arg2);
		case "multiplication":
			return multiplication(arg1, arg2);
		default:
			throw new Error(`Неизвестная операция - ${operation}!`);
	};
};

console.log(mathOperation(a, b, "sum"));
console.log(mathOperation(a, b, "difference"));
console.log(mathOperation(a, b, "division"));
console.log(mathOperation(a, b, "multiplication"));
console.log(mathOperation(a, b, "unknown"));
