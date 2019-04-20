'use strict';
let money = prompt('Ваш бюджет на месяц?', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    'бюджет': money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

let question1 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    question2 = prompt('Во сколько обойдется?', ''),
    question3 = prompt('Введите обязательную статью расходов в этом месяце', ''),
    question4 = prompt('Во сколько обойдется?', '');

appData.expenses[question1] = question2;
appData.expenses[question3] = question4;

alert('Бюджет на 1 день: ' + money / 30);