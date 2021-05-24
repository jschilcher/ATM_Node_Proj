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
        console.log();
        timeToExit(userInput);
        break;
    case "withdraw":
        let userWithDrawl = prompt("How much would you like to withdrawl?");
        let newBalance = atm.withdrawl(userWithDrawl);
        console.log(newBalance);
        let userInput = prompt("Is there anything else you would like to do today?");
        atm.exit(userInput);
        break;
    case "deposit":
        break;
    case "exit":

}
