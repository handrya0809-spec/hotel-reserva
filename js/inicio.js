import { auth } from "./main.js";
import { signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// 🔍 Verificar si el usuario está logueado
onAuthStateChanged(auth, (user) => {
    if (user) {
        // Mostrar correo del usuario en la parte superior
        const emailSpan = document.getElementById("user-email");
        if (emailSpan) emailSpan.textContent = user.email;
    } else {
        // Si NO está logueado, enviarlo al login cliente
        window.location.href = "login-cliente.html";
    }
});

// 🔴 Botón cerrar sesión
const logoutBtn = document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
        signOut(auth).then(() => {
            window.location.href = "login-cliente.html";
        });
    });
}
