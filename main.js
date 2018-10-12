document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");

    let catCards = [{
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-1.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-2.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-3.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-4.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-5.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-6.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-7.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-8.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-9.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-10.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-11.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-12.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-13.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-14.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-15.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-16.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-17.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-18.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-19.jpg'
    },
    {
        card: '/Image Files/Cat Cards/Funny-Cat-Pictures-with-Captions-20.jpg'
    },
]
    let highScores = [{
    'Player Name': 'Player 1',
    'Cards Correct % Minute': 0,
    'Cards Correct % Second': 0,
    'Cards Correct %': 0,
    'Cards Correct # Minute': 0,
    'Cards Correct # Second': 0,
    'Cards # Minute': 0,
    'Cards # Second': 0,
    'Game Time': 0,
    'Card Cycles': 0,
    'Deck Size': 0,
    'Rematch': 0,
    }]
    let recentScores = [{ 
    'Player Name': 'Player 1',
    'Cards Correct % Minute': 0,
    'Cards Correct % Second': 0,
    'Cards Correct %': 0,
    'Cards Correct # Minute': 0,
    'Cards Correct # Second': 0,
    'Cards # Minute': 0,
    'Cards # Second': 0,
    'Game Time': 0,
    'Card Cycles': 0,
    'Deck Size': 0,
    'Rematch': 0,
    }]
    let currentScore = {
    'Player Name': 'Player 1',
    'Cards Correct % Minute': 0,
    'Cards Correct % Second': 0,
    'Cards Correct %': 0,
    'Cards Correct # Minute': 0,
    'Cards Correct # Second': 0,
    'Cards # Minute': 0,
    'Cards # Second': 0,
    'Game Time': 0,
    'Card Cycles': 0,
    'Deck Size': 0,
    'Rematch': 0,
    }

    function scoreUpdate(currentScore) {
    currentScore = {
    'Player Name': 'Player 1',
    'Cards Correct % Minute': 0,
    'Cards Correct % Second': 0,
    'Cards Correct %': 0,
    'Cards Correct # Minute': 0,
    'Cards Correct # Second': 0,
    'Cards # Minute': 0,
    'Cards # Second': 0,
    'Game Time': 0,
    'Card Cycles': loop,
    'Deck Size': deckSize,
    'Rematch': rematch,
    }

    



    recentScores.unshift(currentScore)

// document.getElementById("Recent Score").lastChild.appendChild(tr)
// document.getElementById("myList1").appendChild(reUpdate);



    if (recentScores.length === 50) {
        recentScores.pop()
    }

    for (var i = 0; i < highScores.length; i++){
        if (highScores[i]['Cards Correct % Minute'] < currentScore['Cards Correct % Minute']) {
        highScores.splice(i,0,currentScore)
        break
        }
        if (highScores.length === 50) {
        highScores.pop()
        
        }
    } 
    }

    
    

    let deckSize = 20
    let gameTimer = 0
    let loop = 0
    let cycles = 0
    let picker = 0
    let card = catCards[picker]['card']
    let numCorrect = 0
    let perCorrect = (numCorrect / loop)
    let oldCard = catCards[0]['card']
    let newCard = catCards[picker]['card']
    let time = 0
    let cardCycles = 50
    let cardMatches = 10
    let rematch = 3
    
    document.getElementById('yesMatch').disabled = true;
    document.getElementById('noMatch').disabled = true;
    document.getElementById('stopButton').disabled = true;

    document.getElementById('startButton').addEventListener('click', function () {
        console.log('start button', 'start game conditions')
        document.getElementById('startButton').disabled = true;
        document.getElementById('stopButton').disabled = false;
        document.getElementById('yesMatch').disabled = false;
        document.getElementById('noMatch').disabled = false;
    })


    document.getElementById('stopButton').addEventListener('click', function () {
        console.log('stop button', 'score')
        
        document.getElementById('startButton').disabled = false;
        document.getElementById('stopButton').disabled = true;
        document.getElementById('yesMatch').disabled = true;
        document.getElementById('noMatch').disabled = true;
        perCorrect = (numCorrect / loop) *100 
        console.log(numCorrect, loop, perCorrect)
        scoreUpdate(currentScore)
        console.log(currentScore)
        let scoreLocal = JSON.stringify(currentScore)
        localStorage.setItem('currentScore',scoreLocal)
        loop = 0
        picker = 0
        card = catCards[picker]['card']
        numCorrect = 0
        perCorrect = (numCorrect / loop)
        oldCard = catCards[0]['card']
        newCard = catCards[picker]['card']
        time = 0
        cycles = 0
    })

    randomizer(catCards, deckSize, rematch)
    function randomizer(cardArr, deckSize, rematch) {
        document.getElementById('yesMatch').addEventListener('click', function () {
            if (oldCard === newCard) {
                numCorrect += 1
            }
            oldCard = newCard

            if (cardCycles > 0) {
                if (cardCycles === loop) {
                    console.log('stop condition Card Cycles', 'score')
                    loop = 0
                    picker = 0
                    card = catCards[picker]['card']
                    numCorrect = 0
                    perCorrect = (numCorrect / loop)
                    oldCard = catCards[0]['card']
                    newCard = catCards[picker]['card']
                    time = 0
                    cycles = 0
                    document.getElementById('startButton').disabled = false;
                    document.getElementById('stopButton').disabled = true;
                    document.getElementById('yesMatch').disabled = true;
                    document.getElementById('noMatch').disabled = true;
                    
                }
            }
            if (cardMatches > 0) {
                if (cardMatches === numCorrect) {
                    console.log('stop condition Card Cycles', 'score')
                    loop = 0
                    picker = 0
                    card = catCards[picker]['card']
                    numCorrect = 0
                    perCorrect = (numCorrect / loop)
                    oldCard = catCards[0]['card']
                    newCard = catCards[picker]['card']
                    time = 0
                    cycles = 0
                    document.getElementById('startButton').disabled = false;
                    document.getElementById('stopButton').disabled = true;
                    document.getElementById('yesMatch').disabled = true;
                    document.getElementById('noMatch').disabled = true;
                    
                }
            }

            picker = Math.floor(Math.random() * rematch)
            if (picker === 0) {
                loop += 1
                console.log("loop Yes Rematch", loop, "picker", picker)
            } else if (picker !== 0) {
                picker = Math.floor(Math.random() * deckSize)
                loop += 1
                console.log("loop Yes New Card", loop, "picker", picker)

                document.getElementById('card').src = catCards[picker]['card']
                newCard = catCards[picker]['card']

            }
            console.log(numCorrect)
        })

        document.getElementById('noMatch').addEventListener('click', function () {
            if (oldCard !== newCard) {
                numCorrect += 1
            }
            oldCard = newCard

            if (cardCycles > 0) {
                if (cardCycles === loop) {
                    console.log('stop condition Card Cycles', 'score')
                    loop = 0
                    picker = 0
                    card = catCards[picker]['card']
                    numCorrect = 0
                    perCorrect = (numCorrect / loop)
                    oldCard = catCards[0]['card']
                    newCard = catCards[picker]['card']
                    time = 0
                    cycles = 0
                    document.getElementById('startButton').disabled = false;
                    document.getElementById('stopButton').disabled = true;
                    document.getElementById('yesMatch').disabled = true;
                    document.getElementById('noMatch').disabled = true;
                    
                }
            }
            if (cardMatches > 0) {
                if (cardMatches === numCorrect) {
                    console.log('stop condition Card Cycles', 'score')
                    loop = 0
                    picker = 0
                    card = catCards[picker]['card']
                    numCorrect = 0
                    perCorrect = (numCorrect / loop)
                    oldCard = catCards[0]['card']
                    newCard = catCards[picker]['card']
                    time = 0
                    cycles = 0
                    document.getElementById('startButton').disabled = false;
                    document.getElementById('stopButton').disabled = true;
                    document.getElementById('yesMatch').disabled = true;
                    document.getElementById('noMatch').disabled = true;
                    
                }
            }

            picker = Math.floor(Math.random() * rematch)
            if (picker === 0) {
                loop += 1
                console.log("loop No Rematch", loop, "picker", picker)
            } else if (picker !== 0) {
                picker = Math.floor(Math.random() * deckSize)
                loop += 1
                console.log("loop No New Card", loop, "picker", picker)

                document.getElementById('card').src = catCards[picker]['card']
                newCard = catCards[picker]['card']

            }
            console.log(numCorrect)
        })

    }

})