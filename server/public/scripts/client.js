console.log('JS');

let myApp = angular.module('myApp', [ngRoute]);

myApp.config( function ( $routeProvider ) {
    $routeProvider.when('/', {
        templateURL: '/views/home.html'
    })//end home
    .when('/rental', {
        templateURL: '/views/rental.html',
        controller: 'RentalController as rc'
    })//end rental
    .when('/sales', {
        templateURL: '/views/sales.html',
        controller: 'SalesController as sc'
    })//end sales
    ///////--------put in ListingController---------////////
})


