const figlet = require("figlet")
const chalk = require("chalk")
const cowsay = require("cowsay")
var giveMeAJoke = require('give-me-a-joke');



// console.log(chalk.red("OK"))

// figlet.text("Helloo ji", 
//      {
//     font: "Ghost",
//     horizontalLayout: "default",
//     verticalLayout: "default",
//     width: 80,
//     whitespaceBreak: true,
//   }
//     ,(err, data) => {
//     console.log(chalk.blue(data))
// })

console.log(cowsay.say({
    text : "Hello ji",
    e : "xx",
    T : "U "
}))


giveMeAJoke.getRandomDadJoke((j) => {
    console.log(j)
})
