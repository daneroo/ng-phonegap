angular.module(_CONTROLLERS_).controller('HomeController', function($scope,$timeout) {

  $scope.text = "iMetrical Swiper";
  $scope.slides = [
    {caption:'Live', metric:'300s', imgIdx:0},
    {caption:'Day', metric:'24h', imgIdx:1},
    {caption:'Month', metric:'30d', imgIdx:2},
    {caption:'Year', metric:'365d', imgIdx:3}
  ];
  $scope.stamp = '';
  $scope.onTimeout = function(){
    var d = new Date();
    $scope.stamp = ''+d.getHours()+':'+d.getMinutes()+':'+d.getSeconds();
    mytimeout = $timeout($scope.onTimeout,1000);
  }    
  var mytimeout = $timeout($scope.onTimeout,1000);

  setTimeout(function(){
    window.mySwipe = new Swipe(document.getElementById('slider'),{
      auto: 5000,
      continuous: true,
      startSlide: 1
    });
  },500);


});
