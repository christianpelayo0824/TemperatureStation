mainApp.controller('DatabaseController', function ($scope, TemperatureService, $interval) {


    $scope.deleteTempById = function (id) {
        console.log(id);
        TemperatureService.deleteTempById(id)
            .then(function(response){
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