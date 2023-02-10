   export function messageAlert(message) {
       Swal.fire({

           title: message,
           confirmButtonColor: "#495579",
           confirmButtonText: 'Aceptar',
           background: '#DFEAFD',
           icon: 'info',
           timer: 3000,

       })
   }