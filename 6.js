'use strict';

let enterMoney = getDeposit(), currency = getCurrency(enterMoney, "рублей", "рубля", "рубль");

function getDeposit(enterMoney) {
	enterMoney = parseInt(prompt("Введите сумму депозита:"));
	if (Number.isNaN(parseInt(enterMoney)) || enterMoney % 1 !== 0 || enterMoney < 0) {
		alert("Вы ввели некорректную сумму депозита!");
		getDeposit(); // С дробями так и не работает что то... "enterMoney % 1 !== 0" не помогло.
					 // Если ввести неправильное число, а потом правильное , то выводит NaN
					// в cosole.log, подскажите почему.
	}
	return enterMoney;
}

function getCurrency(enterMoney, rubles, twoThreeFourRuble, oneRuble) {
	if (enterMoney % 10 < 1 || enterMoney % 10 >= 5 || 
		enterMoney % 100 > 10 && enterMoney % 100 < 21) {
		return rubles;
	} else if (enterMoney % 10 > 1 && enterMoney % 10 < 5) {
		return twoThreeFourRuble;
	} else {
		return oneRuble;
	}
}
console.log(`Ваш депозит состовляет ${enterMoney} ${currency}`)
// изначально было сделано только для рублей (возвращал именно слова "рублей", "рубля", "рубль"),
// потом уже как сделал, посмотрел ваше видео и понял что я это упустил в задании
// и добавил параметры в функцию для любых слов.
