// récupère les variables du fichier dans utilsVar
//const utilsVar = require('./utils.js')
//console.log(utilsVar.concatName)
const chalk = require('chalk');
const notes = require('./notes.js')
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
            demandOption: true,
            type: 'string'
        },
        body:{
          describe: 'description',
          demandOption: true,
          type: 'string'
        },
        //----
    },
    handler(argv){
      notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder:{
      title:{
          describe : 'Note title',
          demandOption: true,
          type: 'string'
      }

    },
    handler(argv) {
        notes.deleteNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'list notes',
    handler() {
        notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'remove note',
    builder:{
        title:{
            describe : 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


//console log yargs
yargs.parse()
