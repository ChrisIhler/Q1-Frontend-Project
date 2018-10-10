// set timer
// set card deck
// radomize card deck population
// matching function
// user info
// calculation score
// pick cards and populate them
// how many cards choices

let catCards = [
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-1.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-2.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-3.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-4.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-5.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-6.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-7.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-8.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-9.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-10.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-11.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-12.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-13.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-14.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-15.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-16.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-17.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-18.jpg'},
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-19.jpg'}, 
    {card:'/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-20.jpg'},
]

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
 
// document.getElementById('yesMatch').addEventListener('click', function(event){
// console.log("hello")
// document.getElementById('card').src = arrCards[picker]['card']
// })





randomizer(catCards,20,20)
function randomizer(catCards, cycles, time) {

let loop = 0
let picker = 0
let card = catCards[picker]['card']
let numCorrect = 25
let perCorrect = numCorrect/cycles *100 
    for (var i = 0; i <= cycles; i++) {
        
        document.getElementById('yesMatch').addEventListener('click', function(event){
        console.log("loop")
        document.getElementById('card').src = catCards[picker]['card']
        })
        
        picker = Math.floor(Math.random()*3)
        if (picker === 0) {
        loop +=1
        
        } else if (picker !== 0) {
        picker = Math.floor(Math.random()*5)
        loop +=1
        


    }  
    }
}



});