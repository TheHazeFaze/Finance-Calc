let money = +prompt("Ваш бюджет на месяц");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    iconme: []
};


for (i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", '');
    let b = prompt("Во сколько это обойдется?", '');
    
    if(typeof(a) === 'string' && typeof(a) !== null && a.length < 50 && typeof(b) !== null && a !== '' && b !== ''){
        console.log("Good!");
        appData.expenses[a] = b;
    }else {
        console.log('Something goes wrong')
        i--;
    }



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


appData.moneyPerDay = appData.budget / 30;
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