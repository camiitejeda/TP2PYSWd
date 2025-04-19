$(document).ready(function () {
    // Scroll reveal con AOS
    AOS.init();
  
    // Filtrado por tags
    $('.filter-btn').on('click', function () {
      const filter = $(this).data('filter');
      if (filter === 'all') {
        $('.blog-item').fadeIn();
      } else {
        $('.blog-item').each(function () {
          $(this).toggle($(this).hasClass(filter));
        });
      }
    });
  
    // Acción de responder comentario (demo)
    $('.btn-responder').on('click', function () {
      const nombre = $(this).siblings('strong').text();
      alert(`Responder a ${nombre}`);
    });
  });
  