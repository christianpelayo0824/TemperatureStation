mainApp.service('TemperatureService', ['$http', function($http){

    var BASE_LINK = 'http://localhost/FinalProject/api/temp';

    this.getAllTemperature = function () {
        return $http({
            method: 'GET',
            url: BASE_LINK + '/Get.php'
        });
    }

    this.deleteTempById = function deleteTempById(id) {
        console.log("Hit");
        return $http({
            method: 'DELETE',
            url: BASE_LINK + '/Delete.php',
            data: {
                id: id
            }
        });
    }
}])