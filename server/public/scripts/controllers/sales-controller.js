myApp.controller('SalesController', function ($http) {
    console.log('SalesController hit');
    let sc = this;
    sc.sale = [];

    sc.getSalesListings = function () {
        console.log('in getSalesListings');
        $http({
            method: 'GET',
            url: '/sales' //this has to match with route in 
        }).then(function (response) {
            console.log('SalesController - GET - response', response.data);
            sc.sale = response.data.results;
            console.log('sc.sale', sc.sale);            
        }).catch(function (error) {
            console.log('error in GET home', error);
        });
    };
    sc.getSalesListings();
});//end getRental 


