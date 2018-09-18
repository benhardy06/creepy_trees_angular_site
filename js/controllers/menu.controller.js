app.controller('menuController', ['$scope','menuService',
    function($scope, menuService) {
        $scope.menu=menuService
        $scope.status = {
            isopen: false
          };

//          $scope.toggled = function(open) {
//                $log.log('Dropdown is now: ', open);
//          };

          $scope.toggleDropdown = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.status.isopen = !$scope.status.isopen;
          };
        $scope.solutions=false;
        $scope.sector=false;
        $scope.showOverlay=false;  
        $scope.closeMenu=function(){
            $scope.showOverlay=false;
        }
    }
                                  
    
])