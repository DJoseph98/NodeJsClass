// Object property shorthand

// const user = {
//     name: name,
//     age: userAge,
//     location : 'Monaco'
// }

const user = {
    name: 'dza',
    age: 'dzadz',
    location : 'Monaco',
    test : [
        {
            place: 'caca',
            test2 : 'toto'}
    ]
}

// Object destructuring

const {name, age, location} = user // on peut maintenant utiliser les propriété de l'objet comme variable classique
console.log(name, age, location, test)

// const {name: productName, age, location} = user // on peut rename la propriété avec un nouveau pour éviter les conflits
// console.log(productName)

// const {name: productName, age, location, varexistepas = 5} = user // on peut set des variables avec une valeur par défault si la propriété existe pas
// console.log(varexistepas)

// const fonctionAvecDestructurationObjet = (type, { name, age }) => { // Accède au propriété de l'objet directement dans les paramètres de la fonction
// //     console.log(type, name, age)
// // }
// //
// // fonctionAvecDestructurationObjet('test', user)