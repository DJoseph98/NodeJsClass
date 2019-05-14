// const square = function(x){
//     return x*x              -------------------> fonction classique
// }

// const square = (x) => {
//     return x*x              -------------------> fonction arrow à utiliser quand grosse fonction
// }

//const square = (x) => x*x    -------------------> fonction à utiliser quand fonction simple / retourne automatiquement le résultat

//console.log(square(4))

const event ={
    name:'Birthday Party',
    guestList: ['Dyder', 'Anna', 'Maxime'],
    // printGuestList : function(){                  --> écriture classique
    //     console.log('Guest list for ' + this.name)
    // }
    printGuestList(){                               //---> écriture raccourci
        console.log('Guest list for ' + this.name)

        // this.guestList.forEach(function (guest){
        //     console.log(guest + ' is attending ' + this.name) //----> impossible d'accéder à this.name car à l'intérieur d'une fonction et ne connait pas this
        // })

        this.guestList.forEach((guest)=>{
            console.log(guest + ' is attending ' + this.name)   //------> this.name accessible car fonction arrox utilisé, la fonction arrow utilise les paramètre existant la ou elle a été instancié
        })
    }
}

event.printGuestList()