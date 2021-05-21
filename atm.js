"use strict";

const account = require("./account");

const prompt = require("prompt-sync")();

function validateUserPin(enteredPin){
    while(enteredPin != account.pin){
        enteredPin = prompt("Please enter correct pin");       
    }
    if(enteredPin == account.pin){
        console.log("User Validated.")
    }    
}

function getCurrentBalance(balance){
    console.log(account.balance);
}

function makeWithDrawl(userInput){
    let userInput = prompt("How much would you like to withdrawl?");
    return subtractTwoNumbers(getCurrentBalance(balance), userInput);
}

function makeADeposit(userInput){
    let userInput = prompt("How much would you like to deposit?");
    return addTwoNumbers(getCurrentBalance(balance), userInput);
}

function subtractTwoNumbers(numberOne, numberTwo){
    return numberOne - numberTwo;
}

function addTwoNumbers(numberOne, numberTwo){
    return numberOne + numberTwo;
}

module.exports.validate = validateUserPin;
module.exports.getBalance = getCurrentBalance;
module.exports.withdrawl = makeWithDrawl;
module.exports.deposit = makeWithDrawl;