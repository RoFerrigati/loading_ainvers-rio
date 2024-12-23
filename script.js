// Data do evento (data do aniversário)
const eventDate = new Date("2024-12-30T00:00:00").getTime();

// Função para calcular a contagem regressiva
function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Quando o evento acontecer
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown").innerHTML = "O evento começou!";
    }
}

// Atualiza a contagem regressiva a cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);
