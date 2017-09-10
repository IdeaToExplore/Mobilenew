myApp.controller('CategoryCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal, $http) {
  $scope.template = TemplateService.getHTML("content/category.html");
  TemplateService.title = "Home"; //This is the Title of the Website
  $scope.navigation = NavigationService.getNavigation();
  $scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  $scope.data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
  $scope.slider = {};
  $scope.slider.count = 0;
   $scope.slideView = $scope.slider.count;

  $scope.Productlist = [{
    img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    name: "mobile Phone",
    id: "1"
  }, {
    img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    name: "mobile Phone",
    id: "2"
  }, {
    img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    name: "mobile Phone",
    id: "3"
  }, {
    img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    name: "mobile Phone",
    id: "4"
  }, {
    img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    name: "mobile Phone",
    id: "5"
  }, {
    img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    name: "mobile Phone",
    id: "6"
  }]

  $scope.nextSlide = function () {
    console.log($scope.slider.count, "data passed");
    if($scope.slider.count<=1){
    ++$scope.slider.count;
    }
    // $jstorate
    console.log($scope.slider.count, "data passed......");
    $scope.viewslide($scope.slider.count);
  }

  $scope.prevSlide = function () {
    if($scope.slider.count>0){
    --$scope.slider.count;
    }
    $scope.viewslide($scope.slider.count);
  }

  $scope.viewslide = function (data) {
    var val = data;
    console.log("in switch")
    console.log(val);
    if (val<3) {
      $scope.slideView = $scope.slider.count;
      console.log("i am in ", $scope.slideView);
    }

  }

  $scope.showRam = function () {
    $scope.showramSize = !$scope.showramSize;
  }

  $scope.question = function () {
    $scope.questionHolder = !$scope.questionHolder;
  }

  //switching between cards ends

})