$(document).ready(function(){
    $('.ts-faq .panel-heading').on('click',function(){
        $('.panel-collapse').stop().slideUp();
        $(this).next('.panel-collapse').stop().slideToggle();
    });

    $('#ts-faq-tab').on('click','li',function (e) {
        e.preventDefault()
        var idx = $(this).index();

        //init
        $('#ts-faq-tab li').removeClass('active');
        $('#ts-faq-tab ~ .panel-group').hide();
        $('.panel-collapse').stop().slideUp();
        //show
        $(this).addClass('active');
        $('#ts-faq-tab ~ .panel-group').eq(idx).show();
     })
});
