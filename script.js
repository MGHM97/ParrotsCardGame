let arrayLenght = null;

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


function insertCardsOnScreen (toBeInserted) {
    for (i = 0; i < arrayLenght; i++) {
        /* let inserted = toBeInserted[i]; */
        const modify = document.querySelector(".cards-section");
        modify.innerHTML += `
        
        <div class="card">
            <div class="front-face face">
                Frente
            </div>
            <div class="back-face face">
                Verso
             </div>
        </div>

        `;
    }
}







verifyPair();
insertCardsOnScreen();