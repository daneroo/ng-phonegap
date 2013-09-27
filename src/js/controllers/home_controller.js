angular.module(_CONTROLLERS_).controller('HomeController', function($scope) {

  $scope.text = "Hello iMetrical!";

  setTimeout(function(){
    window.mySwipe = new Swipe(document.getElementById('slider'),{
      auto: 3000,
      continuous: true
    });
  },500);


});
