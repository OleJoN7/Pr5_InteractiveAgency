$(document).ready(function () {

    $(".scroll-icon").click(function () {
        $('html,body').animate({
            scrollTop: $(".our-advantage").offset().top
        }, 1500);
    });


    $('#lightSlider').lightSlider({
        item: 3,
        adaptiveHeight: false,
        slideMove: 1,
        speed: 400,
        slideMargin: 0,
        useCSS: false,

        auto: true,
        loop: true,
        slideEndAnimation: true,
        pause: 2000,
        pager: false,

        keyPress: false,
        controls: true,
        prevHtml: '',
        nextHtml: '',

        responsive: [
            {
                breakpoint: 991,
                settings: {
                    item: 1,
                    slideMove: 1
                }
            }]
    });

}); // ---- End document.ready

//-----------------ADD MAP with Own Marker and using own API---------------

function myMap() {                                               // or window.myMap = function () {
    var Location = new google.maps.LatLng(51.508742, -0.120850); // set coordinates of marker
    var mapID = document.getElementById("googleMap");            // bind HTML element to map
    var mapOptions = {
        center: Location,
        zoom: 5
    };                                                           // options
    var map = new google.maps.Map(mapID, mapOptions);

    var marker = new google.maps.Marker({
        position: Location,
        animation: google.maps.Animation.BOUNCE,
        icon: "images/map-icon.png"
    });
    marker.setMap(map);

    // Zoom to 9 when clicking on marker
    google.maps.event.addListener(marker, 'click', function () {
        map.setZoom(9);
        map.setCenter(marker.getPosition());
    });

    function newLocation(newLat, newLng) {
        map.setCenter({
            lat: newLat,
            lng: newLng
        });
    }

    function newMarker(newLat, newLng) {
        marker.setPosition(new google.maps.LatLng(newLat, newLng));
    }

    $(".london").on('click', function () {
        newLocation(51.509865, -0.118092);
        newMarker(51.509865, -0.118092);
    });

    $(".paris").on('click', function () {
        newLocation(48.864716, 2.349014);
        newMarker(48.864716, 2.349014)
    });

    $(".new-york").on('click', function () {
        newLocation(40.730610, -73.935242);
        newMarker(40.730610, -73.935242);
    });
}