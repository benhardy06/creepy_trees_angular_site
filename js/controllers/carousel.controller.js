app.controller('carouselController', ['$scope',
    function($scope) {
        $scope.slides=[
            {
                id:0
            },{
                id:1
            },{
                id:2
            },{
                id:3
            }
        ]
        $scope.noWrapSlides = false;
        $scope.active = 0;
        $scope.transition=false
    }
                                  
    
])