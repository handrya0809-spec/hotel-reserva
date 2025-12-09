import { auth } from "./main.js";
import {
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// ✔ Verificar si el usuario está autenticado
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Mostrar correo del usuario
        const emailSpan = document.getElementById("user-email");
        if (emailSpan) emailSpan.textContent = user.email;
    } else {
        // Si no está logueado → enviar al login cliente
        window.location.href = "login-cliente.html";
    }
});

// ✔ Botón cerrar sesión
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "login-cliente.html";
        });
    });
}
