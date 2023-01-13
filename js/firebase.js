import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyABa0z74pTvySZt-fp-g2ANRFJG1Rzozg8",
    authDomain: "isbook-2d9e4.firebaseapp.com",
    databaseURL: "https://isbook-2d9e4-default-rtdb.firebaseio.com",
    projectId: "isbook-2d9e4",
    storageBucket: "isbook-2d9e4.appspot.com",
    messagingSenderId: "215669958169",
    appId: "1:215669958169:web:162c1b695564f568de6c88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);