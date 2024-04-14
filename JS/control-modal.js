document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario-contacto');
    const modal = document.getElementById('confirmModal');
    const closeButton = document.querySelector('.close-button');
    const messageText = document.getElementById('messageText');
    const emailText = document.getElementById('emailText');
    const mensajeInput = form.querySelector('.mensaje');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const email = form.querySelector('.email').value;
        const mensaje = mensajeInput.value;

        messageText.textContent = `"${mensaje}"`;
        emailText.textContent = email;

        modal.style.display = 'flex';

        mensajeInput.value = '';
    });

    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
