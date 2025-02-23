 //1. Create a function that runs the following
//
//2. Pass and age through an argument/parameter
//
//
//4. call (activate) the function  


//const readline = require('readline-sync')

// IF ELSE STATEMENT

let age = readline.question("What is your age? ")



const verifyAge = (age) => {
    if (age >= 20) {

        console.log("You an adult.");    
    
    } else if (age >= 13 && age <= 19) {
    
        console.log("You are a teenager.");    
    
    } else  {
    
        console.log("You are a child.");
    
    }
         
}

verifyAge(15) //nothing but the Hive babi
