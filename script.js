document.addEventListener("DOMContentLoaded", () => {
    const btnHumedo = document.getElementById("btn-humedo");
    const btnSeco = document.getElementById("btn-seco");
    const plantEmoji = document.getElementById("plant-emoji");
    const statusText = document.getElementById("status-text");
    const led = document.getElementById("led");

    btnHumedo.addEventListener("click", () => {
        // Cambiar estados de botones
        btnHumedo.classList.add("active");
        btnSeco.classList.remove("active");

        // Cambiar simulación visual (Normal)
        plantEmoji.innerText = "🌿";
        plantEmoji.classList.remove("withered");
        statusText.innerText = "Planta Saludable (Señales eléctricas estables)";
        statusText.style.color = "#2e7d32";

        // Apagar LED de alerta
        led.className = "led-off";
    });

    btnSeco.addEventListener("click", () => {
        // Cambiar estados de botones
        btnSeco.classList.add("active");
        btnHumedo.classList.remove("active");

        // Cambiar simulación visual (Estrés)
        plantEmoji.innerText = "🥀";
        plantEmoji.classList.add("withered");
        statusText.innerText = "¡Estrés Hídrico Detectado! (Falta de agua)";
        statusText.style.color = "#d32f2f";

        // Encender LED de alerta
        led.className = "led-on";
    });
});
