const cardFront = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]; 

let arrayLenght;

function verifyPair (){
    let numCards = prompt("Insira o número de cartas que você deseja ter em seu jogo! (Obs: Insira um número *PAR* entre 4 e 14!)");
    while ((numCards %2 !== 0) || (numCards < 4) || (numCards > 14)) {
        alert ("Por favor, insira um número par entre 4 e 14!");
        numCards = prompt("Insira o número de cartas que você deseja ter em seu jogo! (Obs: Insira um número *PAR* entre 4 e 14!)");
    }
    arrayLenght = numCards;
    return arrayLenght;
}


let toBeInserted = [];
const imgs = [];
let cards = [];

function insertImagesOnCards (cardFront) {
    for (let j = 0; j < arrayLenght/2; j++) {
                
        function compare() {
            return Math.random() - 0.5;
        }
        
        imgs.sort(compare);
        
        imgs.push(cardFront[j], cardFront[j]);
    }
}





function insertCardsOnScreen (toBeInserted, compare) {
    for (let i = 0; i < arrayLenght; i++) {

        const modify = document.querySelector(".cards-section");
        modify.innerHTML += `
        
        <div class="card">
            <div class="back-face face">
                <img src="./img/${imgs[i]}.gif" alt="card-front" height=100 whidth=100>
            </div>
            <div class="front-face face">
                <img src="./img/front.png" alt="card-back" height=100 whidth=100>
            </div>
        </div>

        ` ;
    }
}


function seeCardFront () {

}




verifyPair();
insertImagesOnCards(cardFront);
insertCardsOnScreen(toBeInserted);
