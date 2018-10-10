// 1. card changes when the game stars and when the match buttons are pressed
// 2. score caculator caculates score
        //a. pushes schore to score tables
        //b. if statment to push to score tables
//3. interval timers for seting the game length
//4. settings event listeners from form.
//5. user inputs and validations form
//6. start, stop, pause game. 
//7 form default stop refresh
//8 document content loaded
//9 push new card to card image
//10 make standard card files
//11 match alert feedback answer
//12 prevent default setting change during nagiations and refreshing
//13 card link to image that they generate

// game operations timeline
// a. hit start
// aa.count up timer starts
// ab.count down limit starts
// b. alert starts and heading go hidden for gameplay
// 1. new card
// 2. event listner gets match or unmatch
// 3. alert feedback and sound
// 4. score caculates
// 98 pause and unpause game function
// 99 game limits or stop button unhides heading and game ends caculate score and push to scores scores table

// Settings Page
// form input and settings stop refressh with default()
// input validation
// Grap input value 
// grap settings values

// Score Page
// connection to data tables
// conditional logic to place highest score
// conditional logic to place recent score
// conditional logic to push down 




const myFile = `${__dirname}/myFile.txt`
const path = require('path')
const myFile = path.join(__dirname, 'myFile.txt')
<script src="jquery-3.3.1.min.js"></script>
var element = document.getElementById(id);
document.addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});


<button id='pauseButton' type="button" class='button hover active'>Pause</button>

id='startButton'
let startB = document.getElementById('startButton')
let start = startB('clink', function(){

// run alert count down over card/ 3 2 1
//then start game

})

id='pauseButton'
let pauseB = document.getElementById('pauseButton')
let stop = stopB('clink', function(){

})

id='stopButton'
let stopB = document.getElementById('stopButton')
let stop = stopB('clink', function(){

})

id='timer'
let gameTimer = document.getElementById('timer')
let timer = gameTimer('clink', function(){
// interval count down timer to stop the game. 
})

id='score'
let gScore = document.getElementById('score')
let score = gScore('clink', function(){

})

id='card'
let gameCard = document.getElementById('card')
let card = gameCard('clink', function(){

})

id='yesMatch'
let yesB = document.getElementById('yesMatch')
let yes = yesB('clink', function(){
//runds loop and checks to see if the card matched. run right or wrong alert. loop updates score
})

id='noMatch'
let noB = document.getElementById('noMatch')
let no = noB('clink', function(){
//runds loop and checks to see if the card matched. run right or wrong alert. loop updates score

})

let newCard =
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


let blankCards = [
    {card:'link1'}, 
    {card:'link2'},
    {card:'link3'},
    {card:'link4'}, 
    {card:'link5'},
    {card:'link6'}, 
    {card:'link7'},
    {card:'link8'},
    {card:'link9'}, 
    {card:'link10'},
    {card:'link11'}, 
    {card:'link12'},
    {card:'link13'},
    {card:'link14'}, 
    {card:'link15'},
    {card:'link16'}, 
    {card:'link17'},
    {card:'link18'},
    {card:'link19'}, 
    {card:'link20'},
]

let deckSize = 5
let rematch = 3
randomizer(arrCards,20,20)
function randomizer(arrCards, cycles, time, deckSize) {
let loop = 0
let picker = 0
let card = arrCards[picker]['card']
let numCorrect = 0
let perCorrect = numCorrect/cycles *100 
    for (var i = 0; i <= cycles; i++) {
        picker = Math.floor(Math.random()*rematch)
        if (picker === 0) {
        loop +=1






        } else if (picker !== 0) {
        picker = Math.floor(Math.random()*deckSize)
        loop +=1
        card = arrCards[picker]['card']
        }




    }

    //time limit kicks in
    // final score caculation
return card
}

