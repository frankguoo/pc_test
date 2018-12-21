$(function() {


    function selectTotal() {
        var va1 = parseInt($('input[name=costUsage]:checked').val());
        var va2 = parseInt($('input[name=costSpeed]:checked').val());
        var va3 = parseInt($('input[name=costOutside]:checked').val());
        var va4 = parseInt($('input[name=costLocal]:checked').val());
        var va5 = parseInt($('input[name=costUnlimited]:checked').val());
        var total;

        if (va1 != 288) {
          total = va1 + va2 + va3 + va4 + va5;
            $('input[name=costUnlimited]').removeClass('notSelect');
            $('section.costUnlimited input').removeAttr('disabled');
            $('span.tip').css('color', '#000');

        } else if (va1 == 288) {
           total = va1 + va2 + va3 + va4;
      $('input[name=costUnlimited][value=0]').prop('checked', true);
      $('input[name=costUnlimited]').addClass('notSelect');
      $('section.costUnlimited input').attr('disabled', 'disabled');
        $('span.tip').css('color', '');
        }

        if (total > 100) {
            $('.bonus').addClass('active');
        } else {
            $('.bonus').removeClass('active');
        }

        if($('input[name=costLocal]:checked').val()==0){

        }

        $('.result').text("$" + total);

    }

        selectTotal();

    $('.select_area_black input').on('change', function() {
        selectTotal();
    });

 
	$(" #goV ").on('click', function() {
		var paValue1 = $('input[name=costUsage]:checked').data('para'),
            paValue3 = $('input[name=costSpeed]:checked').data('para'),
            paValue2 = $('input[name=costOutside]:checked').data('para'),
            paValue4 = $('input[name=costLocal]:checked').data('para'),
            paValue5 = $('input[name=costUnlimited]:checked').data('para'),
            paName1 = 'diyn',
            paName2 = 'diyt',
            paName3 = 'diynt',
            paName4 = 'diyex',
            paName5 = 'diynm'
        var toURL = "https://shop.tstartel.com/shopping/initDiy";
        var Parameter = "?" + paName1 + "=" + paValue1 + "&" + paName3 + "=" + paValue3 + "&" + paName2 + "=" + paValue2 + "&" + paName4 + "=" + paValue4 + "&" + paName5 + "=" + paValue5;
        console.log("1111->" + Parameter);
        $(this).attr('href', toURL + Parameter);

    });


    $(" #goV2 ").on('click', function() {
		var paValue1 = $('input[name=costUsage]:checked').data('para'),
            paValue3 = $('input[name=costSpeed]:checked').data('para'),
            paValue2 = $('input[name=costOutside]:checked').data('para'),
            paValue4 = $('input[name=costLocal]:checked').data('para'),
            paValue5 = $('input[name=costUnlimited]:checked').data('para'),
            paName1 = 'diyn',
            paName2 = 'diyt',
            paName3 = 'diynt',
            paName4 = 'diyex',
            paName5 = 'diynm'
         var toURL = "https://shop.tstartel.com/shopping/initDiyDevice";
         var Parameter = "?" + paName1 + "=" + paValue1 + "&" + paName3 + "=" + paValue3 + "&" + paName2 + "=" + paValue2 + "&" + paName4 + "=" + paValue4 + "&" + paName5 + "=" + paValue5;
         //console.log("123123->" + Parameter);
        $(this).attr('href', toURL + Parameter);

	});

})
