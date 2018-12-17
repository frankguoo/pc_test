/*****************************************************************************
 * COPYRIGHT
 ****************************************************************************/
var COPYRIGHT_GAME = "© Nintendo / HAL Laboratory, Inc.";
var COPYRIGHT_CHARACTERS = "© Nintendo / HAL Laboratory, Inc. / Pokémon. / Creatures Inc. / GAME FREAK inc. / SHIGESATO ITOI / APE inc. / INTELLIGENT SYSTEMS / Konami Digital Entertainment / SEGA / CAPCOM CO., LTD. / BANDAI NAMCO Entertainment Inc. / MONOLITHSOFT / CAPCOM U.S.A., INC. / SQUARE ENIX CO., LTD. ";
var COPYRIGHT_CHARACTERS_FF = "FINAL FANTASY VII ©1997 SQUARE ENIX CO., LTD. All Rights Reserved.<br>CHARACTER DESIGN:TETSUYA NOMURA<br>LOGO ILLUSTRATION:©1997 YOSHITAKA AMANO";
  /*****************************************************************************
 * bottom fixed logo
 ****************************************************************************/
;(function($){
  $.fn.bottomFixedLogo = function( options ){
    var defaults = {};
    var settings = $.extend(defaults, options);
    return this.each(function(){
      var $fixedLogo = $(this);
      var $globalfooter = $('.globalfooter');

      var callback = function (t,b){

        var globalfooterTop = $globalfooter.offset().top;

        if(t > 0 && b > globalfooterTop){
          //$fixedLogo.css({'position':'absolute'});
          $('html').addClass('is-bottom-logo-out');
        }else{
          //$fixedLogo.css({'position':'fixed'});
          $('html').removeClass('is-bottom-logo-out');
        }
      };
      Shared.util.addScrollListener(callback);
    });
  };
})(jQuery);

