mainApp.controller('DashboardController', function ($scope, TemperatureService, $interval) {
    var chart = document.getElementById('chart').getContext('2d');
    showChart = function () {
        $interval(function () {
            TemperatureService.getAllTemperature()
                .then(function (response) {

                    
                    var labels = response.data.data.map(function (e) {
                        if(e == null) {
                            console.log("HIT")
                        }else {
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
                                data: data,
                                backgroundColor: 'rgba(233,30,99, 0.3)'
                            }]
                        },
                        options: {
                            scales: {
                                yAxes: [{
                                    ticks: {
                                        suggestedMin: 25,
                                        suggestedMax: 40,
                                        stepSize: 5
                                    }
                                }],
                                xAxes: [{
                                    ticks: {
                                        min: 0,
                                        stepSize: 2,
                                        max: 10 - 4
                                    }
                                }]

                            }
                        }
                    });

                });
        }, 5000)

    }

    showChart();
})