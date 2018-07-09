jQuery(function ($) {
    var lat = 33.326170, lng = 130.582569;

    var $map = $('#map').mapping({
        zoom: ( 768 <= $(window).width() ? 11 : 10),
        center: {lat: lat, lng: lng},
        // img2x: true,
        markers: [
            {
                //バルーン
                lat: 33.2516111,
                lng: 130.2429224,
                icon: "/common/img/pin01.png",
                click: true,
                url: "https://www.google.com/maps/place/33%C2%B015'05.8%22N+130%C2%B014'42.4%22E/@33.2516225,130.242908,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d33.251618!4d130.245102"
            },
            {
                //多布施川
                lat: 33.2908333,
                lng: 130.2785057,
                icon: "/common/img/pin02.png",
                click: true,
                url: "https://www.google.com/maps/place/33%C2%B017'27.0%22N+130%C2%B016'50.5%22E/@33.2908445,130.278492,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d33.29084!4d130.280686"
            },
            {
                //川上峡
                lat: 33.3698656,
                lng: 130.2043113,
                icon: "/common/img/pin03.png",
                click: true,
                url: "https://www.google.com/maps/place/33%C2%B022'11.5%22N+130%C2%B012'23.4%22E/@33.3698656,130.2043113,17z/data=!3m1!4b1!4m14!1m7!3m6!1s0x3541cf6d5d1bba03:0x72edeaa77550c415!2z5pel5pys44CB44CSODQwLTA1MDEg5L2Q6LOA55yM5L2Q6LOA5biC5a-M5aOr55S65aSn5a2X5Y-k5rmv!3b1!8m2!3d33.3717677!4d130.206459!3m5!1s0x0:0x0!7e2!8m2!3d33.369847!4d130.2064871"
            },
            {
                //どんぐり村
                lat: 33.4057583,
                lng: 130.2705681,
                icon: "/common/img/pin04.png",
                click: true,
                url: "https://www.google.com/maps/place/%E4%B8%89%E7%80%AC%E3%83%AB%E3%83%99%E3%83%BC%E3%83%AB%E7%89%A7%E5%A0%B4+%E3%81%A9%E3%82%93%E3%81%90%E3%82%8A%E6%9D%91/@33.4057628,130.2705681,17z/data=!3m1!4b1!4m5!3m4!1s0x3541c706c43c6cb3:0x5eae59d2ccc71e56!8m2!3d33.4057583!4d130.2727568"
            },
            {
                //サイクリング
                lat: 33.4490526,
                lng: 130.2541465,
                icon: "/common/img/pin05.png",
                click: true,
                url: "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92842-0301+%E4%BD%90%E8%B3%80%E7%9C%8C%E4%BD%90%E8%B3%80%E5%B8%82%E4%B8%89%E7%80%AC%E6%9D%91%E4%B8%89%E7%80%AC/@33.4490921,130.2716134,14z/data=!3m1!4b1!4m5!3m4!1s0x3541c0bf44952881:0x6cb8fc295ea0621e!8m2!3d33.4302247!4d130.2780904"
            },
            {
                //珈道庵　三瀬山荘
                lat: 33.4454144,
                lng: 130.3135153,
                icon: "/common/img/pin06.png",
                click: true,
                url: "https://www.google.com/maps/place/%E7%8F%88%E9%81%93%E5%BA%B5%E4%B8%89%E7%80%AC%E5%B1%B1%E8%8D%98/@33.4454189,130.31351,17z/data=!3m1!4b1!4m5!3m4!1s0x3541bf66e6b9d655:0x59a32393733e41d4!8m2!3d33.4454144!4d130.315704"
            },
            {
                //名尾和紙
                lat: 33.363348,
                lng: 130.2819863,
                icon: "/common/img/pin07.png",
                click: true,
                url: "https://www.google.com/maps/place/%E8%82%A5%E5%89%8D%E5%90%8D%E5%B0%BE%E5%92%8C%E7%B4%99/@33.3633525,130.281981,17z/data=!3m1!4b1!4m5!3m4!1s0x3541c7ded8ee09db:0x6e289000ccc306d4!8m2!3d33.363348!4d130.284175"
            },
            {
                //佐賀牛
                lat: 33.2615823,
                lng: 130.301066,
                icon: "/common/img/pin08.png",
                click: true,
                url: "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92840-0811+%E4%BD%90%E8%B3%80%E7%9C%8C%E4%BD%90%E8%B3%80%E5%B8%82%E5%A4%A7%E8%B2%A1%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%99%E2%88%92%EF%BC%91%EF%BC%96/@33.2615868,130.3010607,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca0c865efd5d:0xcf0f236703dfd32!8m2!3d33.2615823!4d130.3032547"
            },
            {
                //佐賀城本丸歴史観
                lat: 33.2453995,
                lng: 130.3010937,
                icon: "/common/img/pin09.png",
                click: true,
                url: "https://www.google.com/maps/place/%E4%BD%90%E8%B3%80%E7%9C%8C%E7%AB%8B%E4%BD%90%E8%B3%80%E5%9F%8E%E6%9C%AC%E4%B8%B8%E6%AD%B4%E5%8F%B2%E9%A4%A8/@33.245404,130.3010937,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca7c0a557f67:0xff57d8d27558ec4b!8m2!3d33.2453995!4d130.3032824"
            },
            {
                //護国神社　
                lat: 33.253077,
                lng: 130.2906063,
                icon: "/common/img/pin10.png",
                click: true,
                url: "https://www.google.com/maps/place/%E4%BD%90%E8%B3%80%E7%B8%A3%E8%AD%B7%E5%9C%8B%E7%A5%9E%E7%A4%BE/@33.2530815,130.290601,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca6672933a35:0x71c9d89e26f3e24d!8m2!3d33.253077!4d130.292795"
            },
            {
                //古湯温泉
                lat: 33.3719028,
                lng: 130.2043255,
                icon: "/common/img/pin11.png",
                click: true,
                url: "https://www.google.com/maps/place/%E5%8F%A4%E6%B9%AF%E6%B8%A9%E6%B3%89/@33.3719073,130.2043202,17z/data=!3m1!4b1!4m5!3m4!1s0x3541cf3ff3053065:0x63b6322c32789191!8m2!3d33.3719028!4d130.2065142"
            },
            {
                //柳町
                lat: 33.2541551,
                lng: 130.3056865,
                icon: "/common/img/pin12.png",
                click: true,
                url: "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92840-0823+%E4%BD%90%E8%B3%80%E7%9C%8C%E4%BD%90%E8%B3%80%E5%B8%82%E6%9F%B3%E7%94%BA/@33.2541551,130.3056865,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca7594a4f8b7:0xee14b6713a403d46!8m2!3d33.2537859!4d130.3071548"
            },
            {
                //浮立
                lat: 33.2654309,
                lng: 130.2298909,
                icon: "/common/img/pin13.png",
                click: true,
                url: "https://www.google.com/maps/place/@33.2654309,130.2298909,17z/data=!3m1!4b1!4m5!3m4!1s0x3541cb7ed2f81b7f:0xfd2b65be31818462!8m2!3d33.2654256!4d130.2320665"
            },
            {
                //肥前ビードロ
                lat: 33.2481497,
                lng: 130.2846761,
                icon: "/common/img/pin14.png",
                click: true,
                url: "https://www.google.com/maps/place/%E8%82%A5%E5%89%8D%E3%81%B3%E3%83%BC%E3%81%A9%E3%82%8D/@33.2481542,130.2846708,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca5f95f930bf:0x3560ad3bf25afb59!8m2!3d33.2481497!4d130.2868648"
            },
            {
                //えびす様
                lat: 33.2524721,
                lng: 130.303416,
                icon: "/common/img/pin15.png",
                click: true,
                url: "https://www.google.com/maps/place/%E6%97%A5%E6%9C%AC%E3%80%81%E3%80%92840-0831+%E4%BD%90%E8%B3%80%E7%9C%8C%E4%BD%90%E8%B3%80%E5%B8%82%E6%9D%BE%E5%8E%9F%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%93%E2%88%92%EF%BC%93%EF%BC%94/@33.2524766,130.3034107,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca76ebf838b3:0xea1a1951851dd994!8m2!3d33.2524721!4d130.3056047"
            },
            {
                //興賀神社
                lat: 33.2487971,
                lng: 130.2926504,
                icon: "/common/img/pin16.png",
                click: true,
                url: "https://www.google.com/maps/place/%E8%88%87%E8%B3%80%E7%A5%9E%E7%A4%BE/@33.2488016,130.2926451,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca6474cbe8b3:0xc0529edf67986312!8m2!3d33.2487971!4d130.2948391"
            },
            {
                //農家民宿具座
                lat: 33.4350829,
                lng: 130.2982912,
                icon: "/common/img/pin17.png",
                click: true,
                url: "https://www.google.com/maps/place/%E8%BE%B2%E5%AE%B6%E6%B0%91%E5%AE%BF+%E5%85%B7%E5%BA%A7/@33.4350874,130.2982859,17z/data=!3m1!4b1!4m5!3m4!1s0x3541c0ae6fc22495:0x7c23cf8d1201301f!8m2!3d33.4350829!4d130.3004799"
            },
            {
                //筑後昇開橋
                lat: 33.214873,
                lng: 130.3598464,
                icon: "/common/img/pin18.png",
                click: true,
                url: "https://www.google.com/maps/place/%E7%AD%91%E5%BE%8C%E5%B7%9D%E6%98%87%E9%96%8B%E6%A9%8B/@33.2148775,130.3598411,17z/data=!3m1!4b1!4m5!3m4!1s0x3541b4f9d2fb53ab:0xcf97dcfed688b86!8m2!3d33.214873!4d130.3620351"
            },
            {
                lat: 33.1533404,
                lng: 130.3008919,
                icon: "/common/img/pin_a.png",
                click: true,
                url: "https://www.google.co.jp/maps/place/%E4%B9%9D%E5%B7%9E%E4%BD%90%E8%B3%80%E5%9B%BD%E9%9A%9B%E7%A9%BA%E6%B8%AF/@33.1533404,130.3008919,17z/data=!3m2!4b1!5s0x3540358ed996498f:0x548bbb4920d93cb4!4m5!3m4!1s0x3540358db550adfb:0xdce98db056cdafe1!8m2!3d33.1533404!4d130.3030806?hl=ja"
            },
            {
                lat: 33.2641964,
                lng: 130.2952416,
                icon: "/common/img/pin_t.png",
                click: true,
                url: "https://www.google.co.jp/maps/place/%E4%BD%90%E8%B3%80%E9%A7%85/@33.2641964,130.2952416,17z/data=!3m1!4b1!4m5!3m4!1s0x3541ca125f572347:0x165acf018429c5cf!8m2!3d33.2641964!4d130.2974303?hl=ja"
            }
        ],
        mapOptions: {
            scrollwheel: false,
            streetViewControl: false,
            styles: [{"featureType":"administrative","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":-100},{"lightness":"50"},{"visibility":"simplified"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"lightness":"30"}]},{"featureType":"road.local","elementType":"all","stylers":[{"lightness":"40"}]},{"featureType":"transit","elementType":"all","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]},{"featureType":"water","elementType":"labels","stylers":[{"lightness":-25},{"saturation":-100}]
            }]
        },
        autoZoomAfterBounds: true
    });


})
