angular.module('sw.home', [])
.controller('HomeCtrl', function($scope,$state,$http,Service,$stateParams) {
   
    $scope.loading = true;
    $scope.pagination = true;
    
    $scope.searchList = '';
    
   
    localStorage.clear();
    
  
    $scope.pushPrev = function(url,id) {
        $state.go('home',{id:id,url:url});
    }
    $scope.pushNext = function(url,id) {
        $state.go('home',{id:id,url:url});
    }
	
	
	
        /*---------------------*/
        if($stateParams.id==null || $stateParams.id==6) {
            $scope.title = 'Planets';
            $scope.listIcon = 'ion-planet';
            $scope.id = 6;
            
            if($stateParams.url==null) {
               
                var getPlanet = {
                    method: 'GET',
                    url: Service.API+'planets'
                }
                $http(getPlanet)
                .then(function(res) {
                  
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    
                 
                    if(res.data.next==null && res.data.previous==null) {
                        $scope.pagination = true;
                    } else {
                        $scope.pagination = false;
                    }

                  
                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    
                
                    if(res.data.previous==null) {
                        $scope.page = 1;
                    } else {
                        $scope.page = Number(res.data.previous.substr(-1))+1;
                    }
                });
            } else {
             
                var getNextPlanet = {
                    method: 'GET',
                    url: $stateParams.url
                }
                $http(getNextPlanet)
                .then(function(res) {
                   
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    $scope.pagination = false;

                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    $scope.page = Number(res.data.previous.substr(-1))+1;
                });
            }
        }
    
  
    if($stateParams.id==1) { 
        $scope.title = 'People';
        $scope.listIcon = 'ion-android-person';
        $scope.id = 1;
        
        if($stateParams.url==null) {
          
            var getPeople = {
                method: 'GET',
                url: Service.API+'people'
            }
            $http(getPeople)
            .then(function(res) {
           
                $scope.items = res.data.results;
                $scope.loading = false;
                
               
                if(res.data.next==null && res.data.previous==null) {
                    $scope.pagination = true;
                } else {
                    $scope.pagination = false;
                }

                $scope.prev = res.data.previous;
                $scope.next = res.data.next;
                
     
                if(res.data.previous==null) {
                    $scope.page = 1;
                } else {
                    $scope.page = Number(res.data.previous.substr(-1))+1;
                }
            });
        } else {
    
            var getNextPeople = {
                method: 'GET',
                url: $stateParams.url
            }
            $http(getNextPeople)
            .then(function(res) {
        
                $scope.items = res.data.results;
                $scope.loading = false;
                $scope.pagination = false;
                
            
                $scope.prev = res.data.previous;
                $scope.next = res.data.next;
                $scope.page = Number(res.data.previous.substr(-1))+1;
            });
        }  
    } else {
      
        if($stateParams.id==2) {
            $scope.title = 'Films';
            $scope.listIcon = 'ion-android-film';
            $scope.id = 2;  
            
            if($stateParams.url==null) {                
               
                var getFilms = {
                    method: 'GET',
                    url: Service.API+'films'
                }
                $http(getFilms)
                .then(function(res) {
             
                    $scope.items = [];
                    angular.forEach(res.data.results, function(v,k) {
                        $scope.items.push({
                            name: res.data.results[k].title,
                            url: res.data.results[k].url
                        });
                    });
                    $scope.loading = false;
                    
                  
                    if(res.data.next==null && res.data.previous==null) {
                        $scope.pagination = true;
                    } else {
                        $scope.pagination = false;
                    }

                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    
            
                    if(res.data.previous==null) {
                        $scope.page = 1;
                    } else {
                        $scope.page = Number(res.data.previous.substr(-1))+1;
                    }
                });
            } else {
            
                var getNextFilms = {
                    method: 'GET',
                    url: $stateParams.url
                }
                $http(getNextFilms)
                .then(function(res) {
                
                    $scope.items = [];
                    angular.forEach(res.data.results, function(v,k) {
                        $scope.items.push({
                            name: res.data.results[k].title,
                            url: res.data.results[k].url
                        });
                    });
                    $scope.loading = false;
                    $scope.pagination = false;

                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    $scope.page = Number(res.data.previous.substr(-1))+1;
                });
            }
        }
        
    
        if($stateParams.id==3) {
            $scope.title = 'Starships';
            $scope.listIcon = 'ion-jet';
            $scope.id = 3;
            
            if($stateParams.url==null) {
               
                var getStarship = {
                    method: 'GET',
                    url: Service.API+'starships'
                }
                $http(getStarship)
                .then(function(res) {
               
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    
                 
                    if(res.data.next==null && res.data.previous==null) {
                        $scope.pagination = true;
                    } else {
                        $scope.pagination = false;
                    }

                    
                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    
                    
                    if(res.data.previous==null) {
                        $scope.page = 1;
                    } else {
                        $scope.page = Number(res.data.previous.substr(-1))+1;
                    }
                });
            } else {
           
                var getNextStarship = {
                    method: 'GET',
                    url: $stateParams.url
                }
                $http(getNextStarship)
                .then(function(res) {
                    
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    $scope.pagination = false;

                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    $scope.page = Number(res.data.previous.substr(-1))+1;
                });
            }
        }
        
     
        if($stateParams.id==4) {
            $scope.title = 'Vehicles';
            $scope.listIcon = 'ion-android-car';
            $scope.id = 4;
            
            if($stateParams.url==null) {
              
                var getVehicle = {
                    method: 'GET',
                    url: Service.API+'vehicles'
                }
                $http(getVehicle)
                .then(function(res) {
                    
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    
                  
                    if(res.data.next==null && res.data.previous==null) {
                        $scope.pagination = true;
                    } else {
                        $scope.pagination = false;
                    }

                  
                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    
          
                    if(res.data.previous==null) {
                        $scope.page = 1;
                    } else {
                        $scope.page = Number(res.data.previous.substr(-1))+1;
                    }
                });
            } else {
             
                var getNextVehicle = {
                    method: 'GET',
                    url: $stateParams.url
                }
                $http(getNextVehicle)
                .then(function(res) {
              
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    $scope.pagination = false;

                   
                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    $scope.page = Number(res.data.previous.substr(-1))+1;
                });
            }
        }
        
      
        if($stateParams.id==5) {
            $scope.title = 'Species';
            $scope.listIcon = 'ion-ios-body';
            $scope.id = 5;
            
            if($stateParams.url==null) {
             
                var getSpecies = {
                    method: 'GET',
                    url: Service.API+'species'
                }
                $http(getSpecies)
                .then(function(res) {
                  
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    
                    
                    if(res.data.next==null && res.data.previous==null) {
                        $scope.pagination = true;
                    } else {
                        $scope.pagination = false;
                    }

                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    
                    
                    if(res.data.previous==null) {
                        $scope.page = 1;
                    } else {
                        $scope.page = Number(res.data.previous.substr(-1))+1;
                    }
                });
            } else {
               
                var getNextSpecies = {
                    method: 'GET',
                    url: $stateParams.url
                }
                $http(getNextSpecies)
                .then(function(res) {
                  
                    $scope.items = res.data.results;
                    $scope.loading = false;
                    $scope.pagination = false;

                   
                    $scope.prev = res.data.previous;
                    $scope.next = res.data.next;
                    $scope.page = Number(res.data.previous.substr(-1))+1;
                });
            }
        }
        
        
    }
});