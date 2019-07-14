$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > 1);
  });
});

//vanilla JS
