const defaults = (test = 'User') => {  // set une valeur par défault à la focntion
    console.log(test)
}

const defaults = (  {user, age} = {}) => {  // set une valeur par pour l'objet, sinon crash car ne peut pas déstructurer n objet qui existe pas
    console.log(test, age)
}