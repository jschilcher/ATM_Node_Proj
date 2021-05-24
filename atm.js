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

let bankBalance = account.balance;
function getCurrentBalance(bankBalance){
    console.log(bankBalance);
}

function makeWithDrawl(userWithDrawl){
    // let userWithDrawl = prompt("How much would you like to withdrawl?");
    return subtractTwoNumbers(bankBalance, userWithDrawl);
}

function makeADeposit(userDeposit){
    // let userDeposit = prompt("How much would you like to deposit?");
    return addTwoNumbers(bankBalance, userDeposit);
}

function timeToExit(string){
    let userInput = prompt("Is there anything else you would like to do today?");
    userInput = string
    if(userInput == "yes"){
        atmMenu
    }
    else if(string == "no"){
        console.log("Have an AMAZING day!! Goodbye!")
    }
    else{
        console.log("I am sorry I didn't recognize that.  Goodbye.")
    }
}

function subtractTwoNumbers(numberOne, numberTwo){
    return numberOne - parseInt(numberTwo);
}

function addTwoNumbers(numberOne, numberTwo){
    return numberOne + parseInt(numberTwo);
}

module.exports.validate = validateUserPin;
module.exports.getBalance = getCurrentBalance;
module.exports.withdrawl = makeWithDrawl;
module.exports.deposit = makeADeposit;
module.exports.exit = timeToExit;
module.exports.balance = bankBalance;
