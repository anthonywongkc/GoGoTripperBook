var map;
var cuhk;
var service;

function initMap() {
  cuhk = new google.maps.LatLng(22.382155923513853,114.18665229456792);
  map = new google.maps.Map(document.getElementById('map'), {
    center: cuhk,
    zoom: 15
  });



  var marker = new google.maps.Marker({
      position: cuhk,
      map: map,
      title: 'Hello World!',
      clickable: true,
      draggable: true
    });

    marker.addListener('mouseup', function () {
      //Toggle marker visibility
      var location = marker.getPosition();
      showInfo(location);
    });

    var request = {
      location: cuhk,
      radius: '500',
      types: ['store']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    console.log(results.length);
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {

        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        var infowindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name);
          infowindow.open(map, this);
        });
      }

function showInfo(location) {

  coordInfoWindow.setContent(location.toString());
  coordInfoWindow.setPosition(location);
  coordInfoWindow.open(map);
}
