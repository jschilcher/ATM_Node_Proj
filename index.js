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
        atm.getBalance(balance);
        timeToExit(userInput);
        break;
    case "withdraw":
        break;
    case "deposit":
        break;
    case "exit":

}

function timeToExit(userInput){
    let userInput = prompt("Is there anything else you would like to do today?");
    if(userInput == "yes"){
        atmMenu
    }
    else if(userInput == "no"){
        console.log("Have an AMAZING day!! Goodbye!")
    }
    else{
        console.log("I am sorry I didn't recognize that.  Goodbye.")
    }
}