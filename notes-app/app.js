// récupère les variables du fichier dans utilsVar
//const utilsVar = require('./utils.js')
//console.log(utilsVar.concatName)
const chalk = require('chalk');
const getNotes = require('./notes.js')
const yargs = require('yargs')

//create add command

yargs.version('1.1.0')

//Add command
yargs.command({
    command: 'add',
    describe: 'Add new note',
    handler: function () {
        console.log('Adding note')
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing note',
    handler: function () {
        console.log('note removed')
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler: function () {
        console.log('note list :')
    }
})

yargs.command({
    command: 'read',
    describe: 'remove note',
    handler: function () {
        console.log('read note')
    }
})

console.log(yargs.argv)