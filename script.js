// 'use strict';

a = 5;
console.log(a);

// Типы данных javaScript

var number = 5;
var string = 'Текст';
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0); //Infinity - Математич. ошибка
console.log(5*'text'); // NuN - Не число
// console.log(vhujjjihi); // null - Переменная не обьявлена
let nonono;
console.log(nonono); //undefined - Значение не задано

// Обьект
let persone = {
    name: "Name",
    'age kk': 25,
    isMarried: true
}

console.log(persone.name);
console.log(persone['age kk']);

let arr = ['jone.png','artur.png','allis.gif'];

console.log(arr[2]);

/* вывод */
// console.log("Helllo world!");
// alert("Hello world!");

// let answer = confirm("Are you here?");
// console.log(answer);

// let answer = prompt("How old are you?","Да");
// console.log(typeof(answer));

// typeof(); определяет тип данных
// console.log(typeof(null));

// console.log("arr" + " - object"); // string
// console.log(4 + " - object"); // string
// console.log(4 + 5); // number

let isChecked = true,
    isClose = true;

    console.log(isChecked && isClose); //true
    console.log(!isChecked && isClose); //false
    console.log(!isChecked && !isClose); //false
    console.log(isChecked || isClose); //true
    console.log(!isChecked || isClose); //true
    console.log(!isChecked || !isClose); //false

/*сравнивание*/
console.log('Сравнивание == и ===');
let numOne = 10,
    numTwo = '10';

    console.log(numOne == numTwo);
    console.log(numOne === numTwo);




