import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js"
import { auth } from './firebase.js'
import { showMessage } from './showMessage.js'

const signUpForm = document.querySelector("#signup-form");
console.log(signUpForm);
signUpForm.addEventListener('submit', async(e) => {
    e.preventDefault();
    const email = signUpForm["signup-email"].value;
    const password = signUpForm["signup-password"].value;
    console.log(email, password);

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        //close modal signup form
        const signupModal = document.querySelector('#signupModal')
        const modal = bootstrap.Modal.getInstance(signupModal)
        modal.hide()
        showMessage("Welcome " + userCredentials.user.email)

    } catch (error) {
        console.log(error.message)
        console.log(error.code)
        if (error.code === 'auth/email-already-in-use') {
            showMessage("Email already in use", "error")
        } else if (error.code === 'auth/invalid-email') {
            showMessage("Invalid email", "error")
        } else if (error.code === 'auth/weak-password') {
            showMessage("Password is too weak", "error")
        } else if (error.code) {
            showMessage("Something went wrong", "error")
        }

    }


});