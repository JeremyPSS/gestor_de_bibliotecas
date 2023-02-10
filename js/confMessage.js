import { messageAlert } from './messageAlert.js'

export const aprobado = user => {
    const buscNe = document.getElementById("neBu");
    buscNe.addEventListener('click', async(e) => {
        if (user) {
            window.location.href = "search.html"
        } else {
            messageAlert('Para usar este servicio inicie sesión')
        }

    })
}