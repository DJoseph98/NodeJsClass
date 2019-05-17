const path =  require('path')   //lib de nodeJS pour gérer les assets
const express = require('express')

// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')

app.use(express.static(publicDirectoryPath))

app.get('/weather', (req, res) => { // controller
    res.send([{
        lat: 25,
        long: 23
    }, {
        city: 'Monaco'
    }])
})

app.listen(3000, () =>{  //port server
    console.log('Server is up on port 3000.')
})
