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
