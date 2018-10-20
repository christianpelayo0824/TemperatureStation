mainApp.service('TemperatureService', ['$http', function ($http) {

    var BASE_LINK = 'http://localhost/FinalProject/api/temp';

    this.getAllTemperature = function() {
        return $http({
            method: 'GET',
            url: BASE_LINK + '/Get.php'
        });
    }

    this.deleteTempById = function deleteTempById(id) {
        return $http({
            method: 'DELETE',
            url: BASE_LINK + '/Delete.php',
            data: {
                id: id
            }
        });
    }

    this.getTempById = function getTempById(id) {
        return $http({
            method: 'GET',
            url: BASE_LINK + '/Getbyid.php/?id=' + id
        });

    }

    this.updateTemp = function updateTemp(object) {
        return $http({
            method:'PUT',
            url: BASE_LINK + '/Update.php',
            data : {
                id: object.data.id,
                station: object.data.station,
                temperature: object.data.temperature
            }
        })
    }
}])