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




/*let i = 0
while (i < 2){
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько это обойдется?", '');
    if(typeof(a) === 'string' && typeof(a) !== null && a.length < 50 && typeof(b) !== null && a !== '' && b !== ''){
        console.log("Good!");
        appData.expenses[a] = b;
        i++;
    }else {
        console.log('Something goes wrong')
        i--;
    }
};*/

/*let i = 0;
do{
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько это обойдется?", '');
    if (typeof(a) === 'string' && typeof(a) !== null && a.length < 50 && typeof(b) !== null && a !== '' && b !== ''){
        console.log("Good!");
        appData.expenses[a] = b;
        i++;
    }else {
        console.log('Something goes wrong');
        i--;
    }
} while (i < 2);*/


appData.moneyPerDay = (appData.budget / 30).toFixed();
alert(`Ваш дневной бюджет составляет: ${appData.moneyPerDay}`);

if (appData.moneyPerDay <= 100) {
    console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay <= 1000){
    console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000){
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какова сумма Ваших накоплений? (Введите 0 если их нет)", '');
                if (save !== 0 && save !== null && save !== '') {  
                    persent = +prompt("под какой процент Ваш депозит", '');    
                    appData.monthIncome = save/100/12*persent;
                    alert("Доход в месяц с Вашего дипозита: " + appData.monthIncome);
                } 
                else {
                    console.log("накоплений нет, либо поле пустое");
                }
    }
}
checkSavings();SD