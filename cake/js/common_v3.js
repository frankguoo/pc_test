$('.note').on('click', function(){
    html2canvas($(".game_wrap"), {
            onrendered: function(canvas) {
                    var myImage = canvas.toDataURL("image/png");
                $('.lightbox').fadeIn(200);
                $('.image').attr('src', myImage).fadeIn(200);
            }
    });
});

$('.closebox').on('click', function(){
    $('.lightbox').css("display","none");
});
