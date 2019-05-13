const book = {
    title:'Karma-Sutra',
    author:'Steve Abdel Karim'
}

// String to object
const bookJSON = JSON.stringify(book)
console.log(bookJSON)

// Object to string
const parsedData = JSON.parse(bookJSON)
console.log(parsedData.author)