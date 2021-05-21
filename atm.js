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

module.exports.validate = validateUserPin;
module.exports.getBalance = getCurrentBalance;