window.onload = function(){
    cardDeck();
    cardNumber();
    refreshPage();
    newCardButtonListener();
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

function refreshPage(){
    let refreshPage = document.querySelector("#refresh-page");
    refreshPage.addEventListener("click", (e) => {
        window.location.reload();
    });
}

function generateNewCard(){
    let newDeck = cardDeck();
    let newNumber = cardNumber();
    let firstDiv = document.querySelector(".row");
    let newDiv = document.createElement("div");
    newDiv.className = "card shadow-lg col-lg-5 col-md-5 col-sm-11  mx-4";
    firstDiv.appendChild(newDiv);
    let newDeckDiv = document.createElement("div");
    newDeckDiv.innerHTML = "test";
    newDeckDiv.className = "deck fs-0 position-absolute top-0 start-0 px-2"
    newDiv.appendChild(newDeckDiv);
    let newCardNumberDiv = document.createElement("div");
    newCardNumberDiv.className = "fs-0 text-center text-black position-absolute top-50 start-50 translate-middle"
    newDiv.appendChild(newCardNumberDiv);
    let secondNewDeckDiv = document.createElement("div");
    secondNewDeckDiv.className = "deck inverted-view fs-0 text-end position-absolute bottom-0 end-0 px-2"
    newDiv.appendChild(secondNewDeckDiv);

}

function newCardButtonListener(){
    let newCardListener = document.querySelector("#new-card");
    newCardListener.addEventListener("click", (e) => {
        generateNewCard();
    });
}