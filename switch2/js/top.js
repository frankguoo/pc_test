!function($,Handlebars) {
  var youtube = new Youtube();

  var topYtPlayer;

  /*****************************************************************************************************************
   * ユーティリティ
   *****************************************************************************************************************/

  Handlebars.registerHelper('checkLength', function(cond, opt) {
    if(cond > 1) {
      return opt.fn(this);
    }
  });

  Handlebars.registerHelper('isSlide', function(cond, opt) {
    if(cond === 'SLIDE') {
      return opt.fn(this);
    }
  });

  Handlebars.registerHelper('isImg', function(cond, opt) {
    if(cond === 'IMG') {
      return opt.fn(this);
    }
  });

  Handlebars.registerHelper('isNoimg', function(cond, opt) {
    if(cond === 'NOIMG') {
      return opt.fn(this);
    }
  });

  Handlebars.registerHelper('isYoutube', function(cond, opt) {
    if(cond === 'YOUTUBE') {
      return opt.fn(this);
    }
  });

  function getServerDate(cb){
    $.ajax({
      type : 'HEAD',
      url :  window.location.href,
      cache : false
    }).done(function(data, textStatus, xhr) {
      try {
        var result = new Date(xhr.getResponseHeader("Date"));
      } catch(e) {
        var result = new Date();
      }
      cb(result);
    }).fail(function() {
      var result = new Date();
      cb(result);
    });
  }

  var serverTime = getServerDate(function (result) {return result});

  //スマブロ用
  function getYoutubeID(url){
    var id;
    var regexp = /\embed\//i;
    if(regexp.test(url)){
      id = url.replace(/.*embed\/([\w-]{11}).*/,"$1");
    }else{
      id = url.replace(/.*v=([\w-]{11}).*/,"$1");
    }
    return id;
  }
  function getIframeTag(str){
    var regexp = /<iframe(?: .+?)?>.*?<\/iframe>/gm;
    var r = regexp.exec(str);
    var re = r ? r[0] : r;
    return re;
  }
  function removeIframeTag(str){
    var re = str.replace(/<iframe(?: .+?)?>.*?<\/iframe>/gm,"");
    return re;
  }
  function removeYoutubeTxt(str){
    var re = str.replace(/https?:\/\/(?:youtu\.be\/|(?:[a-z]{2,3}\.)?youtube\.com\/watch(?:\?|#\!)v=)([\w-]{11}).*/gi,"");
    return re;
  }
  function hasIframeTag(str){
    var regexp = /<iframe(?: .+?)?>.*?<\/iframe>/gm;
    var r = regexp.test(str);
    var re = r;
    return re;
  }
  function hasYoutubeTxt(str){
    var regexp = /youtu(?:\.be|be\.com)/i;
    var r = regexp.test(str);
    var re = r;
    return re;
  }

  function getCurrentDir(){
    var path = Shared.util.parseURI().directory;
    path.match(/^\/(.*?)\//);
    var dirName = RegExp.$1;
    return dirName;
  }

  var CAT_SERIES = {
    "cat01_game-series_01":"mario",
    "cat01_game-series_02":"donkeykong",
    "cat01_game-series_03":"zelda",
    "cat01_game-series_04":"metroid",
    "cat01_game-series_05":"yoshi",
    "cat01_game-series_06":"kirby",
    "cat01_game-series_07":"starfox",
    "cat01_game-series_08":"pokemon",
    "cat01_game-series_09":"mother",
    "cat01_game-series_10":"f-zero",
    "cat01_game-series_11":"iceclimber",
    "cat01_game-series_12":"fireemblem",
    "cat01_game-series_13":"gamewatch",
    "cat01_game-series_14":"palutena",
    "cat01_game-series_15":"wario",
    "cat01_game-series_16":"metalgear",
    "cat01_game-series_17":"sonic",
    "cat01_game-series_18":"pikmin",
    "cat01_game-series_19":"famicomrobot",
    "cat01_game-series_20":"doubutsu",
    "cat01_game-series_21":"rockman",
    "cat01_game-series_22":"wii_fit",
    "cat01_game-series_23":"punch_out",
    "cat01_game-series_24":"mii",
    "cat01_game-series_25":"pacman",
    "cat01_game-series_26":"xenoblade",
    "cat01_game-series_27":"duckhunt",
    "cat01_game-series_28":"streetfighter",
    "cat01_game-series_29":"finalfantasy",
    "cat01_game-series_30":"bayonetta",
    "cat01_game-series_31":"splatoon",
    "cat01_game-series_32":"dracula"
  };

  var TIME_DIFF = {
    "en_US":-8,
    "fr_CA":-8,
    "es_LA":-6,
    "en_GB":0,
    "fr_FR":1,
    "es_ES":1,
    "de_DE":1,
    "it_IT":1,
    "nl_NL":1,
    "ru_RU":3,
    "ja_JP":9,
    "ko_KR":9,
    "TC":8,
    "SC":8,
    "en_AU":10
  };


  /*****************************************************************************************************************
   * ムービーjson を読み込み
   *****************************************************************************************************************/
  function loadMovieData(){
    var def = new $.Deferred();

    var dir = getCurrentDir();

    var jsonPath = '/assets_v2/data/movie_'+dir+'.json';

    $.ajax({
      url      : jsonPath,
      cache    : false,
      dataType : 'json',
      success  : parse,
      error    : function(err) {
        def.reject();
      }
    });

    var st = moment(serverTime);

    function parse(json) {
      var len = json.length;
      var data = [];

      for (var i = 0; i < len; i++) {
        var _update = moment(json[i].update);
        var _diff = st.diff(_update, 'days');
        var updateFlg = false;
        var reverseFlg = false;

        if(_diff < 7){
          updateFlg = true;
        }

        var obj = {
          "update": updateFlg,
          "title":json[i].title,
          "youtubeID": json[i].youtubeID,
          "thumbPath": json[i].thumbPath,
          "display": json[i].topPageDisplay,
          "reverse": json[i].reverse
        };

        if(obj.display){
          data.push(obj);
        }
        if(obj.reverse){
          reverseFlg = true;
        }
      }

      def.resolve(data);
    }
    return def.promise();
  }


  /*****************************************************************************************************************
   * スマブロ データ読み込み
   *****************************************************************************************************************/
  function loadBlogData(){
    var def = new $.Deferred();

    var name = getCurrentDir();

    var json = _BS.getJSON({'name': name, 'number': 5});

    var len = json.length;
    var data = [];

    for (var i = 0; i < len; i++) {
      // タイプ
      var type = '';

      // 画像
      var _imgs = [];
      if(json[i].acf.image1.id){
        _imgs.push(json[i].acf.image1.url);
      }
      if(json[i].acf.image2.id){
        _imgs.push(json[i].acf.image2.url);
      }
      if(json[i].acf.image3.id){
        _imgs.push(json[i].acf.image3.url);
      }
      if(json[i].acf.image4.id){
        _imgs.push(json[i].acf.image4.url);
      }
      var imgs = _imgs.map(function (elm, i, ary) {
        return elm.replace(/\/413752/g, '');
      });
      var imgsLen = imgs.length;

      if(imgsLen > 1){
        type = 'SLIDE';
      }else if(imgsLen === 1){
        type = 'IMG';
      }else{
        type = 'NOIMG';
      }

      var _txt = json[i].acf.editor
      var txt = '';
      var youtubeID = '';

      if(hasYoutubeTxt(_txt)){
        type = 'YOUTUBE';
        if(hasIframeTag(_txt)) {
          txt = removeIframeTag(_txt);
          var iframe = getIframeTag(_txt);
          youtubeID = getYoutubeID($(iframe).attr('src'));
        }else{
          youtubeID = getYoutubeID(_txt);
          txt = removeYoutubeTxt(_txt);
        }
      }else{
        if(hasYoutubeTxt(json[i].acf.link_url)){
          type = 'YOUTUBE';
          youtubeID = getYoutubeID(json[i].acf.link_url);
        }
        txt = _txt;
      }

      // 日付フォーマット

      var date = json[i].date_gmt.replace(/\//g, '-');
      var m = moment(date).add(parseInt(TIME_DIFF[name],10), 'h');
      var st = moment(serverTime);

      var _diff = st.diff(m, 'days');
      var updateFlg = false;

      if(_diff < 1){
        updateFlg = true;
      }

      var term = json[i]._embedded['wp:term'][0];
      var tags = [];
      var series = [];

      term.map(function (elm, i, ary) {
        if(/cat01_/.test(elm.slug)){
          var so = {
            "name":CAT_SERIES[elm.slug],
            "slug":elm.slug,
          };
          series.push(so);
        }else {
          var o = {
            "name":elm.name,
            "slug":elm.slug,
          };
          tags.push(o);
        }
      });

      var updateTxt;

      if(Shared.lang.ja_JP || Shared.lang.ko_KR || Shared.lang.SC || Shared.lang.TC){
        updateTxt = m.format('YYYY.M.D');
      }else if(Shared.lang.de_DE){
        updateTxt = m.format('DD.MM.YYYY');
      }else if(Shared.lang.es_ES || Shared.lang.fr_CA){
        updateTxt = m.format('DD-MM-YYYY');
      }else if(Shared.lang.en_US){
        updateTxt = m.format('l');
      }else{
        updateTxt = m.format('L');
      }

      var obj = {
        "date": json[i].date,
        "formatedDate":updateTxt,
        "YYYY": m.format('YYYY'),
        "MM": m.format('M'),
        "DD": m.format('D'),
        "week": m.format('ddd'),
        "txt":txt,
        "imgs":imgs,
        "youtubeID":youtubeID,
        "tags":tags,
        "series":series,
        "type":type,
        "update": updateFlg,
      };

      data.push(obj);
    }

    def.resolve(data);
    return def.promise();
  }

  /*****************************************************************************************************************
   * 表示
   *****************************************************************************************************************/
  function renderMovies(data) {

    var tpl = $('#tpl-movie-list').html();
    var template = Handlebars.compile(tpl);
    var $target = $('#movie-list');

    $target.html(template({
      list     : data
    }));

    /* --------------------------------------------------------------------------
     MOVIE SLIDE
     ----------------------------------------------------------------------- */

    var $movieSlide = $('#slide');
    var vidList = [];

    var $movieList = $movieSlide.find('.js-movie-play');
    $movieList.each(function (i) {
      var vid = $(this).attr('href').replace( /https:\/\/youtu.be\//g ,"");
      vidList.push(vid);
    });

    $movieSlide.slick({
      autoplay: false,
      speed: 800,
      pauseOnHover: true,
      pauseOnDotsHover: true,
      cssEase: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
      dots: true,
      dotsClass: 'top-movie-dot',
      appendDots: $(".movie__dot"),
      draggable: true,
      arrows: true,
      prevArrow: '<div class="movie-slide-ui__prev"><button class="movie-slide-ui__prev-btn"><i><svg role="img" title=""><use xlink:href="/assets_v2/img/common/sprite.svg#arrow_s"/></svg></i></button></div>',
      nextArrow: '<div class="movie-slide-ui__next"><button class="movie-slide-ui__next-btn"><i><svg role="img" title=""><use xlink:href="/assets_v2/img/common/sprite.svg#arrow_s"/></svg></i></button></div>',
      infinite: true,
      initialSlide: 0,
      pauseOnHover: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      centerMode: true,
      centerPadding: '27%',
      variableWidth: true,
      responsive: [{
        breakpoint:759,
        settings: {
          centerPadding: '6%'
        }
      }]
    });

    /* --------------------------------------------------------------------------
     MOVIE
     ----------------------------------------------------------------------- */
    var ytPlayer = youtube.create('', {
      container : '#js-movie-player',
      volume : 80,
      controls : 1,
      showinfo:1,
      vq : 'hd720'
    });

    topYtPlayer = ytPlayer;

    function startPlayer(id){
      $('html').addClass('is-movie-playing');
      ytPlayer.loadVideoById(id);
      ytPlayer.play();
    }

    $movieSlide.on('beforeChange', function(){
      if($('html').hasClass('is-movie-playing')){
        $('html').removeClass('is-movie-playing');
        ytPlayer.pause();
      }
    });

    $movieSlide.on('afterChange', function(){
      var current= $movieSlide.slick('slickCurrentSlide');
      //startPlayer(vidList[current]);
    });

    $('.js-movie-play').on('click',function (e) {
      e.preventDefault();
      var vid = $(this).attr('href').replace( /https:\/\/youtu.be\//g ,"");
      if(Shared.lang.ja_JP){
        var movieUrl = "./movie/index.html";
        location.href = movieUrl + '?v=' + vid;
      }else{
        if($('html').hasClass('is-movie-playing')){
        }else{
          startPlayer(vid);
        }
      }
    });

    $('.js-movie-play-prev').on('click',function (e) {
      e.preventDefault();
      $movieSlide.slick('slickPrev');
    });

    $('.js-movie-play-next').on('click',function (e) {
      e.preventDefault();
      $movieSlide.slick('slickNext');
    });

    function cancelFullScreen(el) {
      var requestMethod = el.cancelFullScreen||el.webkitCancelFullScreen||el.mozCancelFullScreen||el.exitFullscreen;
      if (requestMethod) {
        requestMethod.call(el);
      } else if (typeof window.ActiveXObject !== "undefined") {
        var wscript = new ActiveXObject("WScript.Shell");
        if (wscript !== null) {
          wscript.SendKeys("{F11}");
        }
      }
    }

    ytPlayer.onEnded(function() {
      $('html').removeClass('is-movie-playing');
      ytPlayer.pause();
      ytPlayer.seek(0);

      var isInFullScreen = (document.fullScreenElement && document.fullScreenElement !== null) || (document.mozFullScreen || document.webkitIsFullScreen);
      if (isInFullScreen) {
        cancelFullScreen(document);
      }

    });

  }

  function renderBlog(data) {
    var tpl = $('#tpl-blog-list').html();
    var template = Handlebars.compile(tpl);
    var $target = $('#blog-list');

    $target.html(template({
      list     : data
    }));

    /* sp用*/
    var $spList = $target.find('.js-sp-list');
    var isInitSlide = false;

    var callback = function (w,h){
      if( w < 760) {
        if(!isInitSlide){
          $spList.slick({
            autoplay: false,
            speed: 800,
            pauseOnHover: true,
            pauseOnDotsHover: true,
            cssEase: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
            dots: true,
            dotsClass: 'sp-list-dot',
            draggable: true,
            arrows: false,
            infinite: false,
            initialSlide: 0,
            pauseOnHover: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: '30px',
            swipe: true
          });
          isInitSlide = true;
        }
      }else{
        isInitSlide = false;
        if($spList.hasClass('slick-initialized')){
          $spList.slick('unslick');
        }
      }

    };
    Shared.util.addResizeListener(_.throttle(callback, 16, { trailing: false, leading: true }));


    $slidelist = $target.find('.blog-item__slide-body');

    $slidelist.each(function (i) {
      var $slide = $(this);
      $slide.slick({
        autoplay: false,
        speed: 800,
        pauseOnHover: true,
        pauseOnDotsHover: true,
        cssEase: 'cubic-bezier(0.190, 1.000, 0.220, 1.000)',
        dots: true,
        dotsClass: 'blog-list-dot',
        draggable: false,
        arrows: false,
        infinite: true,
        initialSlide: 0,
        pauseOnHover: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false
      });
    });


    /************************************************************************************************************************
     * MODAL
     ************************************************************************************************************************/
    function setPaddingBody(isClose){
      var pr = parseInt($('body').css('padding-right'), 10);
      pr= pr ? pr : 0;
      $('body').css('padding-right', String(pr + ($.getScrollBarSize() * (isClose ? -1 : 1))) + 'px');
    }

    var $movieModal = $('#movieModal');

    var ytModalPlayer = youtube.create('', {
      container : '#js-movieModal-player',
      volume : 80,
      controls : 1,
      showinfo:1,
      vq : 'hd720'
    });

    function openMovieModal(id) {
      $('html').addClass('is-opened-modal').addClass('is-open-anime-modal');
      $movieModal.removeClass('u-hide');
      setPaddingBody(false);

      setTimeout(function() {
        $('html').addClass('is-open-anime-modal');
      }, 17);

      setTimeout(function() {
        $('html').addClass('is-init-modal');

        setTimeout(function() {
          ytModalPlayer.loadVideoById(id);
          ytModalPlayer.play();
        }, 400);

      }, 570);


    }

    function closeMovieModal() {
      ytModalPlayer.pause();
      ytModalPlayer.seek(0);
      $('html').removeClass('is-init-modal');
      setTimeout(function() {
        $('html').removeClass('is-open-anime-modal');
      }, 400);
      setTimeout(function() {
        $('html').removeClass('is-opened-modal');
        $movieModal.addClass('u-hide');
        setPaddingBody(true);
      }, 1050);
    }

    $('.js-movie-modal').on('click', function(e) {
      e.preventDefault();
      if($('html').hasClass('is-movie-playing')){
        topYtPlayer.pause();
      }
      var vid = $(this).attr('href').replace( /https:\/\/youtu.be\//g ,"");
      openMovieModal(vid);
    });

    $('.js-closeModal').on('click', function(e) {
      e.preventDefault();
      closeMovieModal();
    });


  }

  /*****************************************************************************************************************
   * 初期化
   *****************************************************************************************************************/
  function documentReady(){
    var def = new $.Deferred();

  $(function(){
    def.resolve();

    var $html = $('html');

    /* --------------------------------------------------------------------------
     HERO SLIDE
     ----------------------------------------------------------------------- */
    var  initialSlideNum = Math.floor( Math.random() * 5 ) ;

    var $heroSlide = $('#js-hero-slide');
    $heroSlide.slick({
      autoplay: true,
      autoplaySpeed: 0,
      speed: 30000,
      pauseOnHover: false,
      pauseOnDotsHover: false,
      cssEase: 'linear',
      draggable: true,
      arrows: false,
      infinite: true,
      initialSlide: initialSlideNum,
      pauseOnHover: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      swipe: true,
      swipeToSlide: true,
      centerMode: true,
      variableWidth: true,
      waitForAnimate: true,
      centerPadding: '0',
    });

    var timer = null;
    var isShow = false;
    $('#js-hero').addClass('is-hide-hero-tip');

    $(".globalheader,.globalnav").on('mouseover',function (e) {
      setTimeout(hide, 500);
    });

    $("#js-hero-hit").on('mousemove',function (e) {
      $("#js-hero-tip").css({'transform':'translate3d('+ e.pageX + 'px, '+ e.pageY +'px, 0)'});

      mousemoveEvent();
    });
    $("#js-hero-hit").on('mouseout',function (e) {
      $('#js-hero').addClass('is-hide-hero-tip');
    });

    function mousemoveEvent() {
      clearTimeout(timer);
      if (isShow) hide();
      timer = setTimeout(show, 500);
    }

    function hide() {
      isShow = false;
      $('#js-hero').addClass('is-hide-hero-tip');
    }

    function show() {
      isShow = true;
      $('#js-hero').removeClass('is-hide-hero-tip');
    }



    // $heroSlide.on('setPosition', function(slick){
    //   slick.slick('slickPause');
    //   setTimeout(function(){
    //     slick.slick('slickPlay');
    //   }, 1000);
    // });


    var $blog = $('#js-blog');
    var $blogBg = $('#js-blog-bg');
    var $globalfooter = $('.globalfooter');
    var $blogfooter = $('.blog-footer');
    var $fixedBlogBtn = $('#js-bottom-fixed-blog-btn');


    var callback = function (t,b){
      var blogTop = $blog.offset().top;
      var globalfooterTop = $globalfooter.offset().top;
      var blogfooterTop = $blogfooter.offset().top;
      var fixedBlogBtnH = $fixedBlogBtn.height();

      $blogBg.stop().css({'transform':'translate3d(0, '+ 0.12*(t - blogTop) +'px, 0)'});
      if(t > blogTop){
        $html.addClass('is-inview-blog');
      }else{
        $html.removeClass('is-inview-blog');
      }

      if( b > blogTop + fixedBlogBtnH){
        $html.addClass('is-inview-blog-btn');
      }else{
        $html.removeClass('is-inview-blog-btn');
      }

      if( b > globalfooterTop){
        $html.addClass('is-blog-btn-bottom-fixed');
      }else{
        $html.removeClass('is-blog-btn-bottom-fixed');
      }

      if( b > blogfooterTop){
        $html.addClass('is-blog-btn-bottom-sp-fixed');
      }else{
        $html.removeClass('is-blog-btn-bottom-sp-fixed');
      }

    };


    Shared.util.addScrollListener(_.throttle(callback, 16, { trailing: false, leading: true }));


  });
    return def.promise();
  }

  function initTop(filterMovie,filterBlog){
    var movies;
    var blogs;
    $.when(
      loadMovieData(filterMovie).then(function(data){
        movies = data;
      }),
      loadBlogData(filterBlog).then(function(data){
        blogs = data;
      }),
      documentReady()
    ).then(function () {
      renderMovies(movies);
      renderBlog(blogs);
    })
  }

  initTop();

}(jQuery,Handlebars);

