
/* 
Create a JavaScript code that will determine if the input type is even or odd.

MAIN GOAL:
Perform a Nested If for this scenario.
Enclose inside the function.
When a user input a word, it will display “Unexpected Input”
When a user inputs none, it will display “Please input inside the box”.
When a user inputs a valid number, it will display even or odd.



*/



 function oddEven(num){
    if(isNaN (num) || typeof parseInt (num) !== "number"){
        //isNan - determines whether a values is NaN (not a number) or a number
        return `Unexpected Input`;
     }

    else if (num === '') {
        return "Please input inside the box";
   }

    else {
        if (num % 2 == 0)
       {
            return ("Even Number");
        }
        else {
            return ("Odd Number");
        }
    }
 }

 let userInput = prompt ("Give Me a Number");
console.log(oddEven(userInput));




