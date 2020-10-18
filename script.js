'use strict';

const money = +prompt('Ваш месячный доход?');
const deposit = confirm('Есть ли у вас депозит в банке? Yes/Ok No/Cancel');
const expenses1 = prompt('Введите обязательную статью расходов??');
const expenses2 = prompt('Введите обязательную статью расходов??');
const amount1 = +prompt('Во сколько это обойдется?');
const amount2 = +prompt('Во сколько это обойдется?');
const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
const mission = 3000000;
const period = 12;


const getExpensessum = function(a, b, c){ 
    return a + b + c;
};
const getExpensesMonth = getExpensessum (addExpenses, expenses1, expenses2);
console.log(getExpensesMonth);


const getAccumulatedMonth = function(data) {
    return (data);
 };
 const accumulatedMonth  = getAccumulatedMonth (money-amount1-amount2);
 console.log(accumulatedMonth);


function getTargetMonth(a, b) {
    const getTargetMonthSum = a / b;
    return getTargetMonthSum;
}
console.log(getTargetMonth(mission,accumulatedMonth));


const budgetDay = function(data) {
    return (data);
 };
 const budgetDaySum  = budgetDay (accumulatedMonth/30);
 console.log(budgetDaySum);

let showTypeOf = function(data){
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(addExpenses);


const getStatusIncome= function(){
if (budgetDay>=1200) {
    console.log('У вас высокий уровень дохода')
} else if (budgetDay>=600) {
    console.log('У вас средний уровень дохода')
} else if (budgetDay>=0) {
    console.log('К сожалению у вас уровень дохода ниже среднего')
} else 
    {console.log('Что то пошло не так');
}
};


