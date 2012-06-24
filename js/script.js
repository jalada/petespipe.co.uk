$(function() {

  var images = $("#images img"),
      currentImage = Math.floor(Math.random() * images.length);

      swapImage = function() {
        currentImage = (currentImage + 1) % images.length;
        $("#images img").fadeOut();
        $("#images img").eq(currentImage).fadeIn();
      };

  setInterval(swapImage, 5000);

  swapImage();

});
