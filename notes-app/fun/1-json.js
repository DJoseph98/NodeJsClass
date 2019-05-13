const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJson = dataBuffer.toString()

console.log(dataBuffer) // data buffer
console.log(dataBuffer.toString()) // data buffer parser en string