const prompt = require("prompt-sync")();
condition=true


console.log("Hello! I'm a calculator!\nWhat operation do you need me to do?\n");

let operation 
let firstNumber 
let secondNumber
let result
 
while(condition){

    let operation =prompt("Enter your operation: + , -, *, /, %: ");

    if (operation !=="+" && operation !=="-" && operation !=="*" && operation!=="/" && operation!=="%" ){
        console.log("Invalid operator. Please enter one of +, -, *, /, %.")
        continue;
    }
    else{
        let firstNumber = prompt("Enter your first number: ");
        firstNumber=parseFloat(firstNumber)
        if (isNaN(firstNumber)){
            console.log("Invalid input. Please provide valid numbers.");
            continue;
        }
        let secondNumber = prompt("Enter the second number: ");
        secondNumber=parseFloat(secondNumber)
        if (isNaN(secondNumber)) {
            console.log("Invalid input. Please provide valid numbers.");
            continue;
        }
        else{

            if (operation === "+") {
                result =firstNumber + secondNumber;
            } else if (operation === "-") {
                result = firstNumber - secondNumber;
            } else if (operation === "*") {
                result = firstNumber * secondNumber;
            } else if (operation === "/") {
                result = firstNumber / secondNumber;
            } else if (operation === "%") {
                result = firstNumber % secondNumber;
            } 
            console.log(`The result of ${firstNumber} ${operation} ${secondNumber} = ${result}`);
            condition=false;
        }
    }
}
