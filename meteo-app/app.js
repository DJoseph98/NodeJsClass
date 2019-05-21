const geocode = require('../web-server/src/utils/geocode')
const forecast = require('../web-server/src/utils/forecast')

const city = process.argv[2] // argv est ce que nous écrivons dans la console après notre fichier

if (city) {
    geocode(city, (error, {latitude, longitude, location} ) => {  // convention 2 arguments error + data pour des fonctions de callback
        if (error) {
            return console.log(error)
        }
        forecast(latitude, longitude, (error, forecastData) => {  // convention 2 arguments error + data pour des fonctions de callback
            if (error) {
                return console.log(error)
            }

            console.log(location)
            console.log(forecastData)
        })
    })
} else {
    console.log('Enter a location !')
}

