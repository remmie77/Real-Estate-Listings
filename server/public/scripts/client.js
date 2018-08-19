console.log('JS');

let myApp = angular.module('myApp', ['ngRoute']);

myApp.config( function ( $routeProvider ) {
    console.log('in config');
    $routeProvider.when('/', {
        templateURL: 'views/home.html',
        controller: 'HomeController as hc'
    })//end home
    .when('/rental', {
        templateURL: 'views/rental.html',
        controller: 'RentalController as rc'
    })//end rental
    .when('/sales', {
        templateURL: 'views/sales.html',
        controller: 'SalesController as sc'
    })//end sales
    .otherwise({
        redirectTo: '/' 
    });//end otherwise
});

// myApp.controller('HomeController', function ($http) {
//     console.log('HomeController hit');
//     let hc = this;
//     hc.listings = [];

//     hc.getHomeListings = function () {
//         console.log('in getRental');
//         $http({
//             method: 'GET',
//             url: '/home' //this has to match with route in 
//         }).then(function (response) {
//             console.log('HomeController - GET - response', response.data);
//             hc.listings = response.data.results;
//             console.log('hc.listings', hc.listings);            
//         }).catch(function (error) {
//             console.log('error in GET home', error);
//         });
//     };
//     hc.getHomeListings();
// });//end getRental 


