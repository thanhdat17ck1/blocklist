$(document).ready(function () {
  $(".c-tab__link").on("click", function () {
    $(".c-tab__link").removeClass("is-active");
    $(this).addClass("is-active");
  });
  $(".c-detail__link").on("click", function () {
    $(".c-detail__link").removeClass("is-active");
    $(this).addClass("is-active");
  });

  //search
  $("#search").on("keyup", function () {
    var input, filter, item, a, i, txtValue;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    item = document.getElementsByClassName("c-post__item");
    for (i = 0; i < item.length; i++) {
      a = item[i].getElementsByClassName("c-post__info")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        item[i].style.display = "";
      } else {
        item[i].style.display = "none";
      }
    }
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

//read more
$(document).ready(function () {
  $(".readMore span").click(function () {
    $(this).parents(".tabcontent1").toggleClass("read-active");
    $(".tabcontent1.test .content").slideDown("slow");

    if ($(".tabcontent1").hasClass("read-active")) {
      $(this).text("Close");
    } else {
      $(this).text("Read More");
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

$(document).ready(function () {
  $(".c-burger").click(function () {
    $(this).toggleClass("is-active");
    $(".c-header__nav").toggleClass("is-active");
    $("body").toggleClass("is-active");
    $(".c-header__logo").toggleClass("is-active");
  });
});

function tab(evt, idName) {
  var i, tabcontent;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  document.getElementById(idName).style.display = "block";
}

function tab1(evt, idName) {
  var i, tabcontent1;

  tabcontent1 = document.getElementsByClassName("tabcontent1");
  for (i = 0; i < tabcontent1.length; i++) {
    tabcontent1[i].style.display = "none";
  }
  document.getElementById(idName).style.display = "block";
}
