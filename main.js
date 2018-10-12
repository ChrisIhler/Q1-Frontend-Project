document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");
  // console.log(JSON.parse(localStorage.getItem('userInfo')))
  // console.log(JSON.parse(localStorage.getItem('gameSetting')))

  document.getElementById('yesMatch').disabled = true;
  document.getElementById('noMatch').disabled = true;
  document.getElementById('stopButton').disabled = true;
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
    },
    {
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
  ]

  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  let gameSetting = JSON.parse(localStorage.getItem('gameSetting'))
  // console.log(userInfo,gameSetting)
  // let playerName1 = userInfo['First Name'] +" "+ userInfo['Last Name']

  let playerName1 = `${userInfo['First Name']} ${userInfo['Last Name']}`
  console.log(playerName1)
  let gameTime = `${gameSetting['Time']}`
  let cardCycles = `${gameSetting['Card Cycles']}`
  let rematch = `${gameSetting['Rematch']}`
  let cardDeckSize = `${gameSetting['Card Deck Size']}`
  let currentScore = {
    'Player Name': playerName1,
    'Cards Correct % Minute': 0,
    'Cards Correct % Second': 0,
    'Cards Correct %': 0,
    'Cards Correct # Minute': 0,
    'Cards Correct # Second': 0,
    'Cards # Minute': 0,
    'Cards # Second': 0,
    'Game Time': gameTime,
    'Card Cycles': cardCycles,
    'Deck Size': cardDeckSize,
    'Rematch': rematch,
  }
  console.log(currentScore)
  let loop = 0
  let cycles = 0
  let picker = 0
  let card = catCards[picker]['card']
  let numCorrect = 0
  let perCorrect = (numCorrect / loop)
  let oldCard = catCards[0]['card']
  let newCard = catCards[picker]['card']
  let time = 0

  if (JSON.parse(localStorage.getItem('recentScores')) !== null) {
  recentScores = JSON.parse(localStorage.getItem('recentScores'))}

  if (localStorage.getItem('highScores') !== null) {
    highScores = JSON.parse(localStorage.getItem('highScores'))}

  console.log('recent',recentScores)
  console.log('high',highScores)

  //updates new scores to arrays
  let scoreUpdating = function (currentScore, recentScores, highScores) {
    recentScores.unshift(currentScore)
    if (recentScores.length === 10) {
      recentScores.pop()
      localStorage.setItem('recentScores',JSON.stringify(recentScores))

    }
    for (var i = 0; i < highScores.length; i++) {
      if (highScores[i]['Cards Correct % Minute'] < currentScore['Cards Correct % Minute']) {
        highScores.splice(i, 0, currentScore)
        break
      }
      if (highScores.length === 10) {
        highScores.pop()
      }
      localStorage.setItem('recentScores',JSON.stringify(recentScores))
    }
  }

  let enableStartButton = function () {
    document.getElementById('startButton').disabled = true;
    document.getElementById('stopButton').disabled = false;
    document.getElementById('yesMatch').disabled = false;
    document.getElementById('noMatch').disabled = false;
  }

  let stopGameButton = function () {
    document.getElementById('startButton').disabled = false;
    document.getElementById('stopButton').disabled = true;
    document.getElementById('yesMatch').disabled = true;
    document.getElementById('noMatch').disabled = true;
  }

  //game starts
  document.getElementById('startButton').addEventListener('click', function () {
    console.log('start button', 'start game conditions')
    enableStartButton()
  })

  //game ends
  document.getElementById('stopButton').addEventListener('click', function () {
    console.log('stop button', 'score')
    stopGameButton()
    perCorrect = (numCorrect / loop) * 100
    console.log(numCorrect, loop, perCorrect)
    let scoreLocal = JSON.stringify(currentScore)
    localStorage.setItem('currentScore', scoreLocal)
    currentScore = {
      'Player Name': playerName1,
      'Cards Correct % Minute': 0,
      'Cards Correct % Second': 0,
      'Cards Correct %': (numCorrect / loop) * 100,
      'Cards Correct # Minute': 0,
      'Cards Correct # Second': 0,
      'Cards # Minute': 0,
      'Cards # Second': 0,
      'Game Time': gameTime,
      'Card Cycles': loop,
      'Deck Size': cardDeckSize,
      'Rematch': rematch,
    }
    console.log(currentScore)
    picker = 0
    card = catCards[picker]['card']
    numCorrect = 0
    perCorrect = 0
    oldCard = catCards[0]['card']
    newCard = catCards[picker]['card']
    time = 0
    cycles = 0
    scoreUpdating(currentScore, recentScores, highScores)
  })

  randomizer(catCards, cardDeckSize, rematch, cardCycles)

  function randomizer(catCards, cardDeckSize, rematch) {

    //Yes Button
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

          stopGameButton()

        }
      }



      picker = Math.floor(Math.random() * rematch)
      if (picker === 0) {
        loop += 1
        console.log("loop Yes Rematch", loop, "picker", picker)
      } else if (picker !== 0) {
        picker = Math.floor(Math.random() * cardDeckSize)
        loop += 1
        console.log("loop Yes New Card", loop, "picker", picker)

        document.getElementById('card').src = catCards[picker]['card']
        newCard = catCards[picker]['card']

      }
      console.log(numCorrect)
    })

    //no Button
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

          stopGameButton()

        }

      }

      picker = Math.floor(Math.random() * rematch)
      if (picker === 0) {
        loop += 1
        console.log("loop No Rematch", loop, "picker", picker)
      } else if (picker !== 0) {
        picker = Math.floor(Math.random() * cardDeckSize)
        loop += 1
        console.log("loop No New Card", loop, "picker", picker)

        document.getElementById('card').src = catCards[picker]['card']
        newCard = catCards[picker]['card']

      }
      console.log(numCorrect)
    })
  }
})