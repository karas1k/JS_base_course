'use strict';

// Создаем элементы
let showModal = document.createElement('button');
let text = document.createElement("div");
let closeModal = document.createElement("button");

// Добавляем элементам классы и текст
showModal.classList.add('button');
text.classList.add('animated', 'bounceInDown', 'hidden', 'modal_window');
closeModal.classList.add('button', 'close_button');
showModal.innerText = 'Показать';
text.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, optio!';
closeModal.innerText = 'Закрыть';

//Добавляем элементы в html документ
document.body.insertAdjacentElement("afterbegin", showModal);
showModal.insertAdjacentElement("afterend", text);
text.insertAdjacentElement("beforeend", closeModal);

// Создаем событие и обрабатываем его что бы показать модалку
showModal.addEventListener('click', function () {
    text.classList.remove('bounceOutUp', 'hidden');
    text.classList.add('bounceInDown');
});

// Создаем событие и обрабатываем его что бы закрыть модалку
closeModal.addEventListener('click',function () {
    text.classList.remove('bounceInDown');
    text.classList.add('bounceOutUp');
    setTimeout(function () {
        text.classList.add('hidden');
    }, 1000);
});
// setTimeout подсмотрел в видео, не мог понять как сделать что бы уезжала модалка))