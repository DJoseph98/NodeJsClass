var request = require('request')

const geocode = (adress, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(adress) + '.json?access_token=pk.eyJ1IjoiZHlkZXJzbnlwZXIiLCJhIjoiY2p2cGNhdTRxMWZpNDRhdm42NXdhcWR0biJ9.VXf9Cs-xVTcI2fhRpwwMUA&limit=1'

    request({ url:url,  json:true }, (error, response) => {
        if(error){
            callback('Unable to connect to location service', undefined) // deux paramètre pour la fonctoin callback, ici data est défini à undefined car situation ou data fail
        }else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search.', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].text
            })
        }
    })
}

module.exports = geocode