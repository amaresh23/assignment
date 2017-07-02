angular.module('sw.details', [])
.controller('DetailsCtrl', function($scope,$state,$http,Service,$stateParams) {
    /* ID for resources
        1. People
        2. Films
        3. Starship
        4. Vehicles
        5. Species
        6. Planets
    */
    
    /* Loading spinner init  */
    $scope.loading = true;
    
    /* Back button */
    $scope.back = function() {
        $state.go('details',{id:localStorage.getItem('id'),url:localStorage.getItem('url')});
        if(localStorage.getItem('id2')==null && localStorage.getItem('url2')==null) history.back();
    }
    
    /* Use localStorage for back view inside a single state */
    if(localStorage.getItem('id2')!=null && localStorage.getItem('url2')!=null) {
        localStorage.setItem('id',localStorage.getItem('id2'));
        localStorage.setItem('url',localStorage.getItem('url2'));
    }    
    if(localStorage.getItem('id')!=null && localStorage.getItem('url')!=null) {
        localStorage.setItem('id2',$stateParams.id);
        localStorage.setItem('url2',$stateParams.url);
    } else {
        localStorage.setItem('id',$stateParams.id);
        localStorage.setItem('url',$stateParams.url);
    }
    
    
    
    
    /* PLANETS DETAILS */
    if($stateParams.id==6) {
        $scope.showPlanets = true;
        $scope.loadList = true;
        var getSpecies = {
            method: 'GET',
            url: $stateParams.url
        }
        $http(getSpecies)
        .then(function(res) {
            $scope.loading = false;
            
            
            
            /* View Data Planets */
            $scope.planets = {
                rotation: res.data.rotation_period,
                orbit: res.data.orbital_period,                
                diameter: res.data.diameter,                
                climate: res.data.climate,                
                surface: res.data.surface_water,                
                gravity: res.data.gravity,                
                terrain: res.data.terrain,                
                population: res.data.population,                
            }
            
            /* View Data Panel Heading */
            $scope.title = res.data.name;
            $scope.icon = 'ion-planet';
        });
    }
});