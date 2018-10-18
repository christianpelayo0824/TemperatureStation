mainApp.service('TemperatureService', ['$http', function($http){

    var BASE_LINK = 'http://localhost/FinalProject/api/temp';

    this.getAllTemperature = function() {
        return $http({
            method: 'GET',
            url: BASE_LINK + '/Get.php'
        });
    }
}])