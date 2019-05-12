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
    saving: true,
    chooesExpenses: function(){
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
    },
    chooseOptExpenses: function(){
        for (let i = 0; i < 3; i++){
            let a = prompt(i + '. Статья необязательных расходов?','');
            if((typeof(a) != null && a != '' && a.length < 50)){
                appData.optionalExpenses[i] = a;
                console.log('Получили верный ответ на ' + i + ' вопрос про необязательную часть вопросов!');
            } else {
                console.log('Неверный ответ на необязательные расходы. Спросим еще раз!');
                i--;
            }
        }
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Бюджет на 1 день: ' + appData.moneyPerDay);
    },
    detectLevel: function(){
        if(appData.moneyPerDay < 100){
            console.log('Минимальный уровень достатка!');
        } else if (appData.moneyPerDay < 500){
            console.log('Средний уровень достатка');
        } else if (appData.moneyPerDay > 499){
            console.log('Высокий уровень достатка');
        } else {
            console.log('Что-то пошло не так с appData.moneyPerDay');
        }
    },
    checkSavings: function(){
        if(appData.saving == true){
            let save = +prompt('Какова сумма накоплений',''),
                percent = +prompt('Под какой процент?');
            appData.mathIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с Вашего накопления: " + appData.mathIncome)
        }
    },
    chooesIncome: function(){
        let items = prompt('Что принесет дополнительный доход? (Перечислети через запятую)','');
        if(items == "" || items == null || typeof(items) != 'string'){
            console.log('Неверная запись дополнительных расходов (ChooeseIncome)');
            appData.chooesIncome();
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Может что-то еще?',''));
            appData.income.sort();

            console.log(appData.income);
            let inc = '';
            appData.income.forEach(function(item,i){
                inc += i + 1 + '. ' + item + '\n'; 
            });
            alert('Способы допзаработка: \n' + inc);
        }
    }
};

// appData.chooesExpenses();
// appData.chooseOptExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
appData.chooesIncome();
// function getAppData(){
//     let keys = '';
//     for(let key in appData){
//         keys = keys + key + ': ' + appData + '\n';
//     }
//     alert(keys);
// }
/*
function getAppData(){
    for(let key in appData){
        console.log(key + ': ' + appData);
    }
}
*/
let go = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    daybudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalexpensesValue = document.querySelector('.optionalexpenses-value'),
    incomeValue = document.querySelector('.income-value'),
    monthsavingsValue = document.querySelector('.monthsavings-value'),
    yearsavingsValue = document.querySelector('.yearsavings-value'),
    expensesItem = document.querySelectorAll('.expenses-item'),
    button = document.getElementsByTagName('button'),
    expensesItemBtn = button[0],
    optionalExpensesBtn = button[1],
    countBudgetBtn = button[2],
    optionalexpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    chooseIncome = document.querySelector('.choose-income'),
    chooseSum = document.querySelector('.choose-sum'),
    choosePercent = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');
