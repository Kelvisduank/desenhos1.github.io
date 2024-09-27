// Informações dos desenvolvedores
const developers = {
    dev1: {
        name: "Kelvis Duank",
        description: "Mini apresentação",
        socials: `<a href="https://linkedin.com/in/dev1" target="_blank">LinkedIn</a>
                  <a href="https://github.com/Kelvisduank" target="_blank">GitHub</a>`
    },
    dev2: {
        name: "Kaue",
        description: "Mini apresentação",
        socials: `<a href="https://www.linkedin.com/in/kauescalixto/" target="_blank">LinkedIn</a>
                  <a href="https://github.com/kauecalixto" target="_blank">GitHub</a>`
    },
    dev3: {
        name: "Alisson Nunes",
        description: "Mini apresentação",
        socials: `<a href="https://www.linkedin.com/in/alisson-samuel-994065247/" target="_blank">LinkedIn</a>
                  <a href="https://github.com/alissonn17" target="_blank">GitHub</a>`
    },
    dev4: {
        name: "Maria Eduarda Souza",
        description: "Mini apresentação",
        socials: `<a href="https://www.linkedin.com/in/maria-eduarda-souza-919841276/" target="_blank">LinkedIn</a>
                  <a href="https://github.com/Mariaeduardamatias" target="_blank">GitHub</a>`
    },
    dev5: {
        name: "Tayssa Ramos",
        description: "Mini apresentação",
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
