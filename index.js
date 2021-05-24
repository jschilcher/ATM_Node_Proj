"use strict";
const atm = require("./atm");

const prompt = require("prompt-sync")();

console.log("Hello!");

console.log("Please enter pin");

let enteredPin = prompt();

atm.validate(enteredPin);

let atmMenu = promptFor("What would you like to do? check balance, withdraw, deposit, or exit?", chars);

switch(atmMenu){
    case "check balance":
        console.log(atm.balance);
        // timeToExit(string);
        break;
    case "withdraw":
        let userWithDrawl = promptFor("How much would you like to withdrawl?", chars);
        let newBalance = atm.withdrawl(userWithDrawl);
        console.log(newBalance);
        // atm.exit(string);
        break;
    case "deposit":
        let userDeposit = promptFor("How much would you like to deposit?", chars);
        let balanceAfterDeposit = atm.deposit(userDeposit);
        console.log(balanceAfterDeposit);
        break;
    case "exit":
        console.log("Have a great day!");
}

function promptFor(question, valid){
    do{
      var response = prompt(question).trim();
    } while(!response || !valid(response));
    return response;
  }

  function chars(input){
    return true; // default validation only
  }