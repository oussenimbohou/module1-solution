(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
  $scope.lunchCheckMsg = function () {
    var lunchList = $scope.lunch.split(',');
    $scope.lunch= lunchList.filter(function(e) {return e;});
    var lunchLength = $scope.lunch.length;
    if(!$scope.lunch || lunchLength == 0 ){
      $scope.lunchMsg =  "Please enter data first";
      $scope.mystyle = "border:1px solid red;color: red";
    }else{
      $scope.mystyle = "border:1px solid green;color: green";
      if(lunchLength <= 3){
        $scope.lunchMsg = "Enjoy!";
      }else{
        $scope.lunchMsg = "Too much!";
      }
    }
  };
}
})();
