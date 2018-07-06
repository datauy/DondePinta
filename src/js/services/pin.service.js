pmb_im.services.factory('PinService', ['$http', 'leafletData','ConfigService', function($http, leafletData, ConfigService) {

  var baseURL = ConfigService.baseURL + ConfigService.publicURL + "json/points.json";


  /**
   * Constructor, with class name
   */
  function Pin(_data) {
    angular.extend(this, _data);
  }

  Pin.getAll = function(){
    return $http.get(baseURL, { params: {}});
  }

  Pin.getById = function(id){
    var url = baseURL + id;
    return $http.get(url).then(function(result){
              return result;
    });
  }


    Pin._all = [];
    Pin.current = {};




    /**
     * Static method, assigned to class
     * Instance ('this') is not available in static context
     */
    Pin.build = function(_data) {
      return new Pin(_data);
    };

    Pin.prototype.setLatLng = function (lat,lng) {
      this.lat = lat;
      this.lon = lng;
    };

    /**
     * Return the constructor function
     */
    return Pin;

}]);
