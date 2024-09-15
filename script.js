const $botaoComecar = document.querySelector(".botao-comecar")
const $containerdequestoes = document.querySelector(".container-de-questoes")

$botaoComecar.addEventListener("click", startGame)

function startGame(){
    $botaoComecar.classList.add("hide")
    $containerdequestoes.classList.remove("hide")
}