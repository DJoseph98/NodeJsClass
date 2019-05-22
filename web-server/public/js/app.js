const weatherForm = document.querySelector('form') //selectionne le formulaire form
const locationInput = document.querySelector('input') // selectionne l'input du formulaire

const fecthForecast = (location) => {
    const locationEncode = encodeURI(location)
    fetch('http://localhost:3000/weather?adress=' + locationEncode).then((response) => {
        response.json().then( (data) => {
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data.forecast)
            }

        })
    })
}

weatherForm.addEventListener( 'submit', (e) => { // creation evenement submit form
    e.preventDefault()      //permet de ne pas réactualiser la page après submit
    const location = locationInput.value

    fecthForecast(location)

})