// Importar Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-auth.js";

// CONFIGURACIÓN DE TU PROYECTO
const firebaseConfig = {
    apiKey: "AIzaSyC8fNiiE294HA6fmo3hX8AZRX8lboH8YuI",
    authDomain: "reserva-hoteles-e2e6f.firebaseapp.com",
    projectId: "reserva-hoteles-e2e6f",
    storageBucket: "reserva-hoteles-e2e6f.firebasestorage.app",
    messagingSenderId: "566328480066",
    appId: "1:566328480066:web:9e98afc4ce144ead2d78db",
    measurementId: "G-ZLJXZ8JZKW"
};

// Inicialización
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Exportar para usar en otros módulos
export { db, auth };
