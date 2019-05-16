var request = require('request')

const forecast = (latitude, longitude,  callback) => {
    const url = 'https://api.darksky.net/forecast/75c0ef0cf64a05706c9b195fee0686f9/' + encodeURIComponent(latitude) + ',' + + encodeURIComponent(longitude) + '?units=si&lang=fr'

    request({ url:url,  json:true }, (error, response) => {
        if(error){
            callback('Unable to connect to location service', undefined) // deux paramètre pour la fonctoin callback, ici data est défini à undefined car situation ou data fail
        }else if(response.body.error){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            const result = response.body.daily.data[0].summary + "Il fait actuellement " + response.body.currently.temperature + " degrés dehors. Il y a " + response.body.currently.precipProbability + "% de chance de pleuvoir."
            callback(undefined,result)
        }
    })
}

module.exports = forecast