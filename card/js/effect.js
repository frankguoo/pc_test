/**
 *
 * @authors Eric Hsiao
 *
 */

effect = function () {

  //private menbers
  var stageWidth = 1000;//1920;
  var stageHeight = 1000;//2995;

  var PIXIAPP;
  var sourceLayer;
  var effectLayer;

  var $container;
  var $hitArea;

  var imagesURL;
  var isOver = false;

  var TwistFilter;
  var GlitchFilter;
  var RadialBlurFilter;

  var point;

  //private methods
  function init(_container, _hitArea, _images) {
    console.log('effect is loaded.');

    $container = $(_container);
    $hitArea = $(_hitArea);

    imagesURL = _images;

    //initPixi
    var type = "WebGL"
    if (!PIXI.utils.isWebGLSupported()) {
      type = "canvas"
    }

    PIXI.utils.sayHello(type);

    PIXIAPP = new PIXI.Application({
      width: stageWidth,
      height: stageHeight,
      transparent: true
    });

    //Add the canvas that Pixi automatically created for you to the HTML document
    //document.body.appendChild(PIXIAPP.view);

    console.log(_container);
    $container.append(PIXIAPP.view);
    PIXIAPP.interactive = true;

    setup();
  }

  function setup() {

    sourceLayer = new PIXI.Container();
    PIXIAPP.stage.addChild(sourceLayer);

    effectLayer = new PIXI.Container();
    effectLayer.filterArea = PIXIAPP.screen;
    PIXIAPP.stage.addChild(effectLayer);

    var sprite1 = new PIXI.Sprite(
      PIXI.loader.resources[imagesURL].texture
    );

    sprite1.position.x = stageWidth * .5;
    sprite1.position.y = stageHeight * .5;
    sprite1.anchor.set(0.5);
    // sourceLayer.addChild(sprite1);

    var sprite2 = new PIXI.Sprite(
      PIXI.loader.resources[imagesURL].texture
    );

    sprite2.position.x = stageWidth * .5;
    sprite2.position.y = stageHeight * .5;
    sprite2.anchor.set(0.5);
    effectLayer.addChild(sprite2);

    //effectLayer.blendMode = PIXI.BLEND_MODES.HARD_LIGHT;

    TwistFilter = new PIXI.filters.TwistFilter();
    TwistFilter.angle = 30;
    TwistFilter.radius = 400;

    GlitchFilter = new PIXI.filters.GlitchFilter();
    GlitchFilter.seed = 0;
    GlitchFilter.slices = 0;
    GlitchFilter.offset = 0;
    GlitchFilter.direction = 0;


    RadialBlurFilter = new PIXI.filters.RadialBlurFilter();

    var RadialBlurFilterAngle = 5;
    RadialBlurFilter.angle = RadialBlurFilterAngle;
    RadialBlurFilter.radius = 0;

    if (!isMobile) {
      effectLayer.filters = [TwistFilter, GlitchFilter, RadialBlurFilter];
    }else{
      effectLayer.filters = [GlitchFilter, RadialBlurFilter];
    }

    effectLayer.alpha = 1;

    var count = 0;
    point = new PIXI.Point();

    /*$(document).on('touchmove', function(e) {
      console.log(e.touches[0].clientX);
      updateMove();
    });*/

    document.addEventListener('touchmove',touch, false);  

    function touch(event){
      point.x = event.touches[0].clientX;
      point.y = event.touches[0].clientY;
      updateMove();
    }

    $hitArea.mousemove(function (e) {
      point.x = PIXIAPP.renderer.plugins.interaction.mouse.global.x;
      point.y = PIXIAPP.renderer.plugins.interaction.mouse.global.y;
      updateMove();
    });

    $hitArea.mouseout(function (e) {
      isOver = false;
    });

    PIXIAPP.ticker.add(function () {
      if (count > 0) {
        count -= 0.1;
      } else {
        count = 0;
      }

      TwistFilter.angle = count;
      //point.x = PIXIAPP.renderer.plugins.interaction.mouse.global.x;
      //point.y = PIXIAPP.renderer.plugins.interaction.mouse.global.y;
      TwistFilter.offset = point;
      RadialBlurFilter.center = [point.x, point.y];

      if (!isOver) {
        GlitchFilter.red = [
          doZero(GlitchFilter.red[0]), doZero(GlitchFilter.red[1])
        ];
        GlitchFilter.green = [
          doZero(GlitchFilter.green[0]), doZero(GlitchFilter.green[1])
        ];
        GlitchFilter.blue = [
          doZero(GlitchFilter.blue[0]), doZero(GlitchFilter.blue[1])
        ];
      }

      RadialBlurFilter.angle = doZero(RadialBlurFilter.angle, 0);
      RadialBlurFilter.radius = doZero(RadialBlurFilter.radius, 0);
    });

  }

  function updateMove() {

    //console.log('updateMove');
    

    isOver = false;
    var _i = 10;

    var _t = Math.random() * 10;
    if (_t < 2) {}

    GlitchFilter.red = [
      doZero(GlitchFilter.red[0], 10 * Math.random() * _i), doZero(GlitchFilter.red[1], 10 * Math.random() * _i)
    ];
    GlitchFilter.green = [
      doZero(GlitchFilter.green[0], -10 * Math.random() * _i), doZero(GlitchFilter.green[1], 10 * Math.random() * _i)
    ];
    GlitchFilter.blue = [
      doZero(GlitchFilter.blue[0], 10 * Math.random() * _i), doZero(GlitchFilter.blue[1], -10 * Math.random() * _i)
    ];

    RadialBlurFilter.angle = doZero(RadialBlurFilter.angle, 10);
    RadialBlurFilter.radius = doZero(RadialBlurFilter.radius, 800);
  }

  function doZero(_num, _target) {

    if (!_target) _target = 0;

    _num += (_target - _num) * .1;
    return _num;
  }

  //constructor

  {

  }

  //public

  return {
    init: function (_container, _hitArea, _images) {
      init(_container, _hitArea, _images);
    }
  };
};
