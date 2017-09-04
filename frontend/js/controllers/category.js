myApp.controller('CategoryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal) {
  $scope.template = TemplateService.getHTML("content/category.html");
  TemplateService.title = "Home"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  $scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // $scope.count = 0;
  // $scope.nextSlide = function (count) {
  //   console.log(count, "data passed");
  //   // $scope.slide = $scope.slide + 1;
  //   count = count + 1;
  //   console.log(count, "on click")
  // }

  $scope.viewslide = function (val) {
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