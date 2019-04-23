/* Function Decloration - можно вызвать до её объявления*/
// showFirstMessage('Hello World!');
// function showFirstMessage(text) {
//     alert(text);
// }

/* Function Expession - можно вызвать только после её объявления*/
// let calc = function(a,b){
//     return(a+b);
// }
// console.log(calc(3,4));
// console.log(calc(7,9));

// let calc = (a,b) => a+b

/* Длина строки, массива */
// let a = "test";
// console.log(a.length);
/* Все заглавные буквы*/
// console.log(a.toUpperCase());
/* Все строчные буквы*/
// console.log(a.toLowerCase());

/*Округление*/
let twelve = '12.5px';
console.log(parseInt(twelve));
console.log(parseFloat(twelve));
let num = 12.75;
console.log(Math.round(num));