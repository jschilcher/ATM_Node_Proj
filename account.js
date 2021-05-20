"use strict";

const prompt = require("prompt-sync")();

let userPin = 1234;

const enteredPin = prompt()

function validateUserPin(enteredPin){
    console.log("Please enter pin")
    while(parseInt(enteredPin) != userPin){
        prompt("Please enter correct pin");
    }    
    if(parseInt(enteredPin) = userPin){
        console.log("User Validated.")
        break;
    }
}

let bankAccountBalance = 4000;

module.exports.pin = userPin;
module.exports.validate = validateUserPin;
module.exports.balance = bankAccountBalance;