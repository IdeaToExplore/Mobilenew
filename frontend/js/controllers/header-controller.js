myApp.controller('headerCtrl', function ($scope, TemplateService, $uibModal) {
    $scope.template = TemplateService;
    // $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    //     $(window).scrollTop(0);
    // });
    // $.fancybox.close(true);

    // var loginmodal;
    // $scope.login = function () {
    //     console.log("modal")
    //     loginmodal = $uibModal.open({
    //         animation: true,
    //         scope: $scope,
    //         backdrop: 'static',
    //         keyboard: false,
    //         templateUrl: 'views/modal/login.html',
    //         size: 'md',
    //         // windowClass: 'backmodal'
    //     })
    // }
});