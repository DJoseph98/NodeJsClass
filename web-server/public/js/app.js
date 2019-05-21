console.log('Client side javascript')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?adress=Boston').then((response) => {
        response.json().then( (data) => {
            if(data.error){
                console.log(data.error)
            }else{
                console.log(data.forecast)
            }

        })
})