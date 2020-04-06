var app = {
  init() {
    app.initLightbox();
    app.initNavbarAutoCollapse();
  },

  initLightbox() {
    $(".lightbox img").click(function () {
      var $body = $("body");
      $body.addClass("overflow-hidden");
      var $imgHref = $(this).attr("src");
      var $lightbox = $('<div id="lightbox">');
      var $lightboxImage = $("<img>").attr("src", $imgHref);
      $lightbox.append($lightboxImage);
      $lightbox.fadeIn(400);
      $body.append($lightbox);
      $("#lightbox").on("click", function (remove) {
        //Lorsque l'utilisateur clique en dehors de l'image, la lightbox se ferme et est supprimée
        if (remove.target == this) {
          //La fermeture au clique ne fonctionne qu'en dehors de l'image
          $lightbox.fadeOut(200, function () {
            $("#lightbox").remove();
          });
        }
      });
    });
  },

  toggleTheme(el) {
    $(document.body).toggleClass("dark");
    var isDark = $(document.body).hasClass("dark");
    if (isDark === true) {
      app.switchToDark();
    } else {
      app.switchToLight();
    }
  },

  switchToDark(el) {
    var navbar = $("nav");
    navbar.removeClass("navbar-light");
    navbar.addClass("navbar-dark bg-dark");
  },

  switchToLight(el) {
    var navbar = $("nav");
    navbar.removeClass("navbar-dark bg-dark");
    navbar.addClass("navbar-light bg-light");
  },

  initNavbarAutoCollapse(){
    $(".navbar-collapse a").click(function () {
      $(".navbar-collapse").collapse("hide");
    });
  
  }
};

$(document).ready(function () {

  app.init();
});
