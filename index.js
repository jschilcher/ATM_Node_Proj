"use strict";
const atm = require("./atm");

const prompt = require("prompt-sync")();

console.log("Hello!");

console.log("Please enter pin");

let enteredPin = prompt();

atm.validate(enteredPin);

let atmMenu = prompt("What would you like to do? check balance, withdraw, deposit, or exit?");

switch(atmMenu){
    case "check balance":
        console.log(atm.balance);
        // timeToExit(string);
        break;
    case "withdraw":
        let userWithDrawl = prompt("How much would you like to withdrawl?");
        let newBalance = atm.withdrawl(userWithDrawl);
        console.log(newBalance);
        // atm.exit(string);
        break;
    case "deposit":
        let userDeposit = prompt("How much would you like to deposit?");
        let balanceAfterDeposit = atm.deposit(userDeposit);
        console.log(balanceAfterDeposit);
        break;
    case "exit":
        console.log("Have a great day!");
}
