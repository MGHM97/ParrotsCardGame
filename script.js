const cardFront = ["bobrossparrot", "explodyparrot", "fiestaparrot", "metalparrot", "revertitparrot", "tripletsparrot", "unicornparrot"]; 

let aux = null;
let auxElement = null;
let disable = false;
let pairNumber = 0;
let playCount = 0;

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
        
        <div class="card" data-identifier="card" onclick='clickOnCard(this, ${i})'>
            <div class="back-face face"  data-identifier="front-face">
                <img src="./img/${imgs[i]}.gif" alt="card-face" height=100 whidth=100>
            </div>
            <div class="front-face face" data-identifier="back-face">
                <img src="./img/front.png" alt="card-back" height=100 whidth=100>
            </div>
        </div>

        ` ;
    }
}


function clickOnCard(element, index){  
    if (disable === false) {
        disable = true;
        playCount++;
        if (aux == null) {
            aux = index;
            auxElement = element;
            cardFlip(element);
            disable = false;
        } else {
            if (aux !== index) {
                let lastImage = imgs[aux];
                let currentImage = imgs[index];
                cardFlip(element);
                if (lastImage === currentImage) {
                    endGame();
                    disable = false;
                    aux = null;
                    auxElement = null;
                } else {
                    setTimeout(()=>{
                        cardFlip(element);
                        cardFlip(auxElement);
                        aux = null;
                        auxElement = null;
                        disable = false;
                    },1000);
                }
            } else {
                disable = false;
            }
        }
    }
}

function endGame () {
    pairNumber++;
    if (arrayLenght/2 == pairNumber) {
        alert (`Fim de jogo. Você terminou em ${playCount} jogadas. Parabéns, manolo(a)!  :3`);
    } 

}

function cardFlip (element) {
    const front = element.querySelector('.front-face');
    const back = element.querySelector('.back-face');

    front.classList.toggle("front-flip");
    back.classList.toggle("back-flip");
}


verifyPair();
insertImagesOnCards(cardFront);
insertCardsOnScreen(toBeInserted);
