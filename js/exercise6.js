// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER
investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));

    if (isNaN(investment)) {

        while(isNaN(investment)) {
            investment = parseFloat(prompt('Enter investment amount as xxxx.xx. (Must be a number.)'));
        };

    };

rate = parseFloat(prompt('Enter interest rate as xx.x'));

    if (isNaN(rate) || rate < 0 || rate > 10) {

        while(isNaN(rate) || rate < 0 || rate > 10) {
            rate = parseFloat(prompt('Enter interest rate as xx.x. (Must be a number from 0 to 10)'));
        };

    };


years = parseInt(prompt('Enter the number of years you want to invest for'));

    if (isNaN(years) || years < 1 || years > 30) {

        while(isNaN(years) || years < 1 || years > 30) {
            years = parseInt(prompt('Enter the number of years you want to invest for. (Must be a number from 1 to 30)'));
        };

    };


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);