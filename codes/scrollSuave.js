var $doc = $('html, body');
  $('.scroll-suave').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 700);
    return false;
});