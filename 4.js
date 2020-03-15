'use strict';

let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        handleClick(event);
    });
});

/**
 * Функция обрабатывает клик по кнопке в карточке товара и попеременно вызывает
 * функции для показа или скрытия текста о товаре.
 * @param {MouseEvent} clickedButtonEvent
 */
function handleClick(clickedButtonEvent) {
    let cardNode = clickedButtonEvent.target.parentNode;

    let card = {
        wrap: cardNode,
        img: cardNode.querySelector('img'),
        productName: cardNode.querySelector('.productName'),
        button: cardNode.querySelector('button'),
    };

    let textOnButton = card.button.innerText;
    if (textOnButton === 'Подробнее') {
        showMoreText(card);
    } else if (textOnButton === 'Отмена') {
        hideMoreText(card);
    }
}

/**
 * Функция показывает текст с описанием товара.
 * @param {Object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function showMoreText(card) {
    card.img.style.display = 'none';
    let text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
        'Accusantium enim facere maxime modi molestiae voluptate.';
    card.productName.insertAdjacentHTML('afterend', `<div class="desc">${text}</div>`);
    card.button.innerText = 'Отмена';
}

/**
 * Функция скрывает текст с описанием товара.
 * @param {Object} card
 * @param {HTMLDivElement} card.wrap
 * @param {HTMLImageElement} card.img
 * @param {HTMLDivElement} card.productName
 * @param {HTMLButtonElement} card.button
 */
function hideMoreText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.desc').remove();
    card.button.innerText = 'Подробнее';
}

// let img =  document.querySelectorAll('img');
// let productName = document.querySelectorAll('.productName');
// let button = document.querySelectorAll('button');
// let text = document.createElement("div");
// button.forEach(function (button) {
//     button.addEventListener('click', function (event) {
//         img.classList.add('hidden');
//     })
// })
// text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
//     'Accusantium enim facere maxime modi molestiae voluptate.';
// text.classList.add('hidden');
//
//
// // productName.insertAdjacentHTML('afterend', text);
