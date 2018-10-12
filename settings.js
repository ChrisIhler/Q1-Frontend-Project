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
        
        
        
        localStorage.setItem('userInfo',JSON.stringify(userInfoObj))
        console.log(localStorage.getItem('userInfo'))
        console.log('submitted form1')

    })

    document.getElementById('form2').addEventListener('submit', function (e) {
        e.preventDefault()
        localStorage.removeItem('gameSettings')

        let settingsObj = {
            'Free Play': e.target.freePlay.value,
            'Time': e.target.time.value,
            'Card Cycles': e.target.cardCycles.value,
            'Card Matchs': e.target.cardMatchs.value,
            'Rematch': e.target.rematch.value,
            'Card Deck Size': e.target.deckSize.value,
            'Match Alert': e.target.alert.value,
            'Sound': e.target.sound.value,
        }

        localStorage.setItem('gameSetting',JSON.stringify(settingsObj))
        console.log(localStorage.getItem('gameSetting'))
        console.log('submitted form2')



    })


})
// setItem()	Add key and value to local storage
// getItem()	Retrieve a value by the key
// removeItem()	Remove an item by key
// clear()	Clear all storage
// JSON.stringify(currentScore)
// let scoreLocal = JSON.stringify(currentScore)
// localStorage.setItem('currentScore',scoreLocal)
// let scoreLocal = JSON.stringify(currentScore)
// localStorage.setItem('currentScore',scoreLocal)