const fs = require('fs')

//fs.writeFileSync('notes.txt', 'Le mec il change de texte')
try{
    fs.appendFileSync('notes.txt', "J'ai fait mon test");
    console.log('Data appended');
} catch (err) {
    console.log(err);
}
