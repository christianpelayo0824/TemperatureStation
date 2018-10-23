mainApp.controller('DashboardController', function ($scope, TemperatureService, $interval) {
    var chart = document.getElementById('chart').getContext('2d');
    showChart = function () {
        $interval(function () {
            TemperatureService.getAllTemperature()
                .then(function (response) {
                    var labels = response.data.data.map(function (e) {
                        if (e == null) {
                            console.log("HIT")
                        } else {
                            return e.temperature;
                        }
                    });

                    var data = response.data.data.map(function (e) {
                        return e.temperature;
                    });
                    var tempChart = new Chart(chart, {
                        type: 'line',
                        data: {
                            labels: labels,
                            datasets: [{
                                label: 'Temperature',
                                borderColor: 'rgb(255,255,255)',
                                borderWidth: 2,
                                data: data,
                                backgroundColor: 'rgba(255,87,34, 0.8)'
                            }]
                        },
                        options: {
                            legend: {
                                labels: {
                                    fontColor: 'rgb(255,255,255)'
                                }
                            },
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        fontColor: 'rgb(255,255,255)',
                                        suggestedMin: 15,
                                        suggestedMax: 40,
                                        stepSize: 5
                                    },
                                    gridLines: {
                                        color: 'rgba(255,255,255)',
                                        lineWidth: 1
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        fontColor: 'rgb(255,255,255)',
                                        min: 0,
                                        stepSize: 2,
                                        max: 10 - 4
                                    },
                                    gridLines: {
                                        color: 'rgba(255,255,255)',
                                        lineWidth: 1
                                    }
                                }]

                            }
                        }
                    });
                });
        }, 5000)

    }

    getDateTime = function () {
        $interval(function () {
            var d = new Date();
            $scope.date = d.toLocaleString();
        }, 1000)
    }

    getDateTime();
    showChart();


})