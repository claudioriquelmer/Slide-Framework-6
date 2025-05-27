const formSubmitted = () => {

    // Paso 1: Capturamos el Botón
    const boton = document.getElementById('button_submit_form');

    // Paso 2: Deshabilitamos el botón
    boton.setAttribute('disabled', '');

    // Paso 3: Añadimos el ícono de "cargando" con Font Awesome
    boton.innerHTML = '<i class="fa fa-refresh fa-spin"></i> Enviando...';

    // Paso 4: Mostramos SweetAlert2 durante 4 segundos
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: '💪🏻 Reserva Enviada',
        text: '📩 Instrucciones en tu correo electrónico',
        showConfirmButton: false,
        timer: 4000
    });

    // Paso 5: Quitamos el icono de carga y restauramos el botón después de 4 segundos
    setTimeout(() => {
        boton.removeAttribute('disabled');
        boton.innerHTML = 'Reserva Enviada 📨';
        console.log('5. Botón restaurado con mensaje final');
    }, 4000);

    // Paso 5: Recargamos la página después de 6 segundos o redireccionamos hacia un URL
    setTimeout(() => {
        window.location = '/';
    }, 6000);
};