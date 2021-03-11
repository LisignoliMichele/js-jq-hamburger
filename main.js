var hamburgerMenu = $(".hamburger-menu");
var hamburgerBars = $(".header-right > a");
var close = $(".close")


hamburgerBars.click(
  function () {
    hamburgerMenu.hide("slow");
  }
);
close.click(
  function (){
    hamburgerMenu.show("fast");
  }
)
