var gmap = angular.module('gmap', [])
.controller('MapController', ['$scope',function ($scope) {
  var self = this;
  this.lat = 22.3782353;
  this.lng = 114.1807784;

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: this.lat, lng: this.lng}
  });

  map.addListener('click',function (event) {
    self.lat = event.latLng.lat();
    self.lng = event.latLng.lng();
    $scope.$apply();
  });


  var service = new google.maps.places.PlacesService(map);
  this.search = function () {
    var request = {
      bounds: map.getBounds(),
      type: ['store']
    }
    service.nearbySearch(request, function(results, status) {
        console.log(results);
        results.forEach(function(r) {
          console.log(r.name);
          createMarker(r);
        });
      });
  }


  this.places = [];

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
    google.maps.event.addListener(marker, 'dblclick', function() {
      self.places.push(place.name);
      $scope.$apply();
    });

    markers.push(marker);
  }

  this.delete = function () {
    markers.forEach(function (m) {
      console.log(123);
      m.setMap(null);
    });
    markers = [];
  }

  this.save = function () {
    window.alert(this.places);
  }
}]);
