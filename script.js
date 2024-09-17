const $botaoComecar = document.querySelector(".botao-comecar")
const $containerdequestoes = document.querySelector(".container-de-questoes")
const $proxima = document.querySelector(".botao-proxima botao hide")


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
    }else{
        alert("errou")
    }
}        