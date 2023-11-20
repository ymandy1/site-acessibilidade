function lerTexto(elemento) {
    const texto = elemento.textContent;
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);

    synth.speak(utterance);
}

document.addEventListener('click', function(event) {
    const elementoClicado = event.target;

    if (elementoClicado.tagName === 'P' || elementoClicado.tagName === 'H1' || 
    elementoClicado.tagName === 'H2' || elementoClicado.tagName === 'H3' || 
    elementoClicado.tagName === 'BUTTON') {
        lerTexto(elementoClicado);
    }
});

function toggleModal() {
    const overlay = document.querySelector(".overlay");
    const modal = document.querySelector(".modal");

    overlay.classList.toggle("active");
    modal.classList.toggle("active");
}

const button = document.querySelector(".fa-solid.fa-universal-access");
button.addEventListener("click", toggleModal);

function changePTextColor(color) {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(paragraph => {
        paragraph.style.color = color;
    });
}

function changePColor(color) {
    const paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(paragraph => {
        paragraph.style.backgroundColor = color;
    });
}