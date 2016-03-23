var gmap = angular.module('gmap', ['gservice'])
.controller('MapController', ['$scope', 'gservice', '$rootScope',function ($scope, gservice, $rootScope) {
  var self = this;
  this.lat = 22.209081450326654; //22.3782353;
  this.lng = 114.03117510998538; //114.180778;
  this.places = [];
  $rootScope.$on('gservice:centerChanged', function (event,arg) {
    //console.log(arg.lat, arg.lng);
    self.lat  = arg.lat;
    self.lng  = arg.lng;
    // if(!$scope.$$phase)
    $scope.$apply();
  });

  $rootScope.$on('gservice:addPlace', function (event, place) {
    self.places.push(place);
    $scope.$apply();
  })


  this.init = function () {
    gservice.init(self.lat, self.lng);
  }

  this.search = function () {
    gservice.search();
  }

  this.clearMarkers = function () {
    gservice.clearMarkers();
  }
  //
  // this.getPhoto = function (place) {
  //   if(place != null && place.photos.length > 0) {
  //     return p.photos[0].getUrl({maxWidth: 100, maxHeight: 80});
  //   } else {
  //     return '';
  //   }
  // }
  // this.save = function () {
  //   window.alert(this.places);
  // }
}]);
