    // Formulario de testimonio
    $('#form-testimonio').on('submit', function (e) {
        e.preventDefault();

        const nombre = $('#nombre');
        const mensaje = $('#mensaje');
        let valido = true;

        // Limpiar errores anteriores
        nombre.removeClass('is-invalid');
        mensaje.removeClass('is-invalid');

        // Validaciones
        if (nombre.val().trim() === '') {
            nombre.addClass('is-invalid');
            valido = false;
        }
        if (mensaje.val().trim() === '') {
            mensaje.addClass('is-invalid');
            valido = false;
        }

        if (valido) {
            // Agregar testimonio al carrusel
            const nuevoItem = $(`
                <div class="carousel-item">
                    <blockquote class="testimonial-card">
                        <p>"${mensaje.val().trim()}"</p>
                        <footer>- ${nombre.val().trim()}</footer>
                    </blockquote>
                </div>
            `);

            $('.carousel-item.active').removeClass('active');
            nuevoItem.addClass('active');
            $('.carousel-inner').append(nuevoItem);

            // Mostrar mensaje de agradecimiento
            $('#mensaje-exito').removeClass('d-none');

            // Resetear formulario
            this.reset();

            // Ocultar mensaje después de 4 segundos
            setTimeout(() => {
                $('#mensaje-exito').addClass('d-none');
            }, 4000);
        }
    });

    $(document).ready(function () {
        $("#newsletter-footer-form").on("submit", function (event) {
          event.preventDefault();
      
          var email = $("#footer-email").val();
          if (validateEmail(email)) {
            $("#footer-spinner").show();
            $("#footer-error").hide();
      
            setTimeout(function () {
              $("#footer-spinner").hide();
              alert("¡Gracias por suscribirte!");
            }, 2000);
          } else {
            $("#footer-error").show();
          }
        });
      
        function validateEmail(email) {
          var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/;
          return regex.test(email);
        }
      });
      