;(function($){
function setPopup(url, name, w, h){
  var newPopup;
  var options = "toolbar=0,menubar=1,status=1,scrollbars=1,resizable=1";
  var x = (screen.availWidth - w)/2;
  var y = (screen.availHeight - h)/2;
  newPopup = window.open(url, name, "width=" + w + ",height=" + h + ",left=" + x + ", top=" + y + options);
  newPopup.focus();
}
function getCurrentDir(){
  var path = Shared.util.parseURI().directory;
  path.match(/^\/(.*?)\//);
  var dirName = RegExp.$1;
  return dirName;
}

//SNS URL set
$(function(){
  var _targetTw = $('.footer-share__item--tw');
  var _targetfb = $('.footer-share__item--fb');
  var _dir = getCurrentDir();
  var _path = Shared.util.parseURI().path;
  var _url = 'https://www.smashbros.com' + _path;
  var _title = document.title;
  var _twURL = 'https://twitter.com/share?url=' + encodeURIComponent(_url) + '&text=' + encodeURIComponent(_title);
  var _fbURL = 'https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(_url);

  if(_targetTw[0]) {
    _targetTw.find('a').attr('target', '_blank');
    _targetTw.find('a').attr('href', _twURL);

    if(!Shared.ua.isMobile && !Shared.ua.isTablet){
      _targetTw.find('a').on('click', function(e){
        e.preventDefault();
        var _this = $(this).attr('href');
        setPopup(_this, 'sns', 600, 600);
      });
    }
  }
  if(_targetfb[0]) {
    _targetfb.find('a').attr('target', '_blank');
    _targetfb.find('a').attr('href', _fbURL);
    if(!Shared.ua.isMobile && !Shared.ua.isTablet){
      _targetfb.find('a').on('click', function(e){
        e.preventDefault();
        var _this = $(this).attr('href');
        setPopup(_this, 'sns', 600, 600);
      });
    }
  }
});

})(jQuery);

  /*****************************************************************************
 * globalsidenav
 ****************************************************************************/
;(function($){
  $.fn.globalsidenav = function( options ){
    var defaults = {};
    var settings = $.extend(defaults, options);

    var $wrapper = $('.page-container');

    //$('.js-sidenav-open-trigger').on({
      //$'mouseenter' : function(){
        //$$wrapper.addClass('is-opened-sidenav');
      //$},
    //$});
    //$$('.js-sidenav-close-trigger').on({
      //$'mouseleave' : function(){
        //$$wrapper.removeClass('is-opened-sidenav');
      //$}
    //$});
    $('.js-sidenav-open-btn').on('click',function(e){
      e.preventDefault();
      $wrapper.addClass('is-opened-sidenav');
    });
    $('.js-sidenav-close-btn,.globalsidenav__layer').on('click',function(e){
      e.preventDefault();
      $wrapper.removeClass('is-opened-sidenav');
    });

    return this.each(function(){
      var $sidenav = $(this);
      var $globalfooter = $('.globalfooter');

      var callback = function (t,b){

        var globalfooterTop = $globalfooter.offset().top;
        var wrapper = $wrapper.offset().top;

        if(t > 0 && b > globalfooterTop){
          //$sidenav.css({'position':'absolute'});
          $('html').addClass('is-globalsidenav-out');
        }else{
          //$sidenav.css({'position':'fixed'});
          $('html').removeClass('is-globalsidenav-out');
        }
        if(t >= 0){
          $('html').addClass('is-inview-globalsidenav');
        }else{
          if(!$wrapper.hasClass('is-opened-sidenav')){
            $('html').removeClass('is-inview-globalsidenav');
          }
        }
      };
      Shared.util.addScrollListener(callback);
    });
  };
})(jQuery);

!(function($,Cookies){
  $(function(){
    //COPYRIGHT レンダー
    if($('#js-copyright-game')[0]){
      $('#js-copyright-game').html(COPYRIGHT_GAME);
    }
    if($('#js-copyright-characters')[0]){
      $('#js-copyright-characters').html(COPYRIGHT_CHARACTERS);
    }
    if($('#js-copyright-characters-ff')[0]){
      $('#js-copyright-characters-ff').html(COPYRIGHT_CHARACTERS_FF);
    }

    $('#js-bottom-fixed-logo').bottomFixedLogo();
    $('#js-globalsidenav').globalsidenav();

    $('.js-scroll').smoothScroll();



    /************************************************************************************************************************
     * COOKIE
     ************************************************************************************************************************/
    function getCurrentDir(path){
      path.match(/^\/(.*?)\//);
      var dirName = RegExp.$1;
      return dirName;
    }
    var path = '/' + getCurrentDir(Shared.util.parseURI().directory) + '/';

    if(Shared.lang.eu){
      if(!Cookies.get('smbCookieConfirm')){
        $('html').addClass('is-cookie-notes-open');
      }else{
        $('#js-cookie-notes').addClass('u-hide');
      }
    }else{
      $('#js-cookie-notes').addClass('u-hide');
    }

    $('#js-cookie-btn-ok').on('click',function (e) {
      e.preventDefault();
      Cookies.set('smbCookieConfirm', 1, { expires: 30,path: path });
      $('html').removeClass('is-cookie-notes-open');
      $('#js-cookie-notes').addClass('u-hide');
    });

    $('#js-cookie-btn-change').on('click',function (e) {
      e.preventDefault();
    });


    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/
    function setPaddingBody(isClose){
      var pr = parseInt($('body').css('padding-right'), 10);
      pr= pr ? pr : 0;
      $('body').css('padding-right', String(pr + ($.getScrollBarSize() * (isClose ? -1 : 1))) + 'px');
    }

    var $privacyModal = $('#privacyModal');
    var $privacyContents = $privacyModal.find('.privacyModal__contents');

    function openprivacyModal(path) {
      $('html').addClass('is-opened-modal');
      $privacyModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
        $privacyContents.append('<iframe src="' + path + '"></iframe>');
      }, 17);


    }

    function closeprivacyModal() {
      $('html').removeClass('is-init-modal');
      $privacyContents.html('');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $privacyModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.privacyModal){
      $('.js-privacypolicy').on('click', function(e) {
        e.preventDefault();
        var path = $(this).attr('href');
        if( window.innerWidth <= 980 ) {
          location.href = path;
        }else{
          openprivacyModal(path);
        }
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeprivacyModal();
    });



    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/

    var $productModal = $('#productModal');

    function openProductModal() {
      $('html').addClass('is-opened-modal');
      $productModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
      }, 17);
    }

    function closeProductModal() {
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $productModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.productModal){
      $('.js-productModal').on('click', function(e) {
        e.preventDefault();
        openProductModal();
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeProductModal();
    });

    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/

    var $ratingModal = $('#ratingModal');

    function openRatingModal() {
      $('html').addClass('is-opened-modal');
      $ratingModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
      }, 17);
    }

    function closeRatingModal() {
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $ratingModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.productModal){
      $('.js-ratingtModal').on('click', function(e) {
        e.preventDefault();
        openRatingModal();
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeRatingModal();
    });


    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/

    var $twitterModal = $('#twitterModal');

    function openTwitterModal() {
      $('html').addClass('is-opened-modal');
      $twitterModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
      }, 17);
    }

    function closeTwitterModal() {
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $twitterModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.twitterModal){
      $('.js-twitterModal').on('click', function(e) {
        e.preventDefault();
        openTwitterModal();
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeTwitterModal();
    });

    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/

    var $corporateModal = $('#corporateModal');

    function openCorporateModal() {
      $('html').addClass('is-opened-modal');
      $corporateModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
      }, 17);
    }

    function closeCorporateModal() {
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $corporateModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.corporateModal){
      $('.js-corporateModal').on('click', function(e) {
        e.preventDefault();
        openCorporateModal();
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeCorporateModal();
    });

    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/

    var $onlineModal = $('#onlineModal');

    function openOnlineModal() {
      $('html').addClass('is-opened-modal');
      $onlineModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
      }, 17);
    }

    function closeOnlineModal() {
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $onlineModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.onlineModal){
      $('.js-onlineModal').on('click', function(e) {
        e.preventDefault();
        openOnlineModal();
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeOnlineModal();
    });

    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/

    var $amiiboModal = $('#amiiboModal');

    function openAmiiboModal() {
      $('html').addClass('is-opened-modal');
      $amiiboModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
      }, 17);
    }

    function closeAmiiboModal() {
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $amiiboModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.amiiboModal){
      $('.js-amiiboModal').on('click', function(e) {
        e.preventDefault();
        openAmiiboModal();
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeAmiiboModal();
    });

    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/

    var $dlcModal = $('#dlcModal');

    function openDlcModal() {
      $('html').addClass('is-opened-modal');
      $dlcModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-init-modal');
      }, 17);
    }

    function closeDlcModal() {
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $dlcModal.addClass('u-hide');
        setPaddingBody(true);
      }, 100);
    }

    if(Shared.lang.dlcModal){
      $('.js-dlcModal').on('click', function(e) {
        e.preventDefault();
        openDlcModal();
      });
    }


    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeDlcModal();
    });


  });
})(jQuery,Cookies);

