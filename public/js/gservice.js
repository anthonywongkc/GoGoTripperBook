// Creates the gservice factory. This will be the primary means by which we interact with Google Maps
angular.module('gservice', [])
    .factory('gservice', function($rootScope){
      var gmap = {};

      var map; //google map Object
      var service;

      gmap.init = function (lat, lng) {
        map = new google.maps.Map(document.getElementById('map'), {
            zoom: 5,
            center: {lat: lat, lng: lng}
        });
        console.log("created map");

        map.addListener('center_changed', function () {
          $rootScope.$emit('gservice:centerChanged',  map.getCenter().toJSON());
        })

        //create serivce object
        service = new google.maps.places.PlacesService(map);
      }

      //google places search

      gmap.search = function () {
        //clear markers before search
        gmap.clearMarkers();
        var request = {
          bounds: map.getBounds(),
          type: ['store']
        }
        service.nearbySearch(request, function(results, status) {
            // console.log(results);
            results.forEach(function(r) {
              createMarker(r);
            });
          });
      }

      var markers = [];
      function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location,

        });
        var infowindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, 'mouseover', function() {
          infowindow.setContent("<b>" +place.name + "</b>");
          infowindow.open(map, this);
        });
        google.maps.event.addListener(marker, 'mouseout', function() {
          infowindow.close();
        });
        google.maps.event.addListenerOnce(marker, 'dblclick', function() {
          console.log(place.hasOwnProperty('photos'));
          $rootScope.$emit('gservice:addPlace', place);
        });

        markers.push(marker);
      }

      gmap.clearMarkers = function () {
        markers.forEach(function (m) {
          m.setMap(null);
        });
        markers = [];
      }

        // Refresh the page upon window load. Use the initial latitude and longitude
      google.maps.event.addDomListener(window, 'load',
           gmap.init(35.7002479, 138.6589417));

      return gmap;
});
