


function verifyPair (){
    let numCards = prompt("Insira o número de cartas que você deseja ter em seu jogo! (Obs: Insira um número *PAR* entre 4 e 14!)");
    while ((numCards %2 !== 0) || (numCards < 4) || (numCards > 14)) {
        alert ("Por favor, insira um número par entre 4 e 14!");
        numCards = prompt("Insira o número de cartas que você deseja ter em seu jogo! (Obs: Insira um número *PAR* entre 4 e 14!)");
    }
    
}



















verifyPair();