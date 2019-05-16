const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Monaco', (error, data) => {  // convention 2 arguments error + data pour des fonctions de callback
    console.log("Error", error)
    console.log("Data", data)
})

forecast(43, 7, (error, data) => {  // convention 2 arguments error + data pour des fonctions de callback
    console.log("Error", error)
    console.log("Data", data)
})