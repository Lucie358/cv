$(document).ready(function() {
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
});