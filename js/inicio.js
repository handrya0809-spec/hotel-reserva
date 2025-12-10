// BOTONES RESERVAR → ABREN EL MODAL
document.querySelectorAll(".btn-reservar").forEach(btn => {
    btn.addEventListener("click", (e) => {
        const card = e.target.closest(".room-card");

        document.getElementById("modalNombre").innerText =
            card.querySelector("h4").innerText;

        document.getElementById("modalPrecio").innerText =
            card.querySelector(".price").innerText;

        document.getElementById("modalReserva").style.display = "flex";
    });
});

// CERRAR MODAL
document.getElementById("cerrarModal").onclick = () => {
    document.getElementById("modalReserva").style.display = "none";
};
