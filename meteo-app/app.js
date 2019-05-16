const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const city = process.argv[2] // argv est ce que nous écrivons dans la console après notre fichier

if (city) {
    geocode(city, (error, dataGeocode) => {  // convention 2 arguments error + data pour des fonctions de callback
        if (error) {
            return console.log(error)
        }
        forecast(dataGeocode.latitude, dataGeocode.longitude, (error, forecastData) => {  // convention 2 arguments error + data pour des fonctions de callback
            if (error) {
                return console.log(error)
            }

            console.log(dataGeocode.location)
            console.log(forecastData)
        })
    })
} else {
    console.log('Enter a location !')
}

