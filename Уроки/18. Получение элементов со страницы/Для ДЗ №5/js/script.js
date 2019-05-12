let menuItem = document.querySelectorAll('.menu-item');
let menu = document.querySelector('.menu');

// Меняем местами пункты в меню 1 способ
menu.insertBefore(menuItem[1],menuItem[3]);

// Меняем местами пункты в меню 2 способ
// menu.appendChild(menuItem[1]);
// menu.appendChild(menuItem[3]);

// Добавляем новый пункт в меню
let li = document.createElement('li');
li.className = 'menu-item';
li.innerHTML = 'Пятый пункт';
menu.appendChild(li);

// Удаляем рекламу
let column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv');
column[1].removeChild(adv);

document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';

// Изменяем текст заголовка
let title = document.getElementById('title');
title.innerHTML = 'Мы продаем только подлинную технику Apple';

// Спросить у пользователя
let prompts = document.getElementById('prompt');
prompts.textContent = prompt('Как вы относитесь к технике apple?','');