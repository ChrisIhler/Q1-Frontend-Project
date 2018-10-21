document.addEventListener("DOMContentLoaded", function (event) {
  console.log('loaded')

  document.getElementById('form1').addEventListener('submit', function (e) {
    e.preventDefault()
    localStorage.removeItem('userInfo')
    let userInfoObj = {
      'First Name': e.target.firstname.value,
      'Last Name': e.target.lastname.value,
      'E-Mail': e.target.email.value,
      'Phone': e.target.phone.value,
      'Age': e.target.age.value,
    }



    localStorage.setItem('userInfo', JSON.stringify(userInfoObj))
    console.log(localStorage.getItem('userInfo'))
    console.log('submitted form1')
    let userInfo = JSON.parse(localStorage.getItem('userInfo'))
    if (userInfo !== null){document.getElementById('userinforsubmitted').innerHTML = `${userInfo['First Name']} ${userInfo['Last Name']} your information is submitted.` }

  })
 
  let userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (userInfo !== null){document.getElementById('userinforsubmitted').innerHTML = `${userInfo['First Name']} ${userInfo['Last Name']} your information is submitted` }


  document.getElementById('form2').addEventListener('submit', function (e) {
    e.preventDefault()
    localStorage.removeItem('gameSettings')

    let settingsObj = {
      'Card Cycles': e.target.cardCycles.value,
      'Card Matchs': e.target.cardMatchs.value,
      'Rematch': e.target.rematch.value,
      'Card Deck Size': e.target.deckSize.value,
    }

    localStorage.setItem('gameSetting', JSON.stringify(settingsObj))
    console.log(localStorage.getItem('gameSetting'))
    console.log('submitted form2')

    let gameSetting = JSON.parse(localStorage.getItem('gameSetting'))
if (gameSetting !== null ){document.getElementById('gamesettingssubmitted').innerHTML =`Game settings are submitted.`}

  })

  let gameSetting = JSON.parse(localStorage.getItem('gameSetting'))
if (gameSetting !== null ){document.getElementById('gamesettingssubmitted').innerHTML =`Game settings are submitted.`}

})

