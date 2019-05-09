$(function() {
  $(".ball").draggable();
});

$(".save").on("click", function() {
  html2canvas(document.getElementById("game")).then(function(canvas) {
    var myImage = canvas.toDataURL("image/png");
    saveAs(myImage, 'image.png');
    });
});

function saveAs(uri, filename) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
$(".note2").on("click", function() {
  html2canvas(document.getElementById("game")).then(function(canvas) {
    console.log(canvas.toDataURL("image/png"));
    var myImage = canvas.toDataURL("image/png");
    $(".lightbox").fadeIn(200);
    $(".image").attr("src", myImage).fadeIn(200);
    });
});



$(".closebox").on("click", function() {
  $(".lightbox").css("display", "none");
});
