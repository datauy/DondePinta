pmb_im.services.factory('ConfigService', ['$http', function($http) {

  var ConfigObj = {};
  ConfigObj.baseURL = "/data";
  ConfigObj.publicURL = "/sites/dondepinta_backend/files/";
  return ConfigObj;

}]);