;(function($){
  $(function(){

    //言語別lang属性取得
    var langAttr = $('html').attr('lang');
    var langVal;


    //言語グループ別分岐
    if ( langAttr.indexOf('ja') !== -1 ) {

      //日本語
      langVal = 'jaGroup';
    } else if ( langAttr.indexOf('en') !== -1 ) {

      //英語
      langVal = 'enGroup';
    } else if ( langAttr.indexOf('fr') !== -1 ) {

      //フランス語
      langVal = 'frGroup';
    } else if ( langAttr.indexOf('es') !== -1 ) {

      //スペイン語
      langVal = 'esGroup';
    } else if ( langAttr.indexOf('de') !== -1 ) {

      //ドイツ語
      langVal = 'deGroup';
    } else if ( langAttr.indexOf('it') !== -1 ) {

      //イタリア語
      langVal = 'itGroup';
    } else if ( langAttr.indexOf('nl') !== -1 ) {

      //オランダ語
      langVal = 'nlGroup';
    } else if ( langAttr.indexOf('ru') !== -1 ) {

      //ロシア語
      langVal = 'ruGroup';
    } else if ( langAttr.indexOf('ko') !== -1 ) {

      //韓国語
      langVal = 'koGroup';
    } else if ( langAttr.indexOf('zh-Hant') !== -1 ) {

      //中国語（繁體中文）
      langVal = 'zh-HantGroup';
    } else if ( langAttr.indexOf('za-Hans') !== -1 ) {

      //中国語（简体中文）
      langVal = 'za-HansGroup';
    }


    //言語別class設定
    if (langVal) {
      $('html').addClass(langVal);
    }

  });
})(jQuery);
