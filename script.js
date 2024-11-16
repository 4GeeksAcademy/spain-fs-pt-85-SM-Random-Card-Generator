window.onload = function(){
    generateFirstCard();
    newCardButtonListener();
    refreshPage();
}

function getRandomNum(arrLength){
    return Math.floor(Math.random() * arrLength);
}

function cardDeck(){
    let deck = ["♦", "♥", "♠", "♣"];
    let randomCardDeck = deck[getRandomNum(deck.length)];
    return randomCardDeck;
}

const handRankings = {
    '4,1': 'Four of a Kind',
    '3,2': 'Full House',
    '3,1,1': 'Three of a Kind',
    '2,2,1': 'Two Pair',
    '2,1,1,1': 'One Pair',
    '1,1,1,1,1': 'High Card'
};

let handComposition = {}

function cardNumber(){
    let englishDeckNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomCardNumber = englishDeckNumbers[getRandomNum(englishDeckNumbers.length)];
    !handComposition[randomCardNumber] ? handComposition[randomCardNumber] = 1 : handComposition[randomCardNumber]++;   
    return randomCardNumber;
}


function refreshPage(){
    let refreshPage = document.querySelector("#refresh-page");
    refreshPage.addEventListener("click", (e) => {
        window.location.reload();
    });
}


function generateFirstCard(){
    let firstDiv = document.querySelector(".row");
    let newDeck = cardDeck();
    let newNumber = cardNumber();
    firstDiv.innerHTML = `<div class="card shadow-lg col-lg-5 col-md-5 col-sm-11  m-4">
                            <div class="deck fs-0 position-absolute top-0 start-0 px-2">${newDeck}</div>
                            <div id="card-number" class="fs-0 text-center text-black position-absolute top-50 start-50 translate-middle">${newNumber}</div>
                            <div class="deck inverted-view fs-0 text-end position-absolute bottom-0 end-0 px-2">${newDeck}</div>
                          </div>`
    let desckElements = firstDiv.querySelectorAll(".deck");
    desckElements.forEach(deckElement => cardDeckColorCheker(deckElement,newDeck));
}


function cardDeckColorCheker(deckElement, newDeck){
    if (newDeck == "♥" || newDeck == "♦") {
        deckElement.classList.add("text-danger");
        }
}


function generateNewCard(){
    let newDeck = cardDeck();
    let newNumber = cardNumber();
    let firstDiv = document.querySelector(".row");
    let newDiv = document.createElement("div");
    newDiv.className = "card shadow-lg col-lg-5 col-md-5 col-sm-11  m-4";
    newDiv.innerHTML = `<div class="deck fs-0 position-absolute top-0 start-0 px-2">${newDeck}</div>
                        <div id="card-number" class="fs-0 text-center text-black position-absolute top-50 start-50 translate-middle">${newNumber}</div>
                        <div class="deck inverted-view fs-0 text-end position-absolute bottom-0 end-0 px-2">${newDeck}</div>`
    firstDiv.appendChild(newDiv);
    let deckElements = newDiv.querySelectorAll(".deck")
    deckElements.forEach(deckElement => cardDeckColorCheker(deckElement, newDeck))
}

function handCompositionHandler(){
    let handCompositionValues = Object.values(handComposition).sort().reverse().toString();
    let handRankingsKeys = Object.keys(handRankings);
    for (let key of handRankingsKeys){
        if (key == handCompositionValues) {return handRankings[key];}
    }
    return "Unkown hand"
}

function newCardButtonListener(){
    let newCardListener = document.querySelector("#new-card");
    let cardCounter = 1;
    newCardListener.addEventListener("click", (e) => {
        generateNewCard();
        if (cardCounter < 4) cardCounter++;
        else {
            newCardListener.parentNode.removeChild(newCardListener);
            let firstDiv = document.querySelector("#your-hand");
            let newDiv = document.createElement("div");
            newDiv.innerHTML = `<h1 class="text-center text-danger mt-4">${handCompositionHandler()}</h1>`;
            firstDiv.appendChild(newDiv);
        }
    });
}