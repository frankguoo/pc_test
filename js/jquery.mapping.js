/*

    v1.2.0
       _                                                           _                _
      (_) __ _ _   _  ___ _ __ _   _   _ __ ___   __ _ _ __  _ __ (_)_ __   __ _   (_)___
      | |/ _` | | | |/ _ \ '__| | | | | '_ ` _ \ / _` | '_ \| '_ \| | '_ \ / _` |  | / __|
      | | (_| | |_| |  __/ |  | |_| |_| | | | | | (_| | |_) | |_) | | | | | (_| |_ | \__ \
     _/ |\__, |\__,_|\___|_|   \__, (_)_| |_| |_|\__,_| .__/| .__/|_|_| |_|\__, (_)/ |___/
    |__/    |_|                |___/                  |_|   |_|            |___/ |__/

*/
(function($){

  $.fn.mapping = function(options) {
    var map;

    var markers = [];

    var settings = $.extend({
        center: {},
        width: null,
        height: null,
        zoom: 14,
        markers: [],
        autoZoomAfterBounds: true,
        keepZoom: true,
        img2x: false,
        zoomChanged: function () {}
    }, options);

    var methods = {
        getmap: function () {
            return map;
        },
        create_marker: function (location, data) {
            return setMarker(location, data);
        },
        remove_marker: function (marker) {
            if(! marker) {
                return;
            }
            marker.setMap(null);
        },
        fitbounds: function (map, markers) {
            var lats = $.map(markers, function (v) { return v.position.lat() });
            var lngs = $.map(markers, function (v) { return v.position.lng() });

            var nw = new google.maps.LatLng(Math.min.apply(null, lats), Math.min.apply(null, lngs));
            var se = new google.maps.LatLng(Math.max.apply(null, lats), Math.max.apply(null, lngs));

            if(! nw || ! se) {
                return;
            }

            if(settings.autoZoomAfterBounds && 1 < markers.length) {
                map.fitBounds(new google.maps.LatLngBounds(nw, se));
            }
            else{
                map.setZoom(settings.keepZoom ? map.getZoom() : settings.zoom);
                map.panTo(new google.maps.LatLng(settings.center.lat, settings.center.lng));
            }

        }
    };

    $.fn.mapping = function (method) {
        if(methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if(typeof method === 'object' || ! method){
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' +  method + ' does not exist on jQuery.mapping');
        }
    };

    var setMarker = function(position, data, afterLoad){
        var data = data || {};

        var img = new Image();
        img.src = data.icon;


        var dfd = $.Deferred();

        img.onload = function () {
            var w = settings.img2x ? img.width / 2 : img.width
            var h = settings.img2x ? img.height / 2 : img.height
            var marker = new google.maps.Marker({
                icon: {
                    url: data.icon,
                    scaledSize: new google.maps.Size(w, h)
                },
                position: position,
                map: map,
                center: 'point'
            });
            // map.panBy(0,  - (img.height / 4));

            if(data.dragend) {
                google.maps.event.addListener(marker, 'dragend', function (e){
                    data.dragend(e);
                });
            }

            var balloon = new google.maps.InfoWindow({position: position, content: data.title /* content: n + '. ' + data.name,*/});

            if(data.click) {
                google.maps.event.addListener(marker, 'click', function (e){
                    // location.href = data.url;
                    window.open(data.url,'_blank')
                    // return function(){ location.href="http://www.yahoo.co.jp/"; };
                    // if($(map).data('balloon')){
                    //     $(map).data('balloon').close();
                    // }
                    // balloon.open(marker.getMap(), marker);

                    // $(map).data('balloon', balloon);
                });
            }
// google.maps.event.addListener(marker1, 'click', function() {
//     window.open("http://www.yahoo.co.jp/" );
// });
            // google.maps.event.addDomListener(window, 'resize', function () {
            //     if(data.center == 'icon') {
            //         map.panBy(0,  - (img.height / 4));
            //     }
            //     map.panTo(position);
            // });

            if(data.init) {
                data.init(marker);
            }

            return dfd.resolve(marker)
        }

        return dfd.promise();
    }

    return this.each(function() {

        $(this).width(settings.width).height(settings.height)

        var position = new google.maps.LatLng(settings.center.lat, settings.center.lng);
        var mapOptions = {
            zoom: settings.zoom,
            center: position,
            scrollwheel: false
        }
        map = new google.maps.Map(this, $.extend(mapOptions, settings.mapOptions, true));
        _settings = settings
        if(! $.isEmptyObject(settings.markers)) {
            var lats = [], lngs = [];

            var dfds = [];
            $.each(settings.markers, function (i, v) {
                dfds.push(setMarker(new google.maps.LatLng(v.lat, v.lng), v))
            });

            $.when.apply($, dfds).then(function () {
                $(this).mapping('fitbounds', map, arguments);
                var markers = arguments

                google.maps.event.addDomListener(window, 'resize', function() {
                    $(this).mapping('fitbounds', map, markers)

                })
            })
        }

    });

  };
})(jQuery);