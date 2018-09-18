app.controller('MainController', ['$scope', '$routeParams','mainService','$location','menuService',
    function($scope, $routeParams, mainService, $location, menuService) {
        $scope.menu=menuService
        console.log($scope.menu)
        mainService.then(function(response) {
            $scope.data = response.data
           
        })
        
        $scope.location=function(path){
            $location.path(path)
            $scope.$apply()
        }
        $scope.$on('$routeChangeSuccess', function() {
            $scope.page=$routeParams.page;
            $scope.path=$location.path();
            console.log($scope.path)
            if($scope.path=='/section3'){
                if($routeParams.page=='overview_1'){
                    $scope.overviewTitle='Overview 1'
                    $scope.tiles=$scope.menu.bls
                }else{
                    $scope.overviewTitle='Overview 2'
                    $scope.tiles=$scope.menu.sector
                }
                
            }
            for(var i=0; i<$scope.data.length; i++){
                if($scope.data[i].url==$scope.page){
                    $scope.info=$scope.data[i]
                }
            }
        }  )
    }
                                
    
])