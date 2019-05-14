const fs = require('fs')
const chalk = require('chalk');

const addNote = (title, body) => {
    const notes = loadNotes()
    //stock tout les doublons
    //const duplicateNotes = notes.filter((note) => note.title === title) // itère sur chaque contenu jusqu'a la fin
    const duplicateNote = notes.find((note) => note.title === title)    // s'arrète après avoir trouvé

    if(!duplicateNote){
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

const loadNotes = () => {
    try {
        const dataString = fs.readFileSync('notes.json').toString()
        const data = JSON.parse(dataString)
        return data
    } catch (e) {
        return []
    }
}

const saveNotes = (notes) =>{
        const dataFormatToSave = JSON.stringify(notes)
        fs.writeFileSync('notes.json',dataFormatToSave)
}

const deleteNote = (title) => {
    const notes = loadNotes()

    // méthode cours --> regénère une nouvelle liste dans le champ----------------------
    const NotesToKeep = notes.filter((note) => note.title !== title)

    if(notes.length > NotesToKeep.length){
        console.log(chalk.green.inverse('Notes removed !'))
        saveNotes(NotesToKeep)
    }else{
        console.log(chalk.red.inverse('No note found !'))
    }


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

}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your notes '))
    notes.forEach((note)=>{
        console.log(note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log(chalk.blue.inverse(note.title) + ' : ' + note.body)
    }else{
        console.log(chalk.red.inverse('Note not found'))
    }
}

module.exports = {
    addNote : addNote,
    deleteNote : deleteNote,
    listNotes : listNotes,
    readNote: readNote
}