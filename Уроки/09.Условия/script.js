'use strict';
let num = 50;

// Первый способ
(num == 50) ? console.log("Равно 50"): (num > 50) ? console.log("Больше") : console.log("Меньше");

// Второй способ
if (num == 50) {
    console.log("Равно 50");
} else if (num > 50) {
    console.log("Больше");
} else {
    console.log("Меньше");
}

// Третий способ
switch (true) {
    case num == 50:
        console.log("Равно 50");
        break;
    case num > 50:
        console.log("Больше");
        break;
    default:
        console.log("Меньше");
        break;
}

// Стандартный switch case
switch (num) {
    case 50:
        console.log("Равно 50");
        break;
    case 3:
        console.log("Равно 3");
        break;
    default:
        console.log("Меньше");
        break;
}

// Цикл while - 1.Проверяем 2.Выполняем
num = 50;
while (num < 55) {
    console.log(num);
    num++;
}

// Цикл do..while - 1.Выполняем 2.Проверяем
num = 50;
do {
    console.log(num);
    num++;
} while (num < 55);

// Цикл for более настраиваемый
for (let i = 0; i < 7; i++) {
    console.log(i);
}

// Прерываем выполнение цикла 
for (let i = 0; i < 7; i++) {
    if(i == 4){
        break;
    }
    console.log(i);
}

// Пропускаем итерацию цикла
for (let i = 0; i < 7; i++) {
    if(i == 4){
        continue;
    }
    console.log(i);
}
