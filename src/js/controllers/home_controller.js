angular.module(_CONTROLLERS_).controller('HomeController', function($scope) {

  $scope.text = "iMetrical Swiper";
  $scope.slides = [
    {text:'One', imgIdx:1},
    {text:'Two', imgIdx:2},
    {text:'Three', imgIdx:3}];

  setTimeout(function(){
    window.mySwipe = new Swipe(document.getElementById('slider'),{
      auto: 5000,
      continuous: true
    });
  },500);


});
