'use strict';

/**
 * Функция возвращает объект из разрядов (единицы, десятки, сотни) введенного числа
 * @type int{number}
 */

function getObjectNumber(number) {
    if (number < 0 || number > 999 || !Number.isInteger(number)) {
        return Error(`${number} не входит в диапазон 0 - 999!`);;
    }
    else {
        const object = {};

        object.units = number % 10;
        object.tens = Math.floor(number / 10 % 10);
        object.hundereds = Math.floor(number / 100 % 10);
        return object;
    }
}

console.log(getObjectNumber(parseInt(prompt("Введите число в диапазоне: 0 - 999"))));
