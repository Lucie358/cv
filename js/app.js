var app = {
  init() {
    app.initLightbox();
  },

  initLightbox() {
    $(".lightbox img").click(function() {
      var $body = $("body");
      var $imgHref = $(this).attr("src");
      var $lightbox = $('<div id="lightbox">');
      var $lightboxImage = $("<img>").attr("src", $imgHref);
      $lightbox.append($lightboxImage);
      $lightbox.fadeIn(400);
      $body.append($lightbox);
      $("#lightbox").on("click", function(remove) {
        //Lorsque l'utilisateur clique en dehors de l'image, la lightbox se ferme et est supprimée
        if (remove.target == this) {
          //La fermeture au clique ne fonctionne qu'en dehors de l'image
          $lightbox.fadeOut(200, function() {
            $("#lightbox").remove();
          });
        }
      });
    });
  },

  toggleTheme(el) {
    $(document.body).toggleClass("dark");
    var isDark = $(document.body).hasClass("dark");
    //Si isDark retourne true alors on change le texte du boutton pour mettre light. Sinon on met dark.
    $(el).text(isDark ? "Mode clair" : "Mode sombre");
  }
};

$(document).ready(function() {
  app.init();
});
