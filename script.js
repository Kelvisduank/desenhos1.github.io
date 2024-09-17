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

// Menu reponsivo

document.addEventListener('DOMContentLoaded', () => {
    const btnMobile = document.querySelector('.btn-mobile');
    const menuMobile = document.querySelector('.menu-mobile ul');

    btnMobile.addEventListener('click', () => {
        menuMobile.classList.toggle('show');
    });

    // Funções para o menu
    window.startQuiz = function() {
        document.querySelector('.container-de-questoes').classList.remove('hide');
        document.querySelector('.botao-comecar').classList.add('hide');
        document.querySelector('.botao-proxima').classList.remove('hide');
    }

    window.showResults = function() {
        alert('Mostrar resultados - funcionalidade ainda não implementada.');
    }

    window.resetQuiz = function() {
        alert('Reiniciar quiz - funcionalidade ainda não implementada.');
    }

    window.answer = function(value) {
        alert('Resposta selecionada: ' + value);
        // Aqui você pode adicionar a lógica para verificar a resposta e avançar para a próxima pergunta.
    }
});
