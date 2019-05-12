// let option = {
//     weight:1024,
//     height:1024,
//     name:'test'
// }

// option.bool = true; // Добавить свойство в обьект

// console.log(option.bool); // Получить свойство обекта
// console.log(option.name); // Получить свойство обекта
// console.log(option['name']); // Получить свойство обекта

// delete option.bool; // Удалить свойство из обьекта

// option.obj = {
//     color: 'black',
//     fontsize: 14
// }

// console.log(option); // Вывести весь обьект

// for(let key in option){
//     console.log('Свойство ' + key + ' содержит значение ' + option[key]);
// }

// console.log(Object.keys(option).length);

/* Массивы */

// let arr = [1,22,3,8,5];

// arr.pop(); // Удаляет последний эдемент массива
// arr.push("5"); // Добавляет в массив в коней
// arr.shift(); // Удаляет первый элемент массива
// arr.unshift('1'); // Добавлянь в начало массива

// console.log(arr);

/* Три способа перебора массива:*/

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item,i,mass){
//     console.log(i + ': ' + item + '( весь массив: ' + mass + ')');
// });

// for(key of arr){
//     console.log(key);
// }

/*Метод преобразования строки в массив*/
// let answer = prompt("Введи через запятую",""),
//     ar = answer.split(',');

//     console.log(ar);

/* Метод склеивания элементов массива */
// let arr = ['go','yott,bkb','lhlhlh',70000],
//     text = arr.join(', ');

//     console.log(text); 

/* Метод сортировки строк */
// let arr = ['gogo','hoho','aoao','koko','zozo','eoeo'];
// arr.sort();
// console.log(arr);

/* Метод сортировки чисел */
// let arr = [1, 7, 9, 8, 3, 2, 77, 55, 66, 56];
// arr.sort(compareNum);
// function compareNum(a,b){
//     return a-b;
// }
// console.log(arr);

/* Длинна массива */
// arr = ['1','2',3,5];
// arr.length = 3;
// console.log(arr.length);
// console.log(arr);

/* Объектно ориентированное программирование */

let soldier = {
    heilth: 200,
    armor: 300
}

let jonh = {
    heilth: 150
}

jonh.__proto__ = soldier;

console.log(jonh);
console.log(jonh.armor);