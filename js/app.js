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
    when('/developer', {
        templateUrl: 'js/components/developer/developer.html'
    }).
    when('/appliance', {
        templateUrl: 'js/components/appliance/appliance.html',
        controller: 'ApplianceController'
    }).
    otherwise({
        redirectTo: '/dashboard'
    });
}]);