// récupère les variables du fichier dans utilsVar
//const utilsVar = require('./utils.js')
//console.log(utilsVar.concatName)
const chalk = require('chalk');
const getNotes = require('./notes.js')

/*const msg = getNotes()
console.log(msg)

//console.log(validator.isURL('https://www.qwant.com/?q=npm+js&client=ext-chrome-sb'))

console.log(chalk.red.inverse('Error'));
console.log(process.argv[2])*/
console.log(process.argv)
const command = process.argv[2]

switch (command) {
    case 'add':
        console.log('add note !')
        break;
    case 'remove':
        console.log('remove note ...')
}
