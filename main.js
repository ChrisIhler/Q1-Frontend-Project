console.log('you rock you awesome guy you')

// set timer
// set card deck
// radomize card deck population
// matching function
// user info
// calculation score
// pick cards and populate them
// how many cards choices


let arrCards = [
    {card:'link1'}, 
    {card:'link2'},
    {card:'link3'},
    {card:'link4'}, 
    {card:'link5'},
]

randomizer(arrCards,20,20)
function randomizer(arrCards, cycles, time) {
let loop = 0
let picker = 0
let card = arrCards[picker]['card']
    for (var i = 0; i <= cycles; i++) {
        picker = Math.floor(Math.random()*3)
        if (picker === 0) {
        loop +=1
        } else if (picker !== 0) {
        picker = Math.floor(Math.random()*5)
        loop +=1
        card = arrCards[picker]['card']
        }  
    }
return card
}