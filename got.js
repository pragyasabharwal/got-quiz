const chalk = require('Chalk')
const log = console.log

log(chalk.bgBlue("Winter is here. And we welcome you to a GoT Quiz to test your knowledge\n"))

var readlineSync = require("readline-sync")

var response = readlineSync.question(chalk.bold.white.bgBlue("Are you ready? (Yes/No) "))
console.log("\n")

{
    if (response.toUpperCase() === "YES") {
        var userName = question.log(chalk.magenta("What is your name?"))
        console.log("\n") 
        log(chalk.bgBlue("Hi " + userName + ". Let the game begin!")) 
        console.log("\n") 
        log(chalk.black.bgYellowBright("There will be three options for every question. Choose any three of the options by writing a b or c.\n"))

        score=0;
        
        }
    }