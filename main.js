var hamburgerMenu = $(".hamburger-menu");
var hamburgerBars = $(".header-right > a");
var close = $(".close")


hamburgerBars.click(
  function () {
    hamburgerMenu.show("slow");
  }
);
close.click(
  function (){
    hamburgerMenu.hide("fast");
  }
)
