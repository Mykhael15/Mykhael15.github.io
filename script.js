// JavaScript para a rolagem lateral dos clientes
const clientsContainer = document.querySelector('.clients-container');
const clients = document.querySelectorAll('.client');
const prevButton = document.getElementById('prev-client');
const nextButton = document.getElementById('next-client');

let currentIndex = 0;

function showClient(index) {
    if (index < 0) {
        index = clients.length - 1;
    } else if (index >= clients.length) {
        index = 0;
    }

    // Oculta todos os clientes
    clients.forEach((client) => {
        client.style.display = 'none';
    });

    // Exibe apenas o cliente atual
    clients[index].style.display = 'block';

    currentIndex = index;
}

prevButton.addEventListener('click', () => {
    showClient(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showClient(currentIndex + 1);
});

// Mostrar o primeiro cliente ao carregar a página
showClient(currentIndex);

document.addEventListener("DOMContentLoaded", function () {
    const serviceList = document.querySelector(".service-list");
    const serviceItems = document.querySelectorAll(".service-item");
    const prevBtn = document.querySelector("#prev-client");
    const nextBtn = document.querySelector("#next-client");

    let currentIndex = 0;

    function updateButtons() {
        prevBtn.classList.toggle("disabled", currentIndex === 0);
        nextBtn.classList.toggle("disabled", currentIndex === serviceItems.length - 1);
    }

    function updateCarousel() {
        const translateX = -currentIndex * serviceItems[0].offsetWidth;
        serviceList.style.transform = `translateX(${translateX}px)`;
    }

    prevBtn.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
            updateButtons();
        }
    });

    nextBtn.addEventListener("click", function () {
        if (currentIndex < serviceItems.length - 1) {
            currentIndex++;
            updateCarousel();
            updateButtons();
        }
    });

    // Atualiza os botões iniciais
    updateButtons();
});
