const fs = require('fs')
const chalk = require('chalk');
const addNote = function(title, body){
    const notes = loadNotes()
    //stock tout les doublons
    const duplicateNotes = notes.filter(function(note){ // filtre données tableau
        return note.title === title // retourne true si exist
    })

    if(duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('Notes addes !'))
    }else{
        console.log(chalk.red.inverse('Note title taken, abort saving'))
    }

}

const loadNotes = function() {
    try {
        const dataString = fs.readFileSync('notes.json').toString()
        const data = JSON.parse(dataString)
        return data
    } catch (e) {
        return []
    }
}

const saveNotes = function(notes){
        const dataFormatToSave = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataFormatToSave)
}

const deleteNote = function(title){
    const notes = loadNotes()

    // //methode 1 moi + internet --> garde la liste et supprime le champ-----------------------------------------
    // const duplicateNotes = notes.filter(function(note){ // filtre données tableau
    //     return note.title === title // retourne true si exist
    // })
    //
    // if(duplicateNotes.length === 1){
    //     notes.splice(notes.findIndex(e => e.name === duplicateNotes.title),1);
    //     saveNotes(duplicateNotes)
    //     console.log(chalk.green.inverse('Notes removed !'))
    // }else{
    //     console.log(chalk.red.inverse('No note found !'))
    // }
    // //----------------------------------------------------------

    // méthode cours --> regénère une nouvelle liste dans le champ----------------------
    const NotesToKeep = notes.filter(function(note){
        return note.title !== title
    })
    if(notes.length > NotesToKeep.length){
        console.log(chalk.green.inverse('Notes removed !'))
        saveNotes(NotesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found !'))
    }

}

module.exports = {
    addNote : addNote,
    deleteNote : deleteNote
}