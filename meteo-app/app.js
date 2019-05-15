var request = require('request')

// const urlSecretKeyMeteo = 'https://api.darksky.net/forecast/75c0ef0cf64a05706c9b195fee0686f9/43.73333,7.41667?units=si&lang=fr'
//
// request({ url:urlSecretKeyMeteo,  json:true }, (error, response) => { // peut pas y avoir les deux, si error est la , il n'y a pas de réponse, si response est la, il n'y pas d'error
//    if(error){
//        console.log('Unable to connect to weather service')
//    }else if(response.body.error){
//        console.log('Unable to test to weather service')
//    } else{
//         console.log(response.body.daily.data[0].summary + "- Il fait actuellement " + response.body.currently.temperature + " degrés dehors. Il y a " + response.body.currently.precipProbability + "% de chance de pleuvoir.")
//    }
//
// })



const urlSecretKeyLongLat = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Monaco.json?access_token=pk.eyJ1IjoiZHlkZXJzbnlwZXIiLCJhIjoiY2p2cGNhdTRxMWZpNDRhdm42NXdhcWR0biJ9.VXf9Cs-xVTcI2fhRpwwMUA&limit=1'
request({ url:urlSecretKeyLongLat,  json:true }, (error, response) => {
    if(error){
        console.log('Unable to connect to weather service')
    }else if(response.body.features.length === 0){
        console.log('Problem with URL weather service')
    }else{
        const lat = response.body.features[0].center[1]
        const long = response.body.features[0].center[0]
        const city = response.body.features[0].text
        console.log("lat : " + lat + " long : " + long + " of " + city)
    }
})