(function() {
  angular.module('timeApp')
         .directive('showTime', function($interval) {
           return {
             restrict: 'E',
             template: '<div> The current time is {{time}} </div>',
             link: function(scope, element, attrs) {
                  scope.time = new Date().toString();
                  $interval(function() {
                    scope.time = new Date().toString();
                  }, 1000)
             }
           }
         })


})();
