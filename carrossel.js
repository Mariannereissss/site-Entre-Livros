document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    let indiceAtual = 0;

    function mostrarSlide(indice) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('ativo', i === indice);
        });
    }

    document.querySelector('.anterior').onclick = () => {
        indiceAtual = (indiceAtual - 1 + slides.length) % slides.length;
        mostrarSlide(indiceAtual);
    };

    document.querySelector('.proximo').onclick = () => {
        indiceAtual = (indiceAtual + 1) % slides.length;
        mostrarSlide(indiceAtual);
    };

    mostrarSlide(indiceAtual);
});