myApp.controller('RentalController', function ($http) {
    console.log('RentalController hit');
    let rc = this;
    rc.rental = [];

    rc.getRental = function () {
        console.log('in getRental');
        $http({
            method: 'GET',
            url: '/rental' //this has to match with route in 
        }).then(function (response) {
            console.log('RentalController - GET rentals - response', response.data);
            rc.rental = response.data;
            console.log('rc.rental', rc.rental);            
        }).catch(function (error) {
            console.log('error in GET Rental', error);
        });
    };
        
    rc.deleteHouse = function (id) {
        console.log(id);
        $http({
            method: 'DELETE',
            url: '/rental/' + id
        }).then(function (response) {
            console.log(response);
            rc.getRental();
        }).catch(function (error) {
            console.log('RentalController - DELETE house - error ', error);
        });
    };

    rc.getRental();
});//end getRental 

