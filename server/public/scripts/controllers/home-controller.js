myApp.controller('HomeController', function ($http) {
    console.log('HomeController hit');
    let hc = this;
    hc.listings = [];

    hc.getHomeListings = function () {
        console.log('in getHomeListings');
        $http({
            method: 'GET',
            url: '/home' //this has to match with route in 
        }).then(function (response) {
            console.log('HomeController - GET - response', response.data);
            hc.listings = response.data.results;
            console.log('hc.listings', hc.listings);            
        }).catch(function (error) {
            console.log('error in GET home', error);
        });
    };
    hc.getHomeListings();
});//end getRental 