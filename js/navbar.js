$(function() {
  $(document).scroll(function() {
    var $nav = $(".navbar");
    $nav.toggleClass("scrolled", $(this).scrollTop() > 1);
  });
});
//vanilla JS
$(document).ready(function() {
  $(document).on("click", ".nav-item a", function(e) {
    $(this)
      .parent()
      .addClass("active")
      .siblings()
      .removeClass("active");
  });
});
