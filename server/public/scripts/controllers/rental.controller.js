myApp.controller('RentalController', function ($http) {
    console.log('RentalController hit');
    let rc = this;
    rc.rental = [];

    rc.getRental = function () {
        console.log('in getRental');
        $http({
            method: 'GET',
            url: '/rental'
        }).then(function (response) {
            console.log('RentalController - getRental - response', response.data);
            rc.rental = response.data.results;
            console.log('rc.rental');            
        }).catch(function (error) {
            console.log('error in getRental', error);
        });
    };
});//end getRental 

