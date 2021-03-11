var hamburgerMenu = $(".hamburger-menu");
var hamburgerBars = $(".header-right > a");
var close = $(".close")


hamburgerBars.click(
  function () {
    hamburgerMenu.slideDown("slow");
  }
);
close.click(
  function (){
    hamburgerMenu.slideUp("fast");
  }
)
