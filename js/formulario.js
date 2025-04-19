$(document).ready(function () {
    const campos = ['#nombre', '#email', '#telefono', '#asunto', '#tipo', '#mensaje', '#terminos'];
  
    // Validación en tiempo real
    campos.forEach(selector => {
      $(selector).on('input change', function () {
        const input = $(this);
        if (input[0].checkValidity()) {
          input.removeClass('is-invalid').addClass('is-valid');
        } else {
          input.removeClass('is-valid').addClass('is-invalid');
        }
      });
    });
  
    // Enviar formulario
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
  
      let valido = true;
      campos.forEach(selector => {
        const input = $(selector);
        if (!input[0].checkValidity()) {
          input.removeClass('is-valid').addClass('is-invalid');
          valido = false;
        } else {
          input.removeClass('is-invalid').addClass('is-valid');
        }
      });
  
      if (!valido) return;
  
      // Mostrar spinner
      $('#spinner').removeClass('d-none');
  
      // Simulación de envío
      setTimeout(() => {
        $('#spinner').addClass('d-none');
        $('#contactForm')[0].reset();
        $('.is-valid').removeClass('is-valid');
  
        const modal = new bootstrap.Modal(document.getElementById('confirmModal'));
        modal.show();
      }, 1500);
    });
  });
  