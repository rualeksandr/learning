'use strict';

let money,time;

function start(){
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    //не пустая, цифрами, и не отменен
    while(isNaN(money) || money == "" || money == null){
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    saving: true
};

function chooesExpenses(){
    for (let i = 0; i < 2; i++){
        let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        if((typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50 && b.length < 50 ){
            console.log('done');
            appData.expenses[a] = b;
        } else {
            console.log('Неверный ответ! Спросим еще раз!')
            i--;
        }
    }
}
chooesExpenses();

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Бюджет на 1 день: ' + appData.moneyPerDay);

if(appData.moneyPerDay < 100){
    console.log('Минимальный уровень достатка!');
} else if (appData.moneyPerDay < 500){
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 499){
    console.log('Высокий уровень достатка');
} else {
    console.log('Что-то пошло не так с appData.moneyPerDay');
}

function checkSavings() {
    if(appData.saving == true){
        let save = +prompt('Какова сумма накоплений',''),
            percent = +prompt('Под какой процент?');
        appData.mathIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с Вашего накопления: " + appData.mathIncome)
    }
}
checkSavings();