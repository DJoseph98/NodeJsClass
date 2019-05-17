const express = require('express')

const app = express()

app.get('', (req, res) => { // controller
    res.send('Hello express!')
})

app.get('/help', (req, res) => { // controller
    res.send('Help page')
})

app.get('/about', (req, res) => { // controller
    res.send('About page')
})

app.get('/weather', (req, res) => { // controller
    res.send('weather app')
})

app.listen(3000, () =>{  //port server
    console.log('Server is up on port 3000.')
})
