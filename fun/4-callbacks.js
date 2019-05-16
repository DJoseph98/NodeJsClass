// setTimeout(() => {
//     console.log('2 second are up')
// }, 2000)
//
// const names = ['dzadazd', 'dza', 'dzadaz']
// const shortNames = names.filter((name) => {
//     return name.length <= 4
// })
// const geocode = (adress, callback) => {
//
//     setTimeout(() => {
//         const data = {
//             latitude:0,
//             longitude:0
//         }
//        callback(data)
//     }, 2000)
//
// }
//
// geocode('test', (data) => {
//     console.log(data)
// })

const add = (a, b, callback ) => {
    setTimeout(() => {
         const sum = a + b
        callback(sum)
     }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})