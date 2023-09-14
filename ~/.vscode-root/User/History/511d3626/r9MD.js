/* function RickAshley() {
    let repsonse = prompt("Do you like Rick Ashley");
    let message = "I have given you up!";

    if(repsonse || repsonse.toLowerCase === "yes") {
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ/embed/VIDEO_ID?autoplay=1";
    } else if (repsonse || repsonse.toLowerCase === "no") {
        document.write(message); 
    }
    
}  */


/* Write a function that takes two numbers as a parameter, adds them together
    and returns (either in the console or page) the result.*/


    function myNumbers(num1, num2) {
        document.write(num1 + num2);
    }

/* Update the function to take a third parameter, that will change which
    mathematical operator will be used */

    function newOperator(num1, num2, mathOperator) {
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

    /* Update your function so that a user can give each arguments value 
       in a prompt */

       function finalSolution() {
        let answer = prompt("Do you ");
    
        if(answer == "add") {
            return num1 + num2;
        } else if (answer === "Multply") {
            return num1 * num2;
        }
        
       }




