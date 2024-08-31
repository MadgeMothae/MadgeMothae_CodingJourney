//                                                      TIP CALCULATOR

console.log("Hello, Welcome to the coffee shop! Thank you for coming to join us today.");
var billTotal = parseFloat(prompt("What is the total of the bill?"));
var billPerc = parseFloat(prompt("How much tip percentage would you like to leave? 10, 15 or 20?"));
var patrons = parseInt(prompt("How many of you will be splitting the bill?"));
var totalTip = billTotal*(billPerc/100);
var totalCalc = (billTotal+totalTip)/patrons
console.log(totalCalc);
