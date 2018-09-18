app.directive('offTop', ['$window','$timeout', '$location', function($window, $timeout, $location) {
    return function(scope, element, attrs) {
        
        angular.element($window).on("scroll", scrollEffect)
        function scrollEffect(event) {
            var event = window.event || event;
            
            var splash = document.getElementsByClassName('splash-content') || null
            try{
                    var bottom = splash[0].offsetHeight;
                        $timeout(function() {
                            if($window.pageYOffset > bottom) {

                                    scope.runBorder=true;
                                }else{
                                    scope.runBorder=false;
                                }
                        },50)
            }catch(error){
//               do nothing 
            }
               
           
        }
        scope.$on('$destroy', function() {
            angular.element($window).unbind('scroll', scrollEffect)
        });
    }
}])