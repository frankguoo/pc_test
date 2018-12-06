/**
 *
 * @authors Eric Hsiao
 *
 */

main = function (){

	//private menbers
  var myEffect;
  var myEffect_2
  var wow;

  var exportRootAni;
  var exportRootAni2;

	//private methods
	function init () {
    console.log('main is loaded.');

    wow  = new WOW().init();    
    $('.card__container').faceCursor();
    $('.register__block__card').faceCursor();

    initNav();

    if(!isMobile){
      $('body').niceScroll();
    }

    $('.nav__cta').click(function(event) {
      setTimeout(function () {
        //dataLayer.push({'eventCategory':event_category,'eventAction':'01-click-apply','eventLabel':'MENU-apply','event':'click-ga'});
      },300);      

      gtag('event', '01-click-apply',{'event_category':event_category,'event_label':'MENU-apply'});
    });

    $('.top-cta').click(function(event) {

      var _tag;

      if(!isMobile){
        //dataLayer.push({'eventCategory':event_category,'eventAction':'01-click-apply','eventLabel':'CTA-apply','event':'click-ga'});
        _tag = 'CTA-apply';
      }else{
        //dataLayer.push({'eventCategory':event_category,'eventAction':'01-click-apply','eventLabel':'M-CTA-apply','event':'click-ga'});
        _tag = 'M-CTA-apply';
      }

      gtag('event', '01-click-apply',{'event_category':event_category,'event_label':_tag});
    });

    /*****************************/    

    console.log(isMobile);

    if(GetIEVersion() == 0){
      PIXI.loader
      .add([
        "images/card.png",
        "images/card-2.png",
        "images/top-cta.png"
      ])
      .load(function () {
        myEffect = new effect();
        myEffect.init('.card__container','.card__dummy','images/card.png');

        myEffect_2 = new effect();
        myEffect_2.init('.register__block__card','.card__hitArea','images/card-2.png');
      });
    }else{
      if(GetIEVersion() < 11){
				isOldIE = true;
				alert("為使您有最佳瀏覽體驗，建議您改用更高版本的瀏覽器或Chrome 瀏覽網站，謝謝！");
      }
      
      loadAnimate('main_card',$('.card__container'),function (exportRoot) {
        exportRootAni = exportRoot;
        exportRootAni.play(0);
  
        $('.card__dummy').mouseover(function () { 
          exportRootAni.play(0);
        });

        $('.card__dummy').mousemove(function () { 
          exportRootAni.play(10);
        });
      });

      

      loadAnimate('main_card',$('.register__block__card'),function (exportRoot2) {
        exportRootAni2 = exportRoot2;
        exportRootAni2.play(0);

        TweenMax.set('.register__block__card canvas',{scale:0.8});
  
        $('.card__hitArea').mouseover(function () { 
          exportRootAni2.play(0);
        });

        $('.card__hitArea').mousemove(function () { 
          exportRootAni2.play(10);
        });
      });
    }

    
  }
  
  function initNav(){
    $('.nav__option__1').click(function (e) { 
      e.preventDefault();
      if(!isMobile){
        TweenMax.to(window, 1, {scrollTo:".intro"});
      }else{
        $(window).scrollTop($('.intro').offset().top);
        $('.hmbrgr').click();
      }
    });

    $('.nav__option__2').click(function (e) { 
      e.preventDefault();

      if(!isMobile){
        TweenMax.to(window, 1, {scrollTo:".sp"});
      }else{
        $(window).scrollTop($('.sp').offset().top);
        $('.hmbrgr').click();
      }

    });

    $('.nav__option__3').click(function (e) { 
      e.preventDefault();

      if(!isMobile){
        TweenMax.to(window, 1, {scrollTo:".product"});
      }else{
        $(window).scrollTop($('.product').offset().top);
        $('.hmbrgr').click();
      }
    });

    $('.nav__option__4').click(function (e) { 
      e.preventDefault();

      if(!isMobile){
        TweenMax.to(window, 1, {scrollTo:".register"});
      }else{
        $(window).scrollTop($('.register').offset().top);
        $('.hmbrgr').click();
      }
    });

    $('.hmbrgr').hmbrgr({
      width     : 35,
      height    : 35,
      barHeight : 3,
      barColor  : '#fff'
    });

   

    if($(window).width()<=1000){
      var _h = $('.header__nav').height()*-1;
      TweenMax.set('.header__nav',{y:_h});
    }

    $('.modal-body').css({'max-height':$(window).height() - 200});
    $('.modal-body').niceScroll();    

    $('.modal').on('shown.bs.modal', function (e) {
     
      $(".modal-body").getNiceScroll().resize();
      $(".modal-body").scrollTop(0);
    })
  }

  function showMenu(){
    if($(window).width()<=1000){
      TweenMax.to('.header__nav',0.5,{y:85});
    }
  }

  function hideMenu(){
    if($(window).width()<=1000){
      var _h = $('.header__nav').height()*-1;
      TweenMax.to('.header__nav',0.5,{y:_h});
    }
  }

	//constructor

	{
		$(document).ready(function() {
			init();
		});
	}

	//public

	return {
    showMenu : function () {
      showMenu();
    },

    hideMenu : function () {
      hideMenu();
    }
	};
};

var main = new main();

Number.isInteger = Number.isInteger || function(value) {
  return typeof value === "number" && 
         isFinite(value) && 
         Math.floor(value) === value;
};

/*************************************************************/

function loadAnimate(_namespace,$container,_callback) {
  var $canvas, stage, exportRoot, anim_container, dom_overlay_container, fnStartAnimation;
  init();

  function init() {
    var key = Object.keys(this[_namespace].compositions)[0];
    var comp = this[_namespace].getComposition(key);
    var lib=comp.getLibrary();

    $canvas = $('<canvas></canvas>').attr({
      width: lib.properties.width,
      height: lib.properties.height
    }).appendTo($container);

    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
    loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
    loader.loadManifest(lib.properties.manifest);
  }
  function handleFileLoad(evt, comp) {
    var images=comp.getImages();
    if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }
  }

  function handleComplete(evt,comp) {
    var lib=comp.getLibrary();
    var ss=comp.getSpriteSheet();
    var queue = evt.target;
    var ssMetadata = lib.ssMetadata;
    for(i=0; i<ssMetadata.length; i++) {
      ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
    }
    exportRoot = new lib[_namespace]();
    stage = new lib.Stage($canvas[0]);
    fnStartAnimation = function() {
      stage.addChild(exportRoot);
      createjs.Ticker.setFPS(lib.properties.fps);
      createjs.Ticker.addEventListener("tick", stage);
      exportRoot.stop();
      _callback(exportRoot);
    }

    this[_namespace].compositionLoaded(lib.properties.id);
    fnStartAnimation();
  }

  //return exportRoot;
}

function GetIEVersion() {
var sAgent = window.navigator.userAgent;
var Idx = sAgent.indexOf("MSIE");

// If IE, return version number.
if (Idx > 0)
  return parseInt(sAgent.substring(Idx+ 5, sAgent.indexOf(".", Idx)));

// If IE 11 then look for Updated user agent string.
else if (!!navigator.userAgent.match(/Trident\/7\./))
  return 11;

else
  return 0; //It is not IE
}
