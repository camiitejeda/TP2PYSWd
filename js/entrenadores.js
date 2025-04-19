$(document).ready(function() {
    // Detectar el hover sobre la tarjeta para activar la animación de las barras
    $('.card').hover(
        function() {
            // Cuando se pasa el mouse sobre la tarjeta (se voltea hacia la parte trasera)
            var idFuerza = $(this).find('#fuerza');
            var idFlexibilidad = $(this).find('#flexibilidad');
            var idCardio = $(this).find('#cardio');
            var idResistencia = $(this).find('#resistencia');
            var idFuerza2 = $(this).find('#fuerza2');
            var idFlexibilidad2 = $(this).find('#flexibilidad2');

            // Animar las barras de habilidad con un retraso
            setTimeout(function() {
                idFuerza.val(0).animate({value: 80}, 2000);  // Animación para la barra de Fuerza
                idFlexibilidad.val(0).animate({value: 70}, 2000);  // Animación para la barra de Flexibilidad
                idCardio.val(0).animate({value: 85}, 2000);  // Animación para la barra de Cardio
                idResistencia.val(0).animate({value: 90}, 2000);  // Animación para la barra de Resistencia
                idFuerza2.val(0).animate({value: 75}, 2000);  // Animación para la barra de Fuerza
                idFlexibilidad2.val(0).animate({value: 65}, 2000);  // Animación para la barra de Flexibilidad
            }, 300);  // Retardo de 300ms antes de iniciar la animación
        },
        function() {
            // Cuando el mouse sale de la tarjeta (se voltea hacia la parte frontal)
            var idFuerza = $(this).find('#fuerza');
            var idFlexibilidad = $(this).find('#flexibilidad');
            var idCardio = $(this).find('#cardio');
            var idResistencia = $(this).find('#resistencia');
            var idFuerza2 = $(this).find('#fuerza2');
            var idFlexibilidad2 = $(this).find('#flexibilidad2');

            // Resetear las barras a 0 cuando el mouse sale de la tarjeta
            idFuerza.val(0);
            idFlexibilidad.val(0);
            idCardio.val(0);
            idResistencia.val(0);
            idFuerza2.val(0);
            idFlexibilidad2.val(0);
        }
    );
});
