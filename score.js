function recentScoreUpdate(currentScore){
    return  `<tr>
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
let currentScore = JSON.parse(localStorage.getItem('currentScore'))
console.log(recentScoreUpdate(currentScore))
console.log(document.querySelector('#rScoreBody'))
document.querySelector('#RecentScore #rScoreBody').innerHTML =  recentScoreUpdate(currentScore)