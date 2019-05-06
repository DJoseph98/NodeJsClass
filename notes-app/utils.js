const name='Didier'
const firstname ='Joseph'

const add = function(a,b){
    return a + b
}

const concat =  function(a,b){
    return a + ' ' + b
}
//rend accessible les variables du fichier depuis d'autres fichiers
module.exports = { name: name, firstname: firstname, add: add, concat: concat , concatName: concat(firstname, name)}