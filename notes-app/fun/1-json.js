const fs = require('fs')
const book = {
    title:'Karma-Sutra',
    author:'Steve Abdel Karim'
}

const bookJSON = JSON.stringify(book)
// écrit dans json fichier
fs.writeFileSync('1-json.json', bookJSON)

// // String to object
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)
//
// // Object to string
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.author)