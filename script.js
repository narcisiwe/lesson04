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


const getExpensesMonth = function(amount1, amount2){ 
    return amount1 + amount2;
};
const getExpensesSum = getExpensesMonth (amount1, amount2);
console.log(getExpensesSum);


function getAccumulatedMonth(money, getExpensesSum) {
    const getAccumulatedMonthSum = money - getExpensesSum;
    return getAccumulatedMonthSum;
}
const accumulatedMonth = getAccumulatedMonth(money,getExpensesSum);
console.log(accumulatedMonth);


function getTargetMonth(mission, accumulatedMonth) {
    const getTargetMonthSum = mission / accumulatedMonth;
    return getTargetMonthSum;
}
console.log(getTargetMonth(mission,accumulatedMonth));


const budgetDay = accumulatedMonth/30;
 console.log(budgetDay );


const showTypeOf = function(data){
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(addExpenses);


const getStatusIncome = function(){
    if (budgetDay>= 1200) {
        console.log('У вас высокий уровень дохода')
    } else if (budgetDay>= 600) {
        console.log('У вас средний уровень дохода')
    } else if (budgetDay>= 0) {
        console.log('К сожалению у вас уровень дохода ниже среднего')
    } else {
        console.log('Что то пошло не так');
    }
};
console.log(getStatusIncome());

