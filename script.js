let money, time;

function start (){
    money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц??!");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    iconme: [],
    savings: true
};

function choseExpenses() {
    for (i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", '');
        let b = prompt("Во сколько это обойдется?", '');
        
        if(typeof(a) === 'string' && typeof(a) !== null && a.length < 50 && typeof(b) !== null && a !== '' && b !== ''){
            console.log("Good!");
            appData.expenses[a] = b;
        }else {
            console.log('Something goes wrong');
            i--;
        }
}
}

choseExpenses();


let moneyPerDay;

function detectDayBudget(){
    moneyPerDay = (appData.budget / 30).toFixed(1);
    alert('Ваш дневной бюджет составляет:' + moneyPerDay);
}
detectDayBudget();



function detectLevel(){
    if (moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (moneyPerDay >= 100 || moneyPerDay <= 1000){
        console.log('Средний уровень достатка');
    } else if (moneyPerDay > 1000){
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel();


function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма Ваших накоплений? (Введите 0 если их нет)", '');
                if (save !== 0 && save !== null && save !== '') {  
                    persent = +prompt("под какой процент Ваш депозит", '');    
                    appData.monthIncome = save/100/12*persent;
                    alert("Доход в месяц с Вашего дипозита: " + (appData.monthIncome).toFixed(2));
                } 
                else {
                    console.log("накоплений нет, либо поле пустое");
                }
    }
}
checkSavings();

function optionalExpenses(){
    for(i = 0; i < 3; i++){
        let quastionOne = prompt("Статья необязательных расходов?");
            quastionTwo = +prompt("Введите сумму:");
                if(typeof(quastionOne) === 'string' && typeof(quastionOne) !== null && quastionOne.length < 50 && typeof(quastionTwo) !== null && quastionOne !== '' && quastionTwo !== ''){
                    console.log("Optional Expenses OK!");
                    appData.optionalExpenses[quastionOne] = quastionTwo;
                }
                else {
                    console.error("Optional expenses ERROR!");
                }
        
    }
}
optionalExpenses();