$(function(){$("iframe").iFrameResize([{inPageLinks:!0,log:!1}]),$("map").imageMapResize(),$("#RMenuOutF").on("click",function(){$(".RmenuBoxF ul").toggleClass("menu--is-closed"),$(".hamburger").toggleClass("is-active")}),$(".RmenuTopF").click(function(){$("html,body").animate({scrollTop:"0px"},3600)}),$.scrollTo=$.fn.scrollTo=function(e,i,a){if(!(this instanceof $))return $.fn.scrollTo.apply($("html, body"),arguments);if(isMobile.iMob()||$(window).outerWidth()<932)if($(window).scrollTop()<=40)o=-($("#menu").outerHeight()+40);else o=-($("#menu").outerHeight()-2);else var o=0;return a=$.extend({},{gap:{x:0,y:o},animation:{easing:"swing",duration:2e3,complete:$.noop,step:$.noop}},a),this.each(function(){$(this).stop().animate({scrollLeft:isNaN(Number(e))?$(i).offset().left+a.gap.x:e,scrollTop:isNaN(Number(i))?$(i).offset().top+a.gap.y:i},a.animation)})},$(window).scroll(function(){$(window).scrollTop()>$("#mob_topmenuF").offset().top?$("#menuF").addClass("mFixedF"):$("#menuF").removeClass("mFixedF")}),$("nav a, #menuF a, .fixedbar a").click(function(e){e.preventDefault(),$("html,body").scrollTo(this.hash,this.hash)});for(var e=$("nav li").children(),i=[],a=0;a<e.length;a++){var o=e[a],t=$(o).attr("href");i.push(t)}$(window).scroll(function(){var e=$(window).height(),a=$(document).height();if(isMobile.iMob()||$(window).outerWidth()<932)o=$(window).scrollTop()+$("#menuF").outerHeight()+3;else var o=$(window).scrollTop();for(var t=0;t<i.length;t++){var n=i[t],l=$(n).offset().top,s=$(n).height();o>=l&&o<l+s?$("a[href='"+n+"']").addClass("nav-active"):$("a[href='"+n+"']").removeClass("nav-active")}if(o+e==a&&!$("nav li:last-child a").hasClass("nav-active")){var r=$(".nav-active").attr("href");$("a[href='"+r+"']").removeClass("nav-active"),$("nav li:last-child a").addClass("nav-active")}}),$(window).scroll(function(){var e=$(window).height(),a=$(document).height();if(isMobile.iMob())o=$(window).scrollTop()+$("#menuF").outerHeight();else var o=$(window).scrollTop();for(var t=0;t<i.length;t++){var n=i[t],l=$(n).offset().top,s=$(n).height();o>=l&&o<l+s?$("a[href='"+n+"']").addClass("nav-active"):$("a[href='"+n+"']").removeClass("nav-active")}if(o+e==a&&!$("nav li:last-child a").hasClass("nav-active")){var r=$(".nav-active").attr("href");$("a[href='"+r+"']").removeClass("nav-active"),$("nav li:last-child a").addClass("nav-active")}})});var view=new Swiper(".view",{spaceBetween:15}),nav=new Swiper(".nav",{spaceBetween:30,slidesPerView:"auto",touchRatio:1,centeredSlides:!0,slideToClickedSlide:!0,onSlideChangeEnd:function(){$(".nav,.bottom,.view").removeClass("active")}});$(".content").each(function(){var e=$(this);new Swiper(e,{scrollbar:e.find(".swiper-scrollbar"),direction:"vertical",slidesPerView:"auto",mousewheelControl:!0,spaceBetween:15,freeMode:!0,grabCursor:!0,onSliderMove:function(e){e.activeIndex>0?$(".nav,.bottom,.view").addClass("active"):$(".nav,.bottom,.view").removeClass("active")},onSlideChangeEnd:function(e){e.activeIndex>0?$(".nav,.bottom,.view").addClass("active"):$(".nav,.bottom,.view").removeClass("active")},onScroll:function(e){e.activeIndex>0?$(".nav,.bottom,.view").addClass("active"):$(".nav,.bottom,.view").removeClass("active")}})}),view.params.control=nav,nav.params.control=view;var isMobile={iMob:function(){return navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i)}};isMobile.iMob()?$("#fullpage").fullpage({anchors:["firstPage","secondPage","3rdPag","4thPage","5thPage"],sectionsColor:["rgba(0,0,0,0)","#B8B6DB","#A2DADB","#F9BAB7","#b3754d"],navigation:!0,navigationPosition:"right",navigationTooltips:["","",""]}):($window=$(window),$htmlbody=$("html,body"),$slide=$("#slide-1"),$slide2=$("#slide-2"),$slide3=$("#slide-3"),$slide4=$("#slide-4"),$slide5=$("#slide-5"),$body=$("body"),$preload=$("#preload"),$("html, body").animate({scrollTop:0},"slow"),winW=$window.width(),winH=$window.height(),slideH=winH,slideH<=550&&(slideH=550),$slide.height(8500),$slide2.height(979),$slide3.height(880),$slide4.height(919),$slide5.height(420),$body.height(12756),s.refresh($(".homeSlide")));

			
