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

// revisar esta función
function cardDeckColorCheker(deck){
    let newRandomDeck = cardDeck()
    if (newRandomDeck == "♥" || newRandomDeck == "♦") {
        deck.parentNode.attributes.class.nodeValue += " text-danger"
        }
}

function cardNumber(){
    let englishDeckNumbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let randomCardNumber = englishDeckNumbers[getRandomNum(englishDeckNumbers.length)];
    return randomCardNumber;
}


function refreshPage(){
    let refreshPage = document.querySelector("#refresh-page");
    refreshPage.addEventListener("click", (e) => {
        window.location.reload();
    });
}

// revisar la lógica del if para ver si se puede eliminar
function generateFirstCard(){
    let firstDiv = document.querySelector(".row");
    let newDeck = cardDeck();
    let newNumber = cardNumber();
    if (newDeck == "♥" || newDeck == "♦") {
        firstDiv.innerHTML = `<div class="card shadow-lg col-lg-5 col-md-5 col-sm-11  m-4">
            <div class="deck fs-0 position-absolute top-0 start-0 px-2 text-danger">${newDeck}</div>
            <div id="card-number" class="fs-0 text-center text-black position-absolute top-50 start-50 translate-middle">${newNumber}</div>
            <div class="deck inverted-view fs-0 text-end position-absolute bottom-0 end-0 px-2 text-danger">${newDeck}</div>
        </div>`
    }
    else {
        firstDiv.innerHTML = `<div class="card shadow-lg col-lg-5 col-md-5 col-sm-11  m-4">
            <div class="deck fs-0 position-absolute top-0 start-0 px-2">${newDeck}</div>
            <div id="card-number" class="fs-0 text-center text-black position-absolute top-50 start-50 translate-middle">${newNumber}</div>
            <div class="deck inverted-view fs-0 text-end position-absolute bottom-0 end-0 px-2">${newDeck}</div>
        </div>`
    }

}


// revisar la creación de nuevas cartas para que le añada color al palo
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
}


function newCardButtonListener(){
    let newCardListener = document.querySelector("#new-card");
    newCardListener.addEventListener("click", (e) => {
        generateNewCard();
    });
}




// function generateNewCard(){
//     let newDeck = cardDeck();
//     let newNumber = cardNumber();
//     let firstDiv = document.querySelector(".row");
//     let newDiv = document.createElement("div");
//     newDiv.className = "card shadow-lg col-lg-5 col-md-5 col-sm-11  mx-4";
//     firstDiv.appendChild(newDiv);
//     let newDeckDiv = document.createElement("div");
//     newDeckDiv.innerHTML = `${newDeck}`;
//     newDeckDiv.className = "deck fs-0 position-absolute top-0 start-0 px-2";
//     newDiv.appendChild(newDeckDiv);
//     let newCardNumberDiv = document.createElement("div");
//     newCardNumberDiv.className = "fs-0 text-center text-black position-absolute top-50 start-50 translate-middle";
//     newCardNumberDiv.innerHTML = newNumber;
//     newDiv.appendChild(newCardNumberDiv);
//     let secondNewDeckDiv = document.createElement("div");
//     secondNewDeckDiv.className = "deck inverted-view fs-0 text-end position-absolute bottom-0 end-0 px-2";
//     secondNewDeckDiv.innerHTML = `${newDeck}`;
//     newDiv.appendChild(secondNewDeckDiv);
// }