const input = require('sync-input');

let currency = ['JPY', 'EUR', 'RUB', 'USD', 'GBP', 'RON'];
let value = [142.28, 1.01, 61.38, 1, 0.86, 4.88];

function welcome() {
    console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 142.28 JPY
1 USD equals 1.01 EUR
1 USD equals 61.38 RUB
1 USD equals 0.86 GBP
1 USD equals 4.88 RON`);
}

function unknown() {
    console.log('Unknown currency');
}

function invalid() {
    console.log('The amount has to be a number');
}

function insufficient() {
    console.log('The amount cannot be less than 1');
}

function result(amount, from, money, to) {
    console.log(`Result: ${amount} ${from} equals ${money.toFixed(4)} ${to}`);
}

function check(name) {
    for (let i = 0; i <= currency.length; i++) {
        if (name === currency[i]) {
            return i;
        }
    }
    return -1;  /*If it can't find the name of the currency in the array,
    it means that it's not a valid currency, so it returns -1*/
}

function convertion() {
    let from = input('From: ');
    from = from.toUpperCase();
    let index1, index2;
    index1 = check(from);
    if (index1 === -1) {
        unknown();
    } else {
        let to = input('To: ');
        to = to.toUpperCase();
        index2 = check(to);
        if (index2 === -1) {
            unknown();
        } else {
            let amount = input("Amount: ");
            if (isNaN(amount)) {
                invalid();
            } else {
                if (amount < 1) {
                    insufficient();
                } else {
                    let money = (amount / value[index1]) * value[index2];
                    result(amount, from, money, to);
                }
            }
        }
    }
}

welcome();
let menu = true;
while (menu) {
    console.log(`What do you want to do?
1-Convert currencies 2-Exit program`);
    let option = Number(input());
    switch (option) {
        case 1:
            console.log('What do you want to convert?');
            convertion();
            break;
        case 2:
            console.log('Have a nice day!');
            menu = false;
            break;
        default:
            console.log('Unknown input');
    }
}


