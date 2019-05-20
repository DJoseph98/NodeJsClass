const path =  require('path')   //lib de nodeJS pour gérer les assets
const express = require('express')
const hbs = require('hbs')
// console.log(__dirname)
// console.log(path.join(__dirname, '../public'))

const app = express()

// Path Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views') // nom du nouveau dossier à utiliser à la place de views
const partialsPath = path.join(__dirname, '../templates/partials')

// Configuration of handlebars and views location
app.set('views', viewsPath) // remplacement de l'ancien nom en nouveau
app.set('view engine', 'hbs') // use le template hbs pour le moteur de views ('views engine')
hbs.registerPartials(partialsPath)

//Static directory
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => { // controller + route
  res.render('index',
      {             // render comme synfony, on lui passe un objet en second argument
          title: 'Meteo',
          name: 'Didier'
      })
})

app.get('/about', (req, res) => { // controller + route
    res.render('about',
        {             // render comme synfony, on lui passe un objet en second argument
            title: 'About',
            name: 'Didier'
        })
})

app.get('/help', (req, res) => { // controller + route
    res.render('help',
        {             // render comme synfony, on lui passe un objet en second argument
            title: 'Help',
            name: 'Didier'
        })
})

app.get('/weather', (req, res) => { // controller + route
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
