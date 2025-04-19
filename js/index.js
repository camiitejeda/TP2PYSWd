// Activar el contador animado con CountUp.js
$(document).ready(function() {
    var countUp = new CountUp('counter', 0, 500, 0, 2.5);
    if (!countUp.error) {
        countUp.start();
    } else {
        console.error(countUp.error);
    }

    // Animación de hover en las cards
    $('.card').hover(
        function() {
            // Animación cuando el mouse entra en la card
            $(this).animate({
                scale: 1.05
            }, 200); // Aumenta ligeramente el tamaño de la card
        },
        function() {
            // Animación cuando el mouse sale de la card
            $(this).animate({
                scale: 1
            }, 200); // Restaura al tamaño original
        }
    );

    // Spinner del formulario (para simular la carga)
    $('#newsletter-form').on('submit', function(e) {
        e.preventDefault(); // Previene el envío por defecto del formulario
        $('#spinner').show(); // Muestra el spinner

        // Simulamos una solicitud de carga (por ejemplo, con setTimeout)
        setTimeout(function() {
            $('#spinner').hide(); // Oculta el spinner
            alert('¡Gracias por suscribirte!');
        }, 2000); // Simula que la carga dura 2 segundos
    });
});
