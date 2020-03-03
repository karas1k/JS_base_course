'use strict';

let firstNumber = parseInt(prompt("Введите первое целочисленное число"));
let secondNumber = parseInt(prompt("Введите второе целочисленное число"));

function getNumberResult(firstNumber, secondNumber) {
	let result = null;
	if (firstNumber >= 0 && secondNumber >= 0) {
		result = firstNumber / secondNumber;
		console.log(`Разность чисел ${firstNumber} / ${secondNumber} = ${Math.round(result * 100) / 100}`);
	} else if (firstNumber < 0 && secondNumber < 0) {
		result = firstNumber * secondNumber;
		console.log(`Произведение чисел ${firstNumber} * ${secondNumber} = ${Math.round(result * 100) / 100}`);
	} else if (firstNumber >= 0 && secondNumber < 0 ||
		firstNumber < 0 && secondNumber >= 0) {
		result = firstNumber + secondNumber;
		console.log(`Сумма чисел ${firstNumber} + ${secondNumber} = ${Math.round(result * 100) / 100}`);
	}
}
getNumberResult(firstNumber, secondNumber);
