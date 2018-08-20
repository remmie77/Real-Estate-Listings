myApp.controller('SalesController', function ($http) {
    console.log('SalesController hit');
    let sc = this;
    sc.sale = [];

    sc.getSalesListings = function () {
        sc.sale = [];
        console.log('in getsalesListings');
        $http({
            method: 'GET',
            url: '/sales' //this has to match with route in 
        }).then(function (response) {
            console.log('SalesController - GET - response', response.data);
            sc.sale = response.data;
            console.log('sc.sale', sc.sale);            
        }).catch(function (error) {
            console.log('error in GET home', error);
        });
    };

    sc.deleteHouse = function (id) {
        console.log(id);
        $http({
            method: 'DELETE',
            url: '/sales/' + id
        }).then(function (response) {
            console.log(response);
            sc.getSalesListings()
        }).catch(function (error) {
            console.log('SalesController - deleteHouse - error ', error);
        });
    };

    sc.getSalesListings();
});//end getRental 


