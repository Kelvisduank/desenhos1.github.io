const $botaoComecar = document.querySelector(".botao-comecar")
const $containerdequestoes = document.querySelector(".container-de-questoes") // ok
const $botaopassar = document.querySelector(".botao-proxima")
const $container1 = document.querySelector(".container1") // Corrigido o seletor
//const $proximafase = document.querySelector(".container-de-questoes1") // Corrigido o seletor
var passou = false
const $container = document.querySelector(".container")
const $containerdequestoes1 = document.querySelector(".container-de-questoes1")
//container da 3a pergunta
const $container2 = document.querySelector(".container2")
const $containerdequestoes2 = document.querySelector(".container-de-questoes2")


$botaoComecar.addEventListener("click", startGame)

//perguntas 1, 2 e 3
$container.classList.remove("hide")
$container1.classList.add("hide")
$container2.classList.add("hide")

function startGame() {
    $botaoComecar.classList.add("hide")
    $containerdequestoes.classList.remove("hide")
    $container1.classList.add("hide")
    
}

function nextlevel(passar){    
       
    //sumir fase 1
    $containerdequestoes.classList.add("hide")
    $container.classList.add("hide")

    //passar fase 2
    $containerdequestoes1.classList.remove("hide")
    $container1.classList.remove("hide")
   
}

// Verifica resposta
function answer(n) {
    if (n == 1) {
        alert("Correto")
        passou = true
        $botaopassar.classList.remove("hide")
    } else {
        alert("Errou")
        passou = false
    }
}

function answer1(n){ //checa a 2a questão
    if (n == 3){
        alert("Acertou")
        passou = true
    }
    else{
        alert("errou")
        passou = false
    }
}

function answer2(n){ //checa a 3a questão
    if (n == 2){
        alert("Acertou")
        passou = true
    }
    else{
        alert("errou")
        passou = false
    }
}