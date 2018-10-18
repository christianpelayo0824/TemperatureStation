mainApp.controller('DatabaseController', function ($scope, TemperatureService, $interval) {

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