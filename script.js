window.onload = function(){
    cardDeck();
    cardNumber();
}

function getRandomNum(arrLength){
    return Math.floor(Math.random() * arrLength);
}


function cardDeck(){
    let htmlDeck = document.querySelectorAll(".deck");
    let deck = ["♦", "♥", "♠", "♣"];
    let randomCardDeck = deck[getRandomNum(deck.length)];
    if (randomCardDeck == "♥" || randomCardDeck == "♦") {
    htmlDeck.forEach(div => div.parentNode.attributes.class.nodeValue += " text-danger")
    }
    htmlDeck.forEach(div => div.innerHTML = randomCardDeck);
}

function cardNumber(){
    let englishDeckNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomCardNumber = englishDeckNumbers[getRandomNum(englishDeckNumbers.length)];
    document.querySelector("#card-number").innerHTML = randomCardNumber;
}