myApp.controller('CategoryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal,$http) {
  $scope.template = TemplateService.getHTML("content/category.html");
  TemplateService.title = "Home"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  $scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.slider={};
  $scope.slider.count=0;
  
  $scope.nextSlide = function () {
    console.log($scope.slider.count, "data passed");
    ++$scope.slider.count;
    // $jstorate
    console.log($scope.slider.count, "data passed......");
    $scope.viewslide($scope.slider.count);
  }

  $scope.viewslide = function (data) {
    var val=data;
    console.log("in switch")
    console.log(val)
    switch (val) {
      case 0:
        $scope.slideView = 0;
        break;
      case 1:
        $agentloginView = 1;
        console.log("i am in ")
        console.log($agentloginView)
        break;
      case 2:
        $scope.slideView = 2;
        break;

    }
  }
  //switching between cards ends

})