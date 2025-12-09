import { auth } from "./main.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// Verificar si el usuario está autenticado
onAuthStateChanged(auth, (user) => {
    const loginButton = document.querySelector(".dropdown"); // Botón desplegable de login
    const logoutButton = document.getElementById("logoutBtn"); // Botón de logout
    const userEmail = document.getElementById("user-email");

    if (user) {
        // Mostrar correo y el botón de cerrar sesión
        if (userEmail) userEmail.textContent = user.email;
        if (logoutButton) logoutButton.style.display = "block";
        if (loginButton) loginButton.style.display = "none"; // Ocultar el botón de login cuando el usuario está logueado
    } else {
        // Mostrar solo el botón de login
        if (logoutButton) logoutButton.style.display = "none";
        if (loginButton) loginButton.style.display = "block";
    }
});

// Funcionalidad para Cerrar sesión
const logoutBtn = document.getElementById("logoutBtn");
if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "login-cliente.html"; // Redirigir al login
        });
    });
}
