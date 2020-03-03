'use strict';

let a = 20, b = 10;

/**
 * Функция сложения чисел
 * @param a
 * @param b
 * @returns {*}
 */
function sum(a, b) {
	return a + b;
}
console.log(sum(a, b));

/**
 * Функция разности чисел
 * @param a
 * @param b
 * @returns {number}
 */
const difference = function(a, b) {
	return a - b;
};
console.log(difference(a, b));

/**
 * Функция деления чисел
 * @param a
 * @param b
 * @returns {number}
 */
const division = (a, b) => a / b;
console.log(division(a, b));

/**
 * Функция произведения чисел
 * @param a
 * @param b
 * @returns {number}
 */
const multiplication = (a, b) => {
	return a * b;
};
console.log(multiplication(a, b));
