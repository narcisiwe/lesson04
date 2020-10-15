'use strict';


const addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую: Интернет, пиТса, Коммуналка, Кокаинум').split(',');
// console.log(typeof addExpenses);
// console.log(addExpenses);
const sumExpenses = parseInt(addExpenses[0]) + parseInt(addExpenses[1]) + parseInt(addExpenses[2]) + parseInt(addExpenses[3]);
console.log(sumExpenses);
let expenses1 = 140;
let expenses2 = 300;
let money = 50000;
let mission = 3000000;

const getExpensessum = function(a, b, c){ 
    return a + b + c;
};
const getExpensesMonth = getExpensessum (addExpenses, expenses1, expenses2);
//console.log(getExpensesMonth);

const getAccumulatedMonth = function(data) {
    return (data);
 };
 const accumulatedMonth  = getAccumulatedMonth (money-sumExpenses-expenses1-expenses2);
 console.log(accumulatedMonth);

function getTargetMonth(a, b) {
    const getTargetMonthSum = a / b;
    return getTargetMonthSum;
}
console.log(getTargetMonth(mission,accumulatedMonth));


let showTypeOf = function(data){
    console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(addExpenses);


const budgetDaySum = function(data) {
    return (data);
 };
 const budgetDay  = budgetDaySum (accumulatedMonth/30);
 console.log(budgetDay);


let getStausIcome = function(){
    if (budgetDay>=1200) {
        return ('У вас высокий уровень дохода')
    } else if (budgetDay>=600) {
        return ('У вас средний уровень дохода')
    } else if (budgetDay>=0) {
        return ('К сожалению у вас уровень дохода ниже среднего')
    } else {
        return ('Что то пошло не так');
    }
};
console.log(getStausIcome());