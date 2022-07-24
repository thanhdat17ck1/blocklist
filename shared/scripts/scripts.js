$(document).ready(function () {
  $(".c-tab__link").on("click", function () {
    $(".c-tab__link").removeClass("is-active");
    $(this).addClass("is-active");
  });
});

$(document).ready(function () {
  $(".c-news__box").slice(0, 4).show();
  $("#loadMore").on("click", function (e) {
    e.preventDefault();
    $(".c-news__box:hidden").slice(0, 4).slideDown();
    if ($(".c-news__box:hidden").length == 0) {
      $("#loadMore").text("No Content").addClass("noContent");
    }
  });
});

$(document).scroll(function () {
  if ($(document).scrollTop() > 0) {
    $(".c-header").addClass("is-scroll");
  }
  if ($(document).scrollTop() == 0) {
    $(".c-header").removeClass("is-scroll");
  }
});

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
}
