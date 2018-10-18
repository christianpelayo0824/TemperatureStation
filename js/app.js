var mainApp = angular.module('mainApp', ['ngRoute']);

mainApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
    when('/dashboard', {
        templateUrl: 'js/components/dashboard/dashboard.html',
        controller: 'DashboardController'
    }).
    when('/database', {
        templateUrl: 'js/components/database/database.html',
        controller: 'DatabaseController'
    }).
    otherwise({
        redirectTo: '/dashboard'
    });
}]);