let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

let player = {
    name: "Yan",
    money: 200
}

playerEl.textContent = player.name + ": $" + player.money

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }

    cardsEl.textContent = "Cards: "
    for(let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    
    messageEl.textContent = message
    sumEl.textContent = "Sum: " + sum
}

function newCard() {
    if(isAlive && !hasBlackJack){
        let thirdCard = getRandomCard()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    }
}

function startGame() {
    cardsEl.textContent = "Cards: "
    cards = []
    cards.push(getRandomCard())
    cards.push(getRandomCard())
    sum = cards[0] + cards[1]
        
    isAlive = true
    hasBlackJack = false
    renderGame()
}

function getRandomCard() {
    let num = Math.floor(Math.random()* 13)+1;
    if(num === 1)
        num = 11
    else if(num === 11 || num === 12 || num === 13)
        num = 10
    return num
}
