// récupère les variables du fichier dans utilsVar
//const utilsVar = require('./utils.js')
//console.log(utilsVar.concatName)
const chalk = require('chalk');
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

//console.log(validator.isURL('https://www.qwant.com/?q=npm+js&client=ext-chrome-sb'))

console.log(chalk.red.inverse('Error'));

