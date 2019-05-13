const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json') // récupère fichier
const dataJSON = dataBuffer.toString() // convertie en string
const data = JSON.parse(dataJSON) // parse en objet
console.log(data)