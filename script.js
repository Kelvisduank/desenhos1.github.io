const $botaoComecar = document.querySelector(".botao-comecar")
const $containerdequestoes = document.querySelector(".container-de-questoes")
const $containerfase2 = document.querySelector(".container-fase-2")
const $containerfase3 = document.querySelector(".container-fase-3")

// array de pontuação
var pontos = []

// esconde as perguntas das fases 2 e 3
$containerfase2.classList.add("hide")
$containerfase3.classList.add("hide")

$botaoComecar.addEventListener("click", startGame)

function startGame(){
    $botaoComecar.classList.add("hide")
    $containerdequestoes.classList.remove("hide")
}

// verifica resposta
function answer(n){
    //alert(n) n --> é o value do button clicado.
    if (n == 1){
        alert("correto")
        pontos.push(10)
    }else{
        alert("errou")
    }
    alert(`Você fez ${pontos[pontos.length -1]} pontos`)
}        