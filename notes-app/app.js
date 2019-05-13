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
    builder:{
        // OBJET-----
        title:{
            describe: 'Note title',
            demandOption: false,
            type: 'string'
        },
        body:{
          describe: 'description',
          demandOption: true,
          type: 'string'
        },
        //----
    },
    handler: function (argv) {
        console.log('Title: ',argv.title)
        console.log('Description : ',argv.description)
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

//console log yargs
yargs.parse()
