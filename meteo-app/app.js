const geocode = require('./utils/geocode')

geocode('Monaco', (error, data) => {  // convention 2 arguments error + data pour des fonctions de callback
    console.log("Error", error)
    console.log("Data", data)
})