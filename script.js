const $botaoComecar = document.querySelector(".botao-comecar")
const $containerdequestoes = document.querySelector(".container-de-questoes") // ok
const $botaopassar = document.querySelector(".botao-proxima")
const $gameover = document.querySelector(".containerGameover")

const $container1 = document.querySelector(".container1") // Corrigido o seletor
//const $proximafase = document.querySelector(".container-de-questoes1") // Corrigido o seletor
var passou = false
const $container = document.querySelector(".container")
const $containerdequestoes1 = document.querySelector(".container-de-questoes1")
const $botaopassar1 = document.querySelector(".botao-proxima1")
const $container2 = document.querySelector(".container2")
const $containerdequestoes2 = document.querySelector(".container-de-questoes2")
$botaoComecar.addEventListener("click", startGame)
const $botaopassar2 = document.querySelector(".botao-proxima2")


const $botaopassar3 = document.querySelector(".botao-proxima3")
const $containerdequestoes3 = document.querySelector(".container-de-questoes3")
const $container3 = document.querySelector(".container3")

const $botaopassar4 = document.querySelector(".botao-proxima4")
const $containerdequestoes4 = document.querySelector(".container-de-questoes4")
const $container4 = document.querySelector(".container4")

const $botaopassar5 = document.querySelector(".botao-proxima5")
const $containerdequestoes5 = document.querySelector(".container-de-questoes5")
const $container5 = document.querySelector(".container5")

const $botaopassar6 = document.querySelector(".botao-proxima6")
const $containerdequestoes6 = document.querySelector(".container-de-questoes6")
const $container6 = document.querySelector(".container6")

const $botaopassar7 = document.querySelector(".botao-proxima7")
const $containerdequestoes7 = document.querySelector(".container-de-questoes7")
const $container7 = document.querySelector(".container7")

const $botaopassar8 = document.querySelector(".botao-proxima8")
const $containerdequestoes8 = document.querySelector(".container-de-questoes8")
const $container8 = document.querySelector(".container8")

const $botaopassar9 = document.querySelector(".botao-proxima9")
const $containerdequestoes9 = document.querySelector(".container-de-questoes9")
const $container9 = document.querySelector(".container9")

const $acerto = document.querySelector("#acertou")

const $pnts = document.querySelector("#pontos")

//pontuação
var exibirPontos = document.createElement("h1")
var pontos = 0
var exibe = document.createTextNode(pontos)
exibirPontos.appendChild(exibe)
var ponto = document.getElementById("pontos")

// mensagem acertou
var mensagem = document.createElement("h1")
var acertou = document.createTextNode("Acertou, bela resposta! agora sua pontuação é:")
mensagem.appendChild(acertou)
var acerto = document.getElementById("acertou")

$gameover.classList.add("hide")
$container3.classList.add("hide")
$container4.classList.add("hide")
$container5.classList.add("hide")
$container6.classList.add("hide")
$container7.classList.add("hide")
$container8.classList.add("hide")
$container9.classList.add("hide")


$container2.classList.add("hide")
$container1.classList.remove("hide")
$container.classList.remove("hide")
$container1.classList.add("hide")

function startGame() {
    $botaoComecar.classList.add("hide")
    $containerdequestoes.classList.remove("hide")
    $container1.classList.add("hide")
    
}

// atualiza pontos
function atualizar(){
    pontos += 10

    $pnts.classList.remove("hide")
    // exibe = document.createTextNode(pontos)
    exibirPontos.innerHTML = pontos
    // exibirPontos.appendChild(exibe)
    ponto.appendChild(exibirPontos)

    
    $acerto.classList.remove("hide")
    acertou = document.createTextNode("Acertou, bela resposta! agora sua pontuação é:")
    acerto.appendChild(mensagem)
}

function gameover(){
    $container1.classList.add("hide")
    $container2.classList.add("hide")
    $container3.classList.add("hide")
    $container4.classList.add("hide")
    $container5.classList.add("hide")
    $container6.classList.add("hide")
    $container7.classList.add("hide")
    $container8.classList.add("hide")
    $container9.classList.add("hide")

    $gameover.classList.remove("hide")    
}

// Verifica resposta
function answer(n) {
    if (n == 1) {
        passou = true
        $botaopassar.classList.remove("hide")
        
        atualizar()
    } else {
        passou = false
        gameover()
    }
}

function nextlevel(passar){    
       
    //sumir fase 1
    $containerdequestoes.classList.add("hide")
    $container.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes1.classList.remove("hide")
        

        //passar fase 2
        $container1.classList.remove("hide")

    
}

function answer1(n1){
    if (n1 == 3){
        $botaopassar1.classList.remove("hide")

        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}


function nextlevel1(passar){    
       
    //sumir fase 1
    $containerdequestoes1.classList.add("hide")
    $container1.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes2.classList.remove("hide")
        

        //passar fase 2
        $container2.classList.remove("hide")

    
}

function answer2(n){
    if (n == 2){
        $botaopassar2.classList.remove("hide")
        
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}



function nextlevel2(passar){    
       
    //sumir fase 1
    $containerdequestoes2.classList.add("hide")
    $container2.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes3.classList.remove("hide")
        //passar fase 2
        $container3.classList.remove("hide")

    
}

function answer3(n){
    if (n == 2){
        $botaopassar3.classList.remove("hide")
        
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}





function nextlevel3(passar){    
       
    //sumir fase 1
    $containerdequestoes3.classList.add("hide")
    $container3.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes4.classList.remove("hide")
        //passar fase 2
        $container4.classList.remove("hide")

    
}

function answer4(n){
    if (n == 2){
        $botaopassar4.classList.remove("hide")
        
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}



function nextlevel4(passar){    
       
    //sumir fase 1
    $containerdequestoes4.classList.add("hide")
    $container4.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes5.classList.remove("hide")
        //passar fase 2
        $container5.classList.remove("hide")

    
}

function answer5(n){
    if (n == 2){
        $botaopassar5.classList.remove("hide")
       
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}


function nextlevel5(passar){    
       
    //sumir fase 1
    $containerdequestoes5.classList.add("hide")
    $container5.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")

        $containerdequestoes6.classList.remove("hide")
        //passar fase 2
        $container6.classList.remove("hide")

    
}

function answer6(n){
    if (n == 2){
        $botaopassar6.classList.remove("hide")
       
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}



function nextlevel6(passar){    
       
    //sumir fase 1
    $containerdequestoes6.classList.add("hide")
    $container6.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes7.classList.remove("hide")
        //passar fase 2
        $container7.classList.remove("hide")

    
}

function answer7(n){
    if (n == 2){
        $botaopassar7.classList.remove("hide")
       
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}


function nextlevel7(passar){    
       
    //sumir fase 1
    $containerdequestoes7.classList.add("hide")
    $container7.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes8.classList.remove("hide")
        //passar fase 2
        $container8.classList.remove("hide")

    
}

function answer8(n){
    if (n == 2){
        $botaopassar8.classList.remove("hide")
       
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}


function nextlevel8(passar){    
       
    //sumir fase 1
    $containerdequestoes8.classList.add("hide")
    $container8.classList.add("hide")
    $acerto.classList.add("hide")
    $pnts.classList.add("hide")


        $containerdequestoes9.classList.remove("hide")
        //passar fase 2
        $container9.classList.remove("hide")

    
}

function answer9(n){
    if (n == 2){
        $botaopassar9.classList.remove("hide")
       
        atualizar()
    }           
    else{
        passou = false
        gameover()
    }
}
