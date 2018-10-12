document.addEventListener("DOMContentLoaded", function (event) {
  console.log("DOM fully loaded and parsed");

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

  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  let gameSetting = JSON.parse(localStorage.getItem('gameSetting'))
  let playerName1 = `${userInfo['First Name']} ${userInfo['Last Name']}`
  console.log('Hi ', playerName1)
  let cardCycles = `${gameSetting['Card Cycles']}`
  let rematch = `${gameSetting['Rematch']}`
  let cardDeckSize = `${gameSetting['Card Deck Size']}`
  let currentScore = {'Score': 0}
  let loop = 0
  let cycles = 0
  let picker = 0
  let card = catCards[picker]['card']
  let numCorrect = 0
  let perCorrect = (numCorrect / loop)
  let oldCard = catCards[0]['card']
  let newCard = catCards[picker]['card']

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
    stopGameButton()
    currentScore = (Math.round((numCorrect / loop) * 100))
    console.log(currentScore)

    picker = 0
    card = catCards[picker]['card']
    numCorrect = 0
    perCorrect = 0
    oldCard = catCards[0]['card']
    newCard = catCards[picker]['card']
    time = 0
    cycles = 0
    document.getElementById("score").innerHTML= `    ${currentScore}`
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
    })
  }
})