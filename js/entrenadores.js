$(document).ready(function() {
    // Detectar el hover sobre la tarjeta para activar la animación de las barras
    $('.card').hover(
        function() {
            // Cuando se pasa el mouse sobre la tarjeta (se voltea hacia la parte trasera)
            var idDominio = $(this).find('#dominio');
            var idFlexibilidad = $(this).find('#flexibilidad');
            var idControl = $(this).find('#control');
            var idResistencia = $(this).find('#resistencia');
            var idRitmo = $(this).find('#ritmo');
            var idEnergia = $(this).find('#energia');
            var idPotencia = $(this).find('#potencia');
            var idConstancia = $(this).find('#constancia');
            var idResistenciaAR = $(this).find('#resistenciaAR');
            var idVersatilidad = $(this).find('#versatilidad');
            var idExplosividad = $(this).find('#explosividad');
            var idOptimizacion = $(this).find('#optimizacion');

            // Animar las barras de habilidad con un retraso
            setTimeout(function() {
                idDominio.val(0).animate({value: 86}, 2000);  // Animación para la barra de Fuerza
                idFlexibilidad.val(0).animate({value: 70}, 2000);  // Animación para la barra de Flexibilidad
                idControl.val(0).animate({value: 92}, 2000);  // Animación para la barra de Cardio
                idResistencia.val(0).animate({value: 88}, 2000);  // Animación para la barra de Resistencia
                idRitmo.val(0).animate({value: 96}, 2000);  // Animación para la barra de Fuerza
                idEnergia.val(0).animate({value: 98}, 2000); 
                idPotencia.val(0).animate({value: 86}, 2000);  // Animación para la barra de Fuerza
                idConstancia.val(0).animate({value: 70}, 2000);  // Animación para la barra de Flexibilidad
                idResistenciaAR.val(0).animate({value: 92}, 2000);  // Animación para la barra de Cardio
                idVersatilidad.val(0).animate({value: 88}, 2000);  // Animación para la barra de Resistencia
                idExplosividad.val(0).animate({value: 96}, 2000);  // Animación para la barra de Fuerza
                idOptimizacion.val(0).animate({value: 98}, 2000); 
            }, 300);  // Retardo de 300ms antes de iniciar la animación
        },
        function() {
            // Cuando el mouse sale de la tarjeta (se voltea hacia la parte frontal)
            var idDominio = $(this).find('#dominio');
            var idFlexibilidad = $(this).find('#flexibilidad');
            var idControl = $(this).find('#control');
            var idResistencia = $(this).find('#resistencia');
            var idRitmo = $(this).find('#ritmo');
            var idEnergia = $(this).find('#energia');
            var idPotencia = $(this).find('#potencia');
            var idConstancia = $(this).find('#constancia');
            var idResistenciaAR = $(this).find('#resistenciaAR');
            var idVersatilidad = $(this).find('#versatilidad');
            var idExplosividad = $(this).find('#explosividad');
            var idOptimizacion = $(this).find('#optimizacion');

            // Resetear las barras a 0 cuando el mouse sale de la tarjeta
            idDominio.val(0);
            idFlexibilidad.val(0);
            idControl.val(0);
            idResistencia.val(0);
            idRitmo.val(0);
            idEnergia.val(0);
            idPotencia.val(0);
            idConstancia.val(0);
            idResistenciaAR.val(0);
            idVersatilidad.val(0);
            idExplosividad.val(0);
            idOptimizacion.val(0);
        }

        
    );
});

