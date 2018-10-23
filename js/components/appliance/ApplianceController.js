mainApp.controller('ApplianceController', function($scope, $http) {
    $scope.offChannelA = function() {
        $http({
            method: 'GET',
            url: 'http://192.168.43.27/onChannelA',
            headers: 'Access-Control-Allow-Origin : *'
        }).then(function(response) {
            console.log("ON CHANNEL A");
        })
    }

    $scope.onChannelA = function() {
        $http.get('http://192.168.43.27/offChannelA')
            .then(function (response){
                console.log("OFF CHANNEL A");
            })
    }

    $scope.offChannelB = function() {
        $http.get('http://192.168.43.27/onChannelB')
            .then(function (response){
                console.log("ON CHANNEL B");
            })
    }

    $scope.onChannelB = function() {
        $http.get('http://192.168.43.27/offChannelB')
            .then(function (response){
                console.log("OFF CHANNEL B");
            })
    }
})