// Динамическая типизация - изменение типа данных из одного в другой
// Статическая типизация (относиться к другим языкам) - тип данных не меняется

// string - "hhh"
// num - 555
// bollean - true / false
// null - не существует, не обьявлялась
// undefined - значение не задано
// simbol
// object - {}

// - to String
// 1) Старый спобоб String(), его лучше не использовать
console.log(String(true));
console.log(typeof(String(55)));
// 2) Конкатенация. При сложении со строкой - получаем всегда строку
console.log('' + true + 55 + null + undefined + {a:5});
console.log( typeof( '' + true + 55 + null + undefined + {a:5} ) );

// - to Number
// 1) Старый спобоб Number(), его лучше не использовать
console.log(Number(true));
console.log(typeof(Number("555")));
// 2) Унарный плюс
console.log(5 + +"5");
console.log(typeof( +"5" ));
console.log(typeof( +null ));
// 3) Методы, задача которых косвенно сводиться к преобразованию в число
console.log(parseInt("558",8));
console.log(typeof(parseInt("555",10)));

// - to Boolean
// false = 0, '', null, undefined, NaN
// true = все остальное, включая пустые массивы, объекты

// 1) способ преобразоватьть в boolean
switcher = null;
if(switcher){
 console.log('Не выполниться. Null даст false.')
}

switcher = {};
if(switcher){
 console.log('Выполниться. Пустой объект даст true.')
}

// 2) способ - Boolean()
console.log(typeof(Boolean("fff")));

// 3) способ - !!
console.log(typeof(!!"fff"));

