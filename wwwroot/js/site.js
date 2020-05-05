var map;
var geocoder;
var circle;
var content;
var testimonial;
var region;
var kmlLayer;

var href = 'https://raw.githubusercontent.com/jbSilo/HousingPrices/master/hey-zillow-neighborhoods.kml';

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: { lat: 41.876, lng: -87.624 }
    });

    kmlLayer = new google.maps.KmlLayer({
        url: href,
        map: map
    });

    kmlLayer.addListener('click', function (event) {
        content = event.featureData.infoWindowHtml;
        testimonial = document.getElementById('content');
        testimonial.innerHTML = content;
    });

    geocoder = new google.maps.Geocoder();
}


var address;
var marker;
function codeAddress() {
    address = document.getElementById('address').value;
    geocoder.geocode({ 'address': address }, function (results, status) {
        if (status == 'OK') {
            map.setCenter(results[0].geometry.location);
            marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
        } else {
            alert('Geocode was not successful for the following reason: ' + status);
        }
    });
}

function createCircle() {

    var commute = document.getElementById('commute').value;
    var circleOptions = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.4,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.1,
        map: map,
        center: marker.position,
        radius: getCoords(commute)
    }
    circle = new google.maps.Circle(circleOptions);
}

function getCoords(commute) {
    return commute * 2000;
}

function removeCircle() {
    circle.setMap(null);
}

