mainApp.controller('DatabaseController', function ($scope, TemperatureService, $interval) {


    $scope.getTempById = function (id) {
        console.log('hit');
        TemperatureService.getTempById(id)
            .then(function (response) {
                var temp = [];
                console.log(response);
                $scope.temp = response;
            })
    }

    $scope.updateTemp = function(object) {
        console.log(object.data);
        TemperatureService.updateTemp(object)
            .then(function(response){
                console.log(response.status);
            })
    }

    $scope.deleteTempById = function (id) {
        console.log(id);
        TemperatureService.deleteTempById(id)
            .then(function (response) {
                console.log(response.data);
                $scope.temperature.splice($scope.temperature, 1);
            })
    }

    getTemperature = function () {
        $interval(function () {
            TemperatureService.getAllTemperature()
                .then(function (response) {
                    $scope.temperature = [];
                    $scope.temperature = response.data.data;
                });
        }, 2000)
    }

    getTemperature();

})