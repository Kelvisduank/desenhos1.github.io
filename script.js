const $botaoComecar = document.querySelector(".botao-comecar")
const $containerdequestoes = document.querySelector(".container-de-questoes") // ok
const $botaopassar = document.querySelector(".botao-proxima")
const $container1 = document.querySelector(".container1") // Corrigido o seletor
//const $proximafase = document.querySelector(".container-de-questoes1") // Corrigido o seletor
var passou = false
const $container = document.querySelector(".container")
const $containerdequestoes1 = document.querySelector(".container-de-questoes1")


$botaoComecar.addEventListener("click", startGame)

$container.classList.remove("hide")
$container1.classList.add("hide")

function startGame() {
    $botaoComecar.classList.add("hide")
    $containerdequestoes.classList.remove("hide")
    $container1.classList.add("hide")
    
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

function nextlevel(passar){    
       
    //sumir fase 1
    $containerdequestoes.classList.add("hide")
    $container.classList.add("hide")


        $containerdequestoes1.classList.remove("hide")
        

        //passar fase 2
        $container1.classList.remove("hide")

    
}
function answer1(n){
    if (n == 3){
        alert("Acertou")
        passou = true
    }
    else{
        alert("errou")
        passou = false
    }
}