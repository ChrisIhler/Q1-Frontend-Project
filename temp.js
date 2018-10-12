function playerScoreCard(scoreCard){
    return `
      <tr>
        <td>Player Name ${scoreCard['Player Name']}</td>
        <td>Cards Correct % ${scoreCard['Cards Correct %']}</td>
        <td>Deck Size ${scoreCard['Deck Size']}</td>
      </tr>  
    `
  }
  
  document.querySelector('tbody').innerHTML =  playerScoreCard(currentScore)
  

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

    function highscoreUpdate(scoreUpdate){
        `<tr>
            <td>1</td>
            <td>${currentScore['Player Name']}</td>
            <td>${currentScore['Cards Correct % Minute']}</td>
            <td>${currentScore['Cards Correct % Second']}</td>
            <td>${currentScore['Cards Correct %']}</td>
            <td>${currentScore['Cards Correct # Minute']}</td>
            <td>${currentScore['Cards Correct # Second']}</td>
            <td>${currentScore['Cards # Minute']}</td>
            <td>${currentScore['Cards # Second']}</td>
            <td>${currentScore['Game Time']}</td>
            <td>${currentScore['Card Cycles']}</td>
            <td>${currentScore['Deck Size']}</td>
            <td>${currentScore['Rematch']}</td>
        </tr>`
    }
    document.getElementById('Recent Score').innerHTML =  recentcoreUpdate(currentScore)



    if (cardMatches > 0) {
        //     if (cardMatches === numCorrect) {
        //         console.log('stop condition Card Cycles', 'score')
        //         loop = 0
        //         picker = 0
        //         card = catCards[picker]['card']
        //         numCorrect = 0
        //         perCorrect = (numCorrect / loop)
        //         oldCard = catCards[0]['card']
        //         newCard = catCards[picker]['card']
        //         time = 0
        //         cycles = 0
        //         document.getElementById('startButton').disabled = false;
        //         document.getElementById('stopButton').disabled = true;
        //         document.getElementById('yesMatch').disabled = true;
        //         document.getElementById('noMatch').disabled = true;
                
        //     }