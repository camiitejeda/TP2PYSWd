$(document).ready(function () {
  // Inicializar tooltips
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  // Toggle entre mensual y anual
  $('#togglePrecios').on('change', function () {
    const anual = $(this).is(':checked');

    // Actualizar tabla
    $('.precio').each(function () {
      const precio = anual ? $(this).data('anual') : $(this).data('mensual');
      $(this).text(`$${precio}`);
    });

    // Actualizar cards
    $('.card__price').each(function () {
      const precio = anual ? $(this).data('anual') : $(this).data('mensual');
      $(this).text(`$${precio}`);
    });
  });

  // Resaltar fila y columna al hacer hover
  $('#tabla-precios tbody tr').hover(function () {
    const colIndex = $(this).children(':hover').index();

    $(this).addClass('table-active');
    $('#tabla-precios tbody tr').each(function () {
      $(this).find('td').eq(colIndex).addClass('table-active');
    });
  }, function () {
    $('#tabla-precios tbody tr, #tabla-precios tbody td').removeClass('table-active');
  });
});
