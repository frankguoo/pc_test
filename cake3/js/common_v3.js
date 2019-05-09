$(function() {
  $(".ball").draggable();
});

$(".note").on("click", function() {
  html2canvas(document.getElementById("game")).then(function(canvas) {
    console.log(canvas.toDataURL("image/png"));
    var myImage = canvas.toDataURL("image/png");
    $(".lightbox").fadeIn(200);
    $(".image")
      .attr("src", myImage)
      .fadeIn(200);
  });
});

$(".closebox").on("click", function() {
  $(".lightbox").css("display", "none");
});
