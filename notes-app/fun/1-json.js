const fs = require('fs')

// const dataBuffer = fs.readFileSync('1-json.json') // récupère fichier
// const dataJSON = dataBuffer.toString() // convertie en string
// const data = JSON.parse(dataJSON) // parse en objet
// console.log(data)

const data = JSON.parse(fs.readFileSync('1-json.json').toString())
data.name="didier"
data.age=26
dataConvertToSave = JSON.stringify(data)
fs.writeFileSync('1-json.json', JSON.stringify(data))