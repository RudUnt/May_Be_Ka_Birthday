
// *** For Every One
// var birth = prompt("Happy Birthday Dear... please Enter Your Name");
// if (birth != null) {
//   $("title").text(birth + "'s Birthday");
// } // *** For Every One End ***

// *** Individual Person
var birth = "Sameeksha";
$("title").text("May_Be_Ka_Birthday"); // Individual Person end ***



birth = birth.toUpperCase();

var hitMe = $(".btn");
hitMe.on("click", function () {
  hitMe.hide();
  $("body").addClass("body-background");
  $(".heading-container").append(
    ' <h2 class="heading">Wish you <br />very<br />Happy Birthday</h2>'
  );

  var j = 1;

  var interval = setInterval(function () {
    if (j === birth.length + 1) {
      j = 1;
    }
    $("." + j)
      .fadeOut(timerOut)
      .fadeIn(timerIn);
    j++;
  }, 300);

  setTimeout(function () {
    clearInterval(interval);
  }, 15000);

  var i = 1;
  var first = setInterval(function () {
    if (i === birth.length) {
      clearInterval(first);
    }
    $(".container-fluid").append(
      '<h1 class="' + i + ' letter-decoration">' + birth.charAt(i - 1) + "</h1>"
    );
    i++;
  }, 100);

  if ($(window).innerWidth() <= 1000) {
    var l = 1;
    var wish =
      "I wish your all aims comes true... God bless you, Happy Day Dear Again...      MAY BE.✨✨🎊🎂";
    setTimeout(function () {
      var wishes = setInterval(function () {
        if (l === wish.length) {
          clearInterval(wishes);
        }
        var c = "c";
        if (l == "22" || l == "36" || l == "51" || l == "66" || l == "76") {
          $(".wishes").append(
            "<br/><h2 class='wishes-heading'>" + wish.charAt(l - 1) + "</h2>"
          );
          l++;
        }
        $(".wishes").append(
          "<h2 class='wishes-heading'>" + wish.charAt(l - 1) + "</h2>"
        );
        l++;
      }, 100);
    }, birth.length * 100 + 1000);
  }

  setInterval(function () {
    $(".heading").fadeIn(200).fadeOut(200);
  }, 100);

  hitMe.after(
    ' <audio class="sound" controls autoplay loop><source src="https://github.com/rudrauntwal/birthdaySong/raw/main/birthdaySong.mp3" /></audio>'
  );
});

// $(".btn").on("mouseenter mouseleave", function () {
//   $(".btn").toggleClass("btn-shadow");
// });

// function blinker() {
//   $(".btn").fadeIn(1000);
//   $(".btn").fadeOut(1000);
// }
// intervalHandler = setInterval(blinker, 1000);

// $(".btn").mouseover(function () {
//   clearInterval(intervalHandler);
//   intervalHandler = undefined;
//   $(".btn").fadeIn(1000);
// });

var timerIn = 300;
var timerOut = 500;
