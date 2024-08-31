console.log("Welcome to the Coffee and Cookie Shop");
console.log("You can purchase a cup of coffee for R30.00 and you could purchase a cookie for R19.00");
//input - finding out the value of products
var coffee = prompt("How many cup of coffee would you like to purchase?");
var cookies = prompt("How many cookies would you like to purchase?");
var tipPercentage  = prompt("How much tip would you like to leave, 10,15, 20?");

//converting inputs into numbers,int or floats
var coffee = parseInt(coffee);
var cookies = parseInt(cookies);
var tipPercentage = parseFloat(tipPercentage );

// Check for NaN and set defaults if necessary
if (isNaN(coffee)) coffee = 0;
if (isNaN(cookies)) cookies = 0;
if (isNaN(tipPercentage)) tipPercentage = 0;

//calculations
var coffeePrice= 30;
var cookiesPrice = 19;
var tipDecimal =tipPercentage/100;
var totalPurch = (coffeePrice*coffee) + (cookiesPrice*cookies);
//tip is not taxable as it will goto the employee;
var tipCalc = (totalPurch*tipDecimal);
var totalVat = totalPurch*0.10; //tax
//total Amount
var fullAmt = totalPurch+totalVat+tipCalc;

console.log("Total Tip Amount R"+ fullAmt.toFixed(2));