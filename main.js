$(function()
{
    var config = {
         API_URL   : 'https://ecapi.pchome.com.tw'
        ,LOGIN_URL : 'https://ecvip.pchome.com.tw/login/v2/login.htm'
    };

    $(document).data('VTID', 'V4241230');

    $(document)
        .on('_get.Ticket', function(e, strVTId)
        {
            $.ajax({
                     url          : config.API_URL + '/marketing/vote/v1/index.php/activity/' + strVTId + '/detail'
                    ,type         : 'GET'
                    ,dataType     : 'jsonp'
                    ,jsonp        : '_callback'
                    ,jsonpCallback: 'JqueryCB_getActitivyDetail'
                    ,xhrFields    : {withCredentials:true}
                })
                .done(function(arrData)
                {
                    $.each(arrData, function(idx, objData)
                    {
                        $(document).find('span[_val='+objData.No+']').html(objData.TotalTicket);
                    });
                })
                .fail(function()
                {

                });
        })
        .on('_vote', function(e, strVTId, strVTNo)
        {
            if($('#ShardowLayout').is(':visible'))
            {
                return false;
            }

            $('#ShardowLayout')
                .removeClass('fade-ready fade-out')
                .addClass('fade-in')
                .show();

            var dfdLogin = $.Deferred();

            $.ajax({
                     url          : config.API_URL + '/member/v2/member/islogin'
                    ,type         : 'GET'
                    ,dataType     : 'jsonp'
                    ,cache        : false
                    ,jsonp        : '_callback'
                    ,jsonpCallback: 'JqueryCB_isLogin'
                    ,xhrFields    : {withCredentials:true}
                })
                .done(function(islogin)
                {
                    if(!islogin)
                    {
                        dfdLogin.reject();
                    }
                    else
                    {
                        dfdLogin.resolve();
                    }
                })
                .fail(function()
                {
                    dfdLogin.reject();
                });

            dfdLogin
                .done(function()
                {
                    $.ajax({
                         url        : config.API_URL + '/marketing/vote/v1/index.php/activity/' + strVTId + '/detail/' + strVTNo + '?op=vote'
                        ,type       : 'POST'
                        ,crossDomain: true
                        ,xhrFields  : {withCredentials:true}
                    })
                    .done(function()
                    {
                        var intQty = parseInt($(document).find('span[_val='+strVTNo+']').html(), 10);

                        $(document).find('span[_val='+strVTNo+']').html((intQty + 1));

                        $('#Status_201')
                            .removeClass('fade-ready fade-out')
                            .addClass('tilt-down')
                            .show();

                    })
                    .fail(function(objXHR)
                    {
                        var strErrMsg = '';
                        var objRs     = JSON.parse(objXHR.responseText);
                        var strRsId   = '';

                        switch(objRs.Code)
                        {
                            default:
                            case '400-001': // щ筁布
                                strRsId = '#Status_400_001';
                            break;
                            case '400-002': // 狡щ布
                                strRsId = '#Status_400_002';
                            break;
                            case '400-003': // щ布笆﹟ゼ秨﹍
                                strRsId = '#Status_400_003';
                            break;
                            case '400-004': // щ布笆竒挡
                                strRsId = '#Status_400_004';
                            break;
                            case '400-005': // щ布杆竚ぃ才
                                strRsId = '#Status_400_005';
                            break;
                        }

                        $(strRsId).removeClass('fade-ready fade-out').addClass('tilt-down').show();
                    });
                })
                .fail(function()
                {
                    window.location.href = config.LOGIN_URL + '?rurl=' + encodeURIComponent(window.location.toString());
                })
        })
        .on('click', 'button[id^=btn]',function()
        {
            var strVTId = $(document).data('VTID');
            var strVTNo = $(this).attr('_val');

            if(strVTId && strVTNo)
            {
                $(document).trigger('_vote', [strVTId, strVTNo]);
            }
        })
        .on('click', '.overlay-lightbox, .overlay-lightbox span.ui-btn', function()
        {
            $('#ShardowLayout').hide();
                    $('.overlay-lightbox').hide();
        })
        .trigger('_get.Ticket', [$(document).data('VTID')])
        .trigger('_setEvent');
});
