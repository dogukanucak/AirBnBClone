let isOverlayMenuOpen = false;
const toggleMenuButton = $(".toggleMenuButton");
const mainLogo = $(".logo-main");
function openNav(options) {
  if (options && options.hasLogo) {
    $(mainLogo).addClass("overlay-top logo-persimmon");
  }
  $(toggleMenuButton).addClass("overlay-top open");
  $("body").css("overflow", "hidden");
  document.getElementById("overlayMenu").style.height = "100vh";
  isOverlayMenuOpen = true;
}

/* Close */
function closeNav() {
  document.getElementById("overlayMenu").style.height = "0%";
  $(toggleMenuButton).removeClass("open");
  $(mainLogo).removeClass("logo-persimmon");
  $("body").css("overflow", "auto");
  isOverlayMenuOpen = false;
}

function toggleNav(options) {
  if (isOverlayMenuOpen) {
    closeNav();
  } else {
    openNav(options);
  }
}

window.toggleNav = toggleNav;
