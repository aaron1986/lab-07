 function RickAshley() {
    let repsonse = prompt("Do you like Rick Ashley");
    let message = "I have given you up!";
    let error = "You must enter either yes or no.. you fool!";

    if(repsonse === "yes" || repsonse === "YES") {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ/embed/VIDEO_ID?autoplay=1";
    } else if (repsonse === "no" || repsonse === "NO") {
        document.write(message); 
    } else {
        document.write(error); 
    }
    
} 


/* Write a function that takes two numbers as a parameter, adds them together
    and returns (either in the console or page) the result.*/


 /*    function myNumbers(num1, num2) {
        document.write(num1 + num2);
    } */

/* Update the function to take a third parameter, that will change which
    mathematical operator will be used */

/*     function newOperator(num1, num2, mathOperator) {
        if(mathOperator === "add") {
            return num1 + num2;
        } else if(mathOperator === "Multiply") {
            return num1 * num2;
        } else if (mathOperator === "subtract") {
            return num1 - num2;
        } else if (mathOperator === "divide") {
            return num1 / num2;
        }
    }
 */
    /* Update your function so that a user can give each arguments value 
       in a prompt */

   /*     function finalSolution() {
        let answer1 = prompt("Enter 1st Number ");
        let number1 = parseInt(answer1);

        let answer2 = prompt("Enter 2nd Number ");
        let number2 = parseInt(answer2);
        

        let answer_operation = prompt("Which operator would you like use ");
    
        if(answer_operation || answer_operation.toLowerCase == "add") {
            document.write(number1 + number2);
        } else if (answer_operation || answer_operation.toLowerCase === "multply") {
            document.write(number1 * number2);
        } else if (answer_operation || answer_operation.toLowerCase == "subtract") {
            document.write(number1 - number2);
            //DOESN'T SHOW ZERO??
        } else if(answer_operation || answer_operation.toLowerCase == "divide") {
            document.write(number1 / number2);
        }

       }
 */



