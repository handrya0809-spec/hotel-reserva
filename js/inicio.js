// js/inicio.js
import { auth } from './main.js';
import { signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js';


onAuthStateChanged(auth, (user) => {
const loginButton = document.querySelector('.dropdown');
const logoutButton = document.getElementById('logoutBtn');
const userEmail = document.getElementById('user-email');


if (user) {
if (userEmail) userEmail.textContent = user.email;
if (logoutButton) logoutButton.style.display = 'block';
if (loginButton) loginButton.style.display = 'none';
} else {
if (logoutButton) logoutButton.style.display = 'none';
if (loginButton) loginButton.style.display = 'block';
}
});


const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
logoutBtn.addEventListener('click', () => {
signOut(auth).then(() => {
window.location.href = 'login-cliente.html';
});
});
}
