// Informações dos desenvolvedores
const developers = {
    dev1: {
        name: "Kelvis Duank",
        description: "Sou Kelvis Duank, um jovem de 16 anos do povo indígena Xakriabá, atualmente cursando o Ensino Médio Integrado com técnico em Informática para Internet no Instituto Federal Goiano - Campus Urutaí, e também faço parte do programa Programadores do Amanhã. Minha paixão pela tecnologia começou ainda na infância, e sigo cultivando esse interesse, sempre buscando aprender novas ferramentas e tendências. Nos meus momentos livres, além de explorar o mundo da tecnologia, gosto de praticar esportes, especialmente vôlei.",
        socials: `<a href="kelvisduankxkb.netlify.app" target="_blank">Portifólio</a>
                  <a href="https://github.com/Kelvisduank" target="_blank">GitHub</a>`
    },
    dev2: {
        name: "Kaue",
        description: "Sou Kauê Santos Calixto, estudante de Tecnologia em Desenvolvimento Back-end na Anhanguera, com experiência prática em suporte técnico e administração de sistemas. Durante minha atuação como Help Desk na Aliançanet Telecom Ltda, desenvolvi habilidades em troubleshooting e manutenção de redes, dispositivos, e sistemas operacionais como Windows 10, Mac OS, e Android. Além disso, possuo conhecimento em serviços de nuvem como AWS e em fundamentos de redes. Estou focado em avançar na carreira como Analista de Suporte, onde posso aplicar minha expertise em diversas plataformas para garantir a eficiência e a estabilidade dos ambientes de TI.",
        socials: `<a href="https://www.linkedin.com/in/kauescalixto/" target="_blank">LinkedIn</a>
                  <a href="https://github.com/kauecalixto" target="_blank">GitHub</a>`
    },
    dev3: {
        name: "Alisson Nunes",
        description: "Oi, meu nome é Alisson, tenho 20 anos, conclui o ensino médio, atualmente sou aluno do PDA e estou ansioso para faculdade e meu 1o emprego como programador, programar para mim é um sonho, graças aos incentivos do meu pai fui me fascinando em tecnologia e descobrindo o mundo da programação e agora aqui estou...",
        socials: `<a href="https://www.linkedin.com/in/alisson-samuel-994065247/" target="_blank">LinkedIn</a>
                  <a href="https://github.com/alissonn17" target="_blank">GitHub</a>`
    },
    dev4: {
        name: "Maria Eduarda Souza",
        description: "Meu nome é Maria Eduarda Silva Souza, tenho 19 anos e sou de São Paulo. Sou formada em Técnico em Desenvolvimento de Sistemas pela Etec. Possuo habilidades básicas em programação com HTML, CSS, JavaScript, MySQL, Java, além de conhecimento em gerenciamento de projetos. Atualmente, estou fazendo um curso online de programação pelo Programa Programadores do Amanhã e em busca de novas oportunidades que me permitam aplicar e aprimorar minhas habilidades em ambientes desafiadores e inovadores. Fora do trabalho, gosto de viajar com minha família e estudar sobre novas tecnologias.",
        socials: `<a href="https://www.linkedin.com/in/maria-eduarda-souza-919841276/" target="_blank">LinkedIn</a>
                  <a href="https://github.com/Mariaeduardamatias" target="_blank">GitHub</a>`
    },
    dev5: {
        name: "Tayssa Ramos",
        description: "Sou Tayssa Ramos, tenho 16 anos, estou no 2° ano do ensino médio, atualmente sou aluna do PDA e estou ansiosa para concluir meu ensino médio, sempre fui fascinada por tecnologia mas não pensava a seguir carreira , entrei nesse mundo de programação agora , e curiosa sobre o que posso aprender",
        socials: `<a href="https://www.linkedin.com/in/tayssa-ramos-6523a2318/" target="_blank">LinkedIn</a>
                  <a href="https://github.com/dev5" target="_blank">GitHub</a>`
    },
    dev6: {
        name: "Kaique Silvério",
        description: "Mini apresentação",
        socials: `<a href="https://linkedin.com/in/dev6" target="_blank">LinkedIn</a>
                  <a href="https://github.com/dev6" target="_blank">GitHub</a>`
    }
};

// Função para abrir o modal
function openModal(devId) {
    const modal = document.getElementById("myModal");
    const devInfo = developers[devId];

    document.getElementById("modal-title").innerText = devInfo.name;
    document.getElementById("modal-description").innerText = devInfo.description;
    document.getElementById("modal-socials").innerHTML = devInfo.socials;

    modal.style.display = "block"; // Exibe o modal

    // Centraliza o modal na tela
    const modalContent = document.querySelector(".modal-content");
    const viewportHeight = window.innerHeight;
    const modalHeight = modalContent.offsetHeight;
    const topOffset = (viewportHeight - modalHeight) / 2;

    modalContent.style.marginTop = `${topOffset}px`; // Centraliza verticalmente
}

// Função para fechar o modal
function closeModal() {
    document.getElementById("myModal").style.display = "none"; // Esconde o modal
}

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    const modal = document.getElementById("myModal");
    if (event.target === modal) {
        closeModal();
    }
};
