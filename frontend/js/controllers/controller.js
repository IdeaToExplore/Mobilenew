myApp.controller('HomeCtrl', function ($scope, TemplateService, NavigationService, $timeout, $uibModal,$http,$state) {
    $scope.template = TemplateService.getHTML("content/home.html");
    TemplateService.title = "Home"; //This is the Title of the Website
    $scope.navigation = NavigationService.getNavigation();
    $scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    // $scope.Productlist = [{
    //     img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    //     name: "mobile Phone",
    //     id: "1"
    // }, {
    //     img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    //     name: "mobile Phone",
    //     id: "2"
    // }, {
    //     img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    //     name: "mobile Phone",
    //     id: "3"
    // }, {
    //     img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    //     name: "mobile Phone",
    //     id: "4"
    // }, {
    //     img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    //     name: "mobile Phone",
    //     id: "5"
    // }, {
    //     img: "https://s3.cashify.in/cashify/productLine/img/xxhdpi/587753dd18df2.png",
    //     name: "mobile Phone",
    //     id: "6"
    // }]

    $scope.viewBrand = function () {
        $scope.url = "Brand/getAll";
        NavigationService.apiCall($scope.url,function (data) {
        console.log("data.brand", data);
        $scope.Productlist = data.data;
        });
    }
    $scope.viewBrand();

    // IMAGE JSON
    $scope.landingswiper = [{
        src: "img/final1.jpg"
    }, {
        src: "img/final2.jpg"
    }, {
        src: "img/final3.jpg"
    }, {
        src: "img/final4.jpg"
    }]
    // IMAGE JSON END
    var modal;
    $scope.login = function () {
        console.log("modal")
        modal = $uibModal.open({
            animation: true,
            scope: $scope,
            // backdrop: 'static',
            keyboard: false,
            templateUrl: 'views/modal/login.html',
            size: 'lg',
            windowClass: 'fadeInLeft'
        })
    }

    $scope.$on('$viewContentLoaded', function (event) {
        console.log("reloadviewcontetn")
        $scope.animateElementIn = function ($el) {
            // $el.removeClass('hidden');
            $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
        };

        $scope.animateElementOut = function ($el) {
            $el.addClass('animateOnce count');
            $el.removeClass('animated fadeInLeft'); // this example leverages animate.css classes
        };

    });

    // ANIMATION

    $scope.animateElementIn = function ($el) {
        // $el.removeClass('hidden');
        $el.addClass('animated fadeInLeft'); // this example leverages animate.css classes
    };

    $scope.animateElementOut = function ($el) {
        $el.addClass('animateOnce count');
        $el.removeClass('animated fadeInLeft'); // this example leverages animate.css classes
    };
    // ANIMATION END

    // HOW THE COMPANY WORKS JSON
    $scope.Workscontent = [{
        img: "fa fa-5x fa-briefcase",
        head: "Get your device price",
        content: "Select your device & we'll help you unlock the best selling price based on the present conditions of your gadget & the current market price."
    }, {
        img: "fa fa-5x fa-briefcase",
        head: "Schedule a Free Pickup",
        content: "On accepting the price offered for your device, we'll arrange a free pick up."
    }, {
        img: "fa fa-5x fa-briefcase",
        head: "Get Paid Instantly",
        content: "Instant Cash will be handed over to you at time of pickup or through payment mode of your choice."
    }]
    // HOW THE COMPANY WORKS JSON END



    // $.modalAnimate();
$scope.category=function(paramData){
    console.log("inside category",paramData);
              $state.go('category', {
                        id: paramData
                    })
        }
    // COMPANY DATA JSON
    $scope.CompanyData = [{
        number: "369",
        words: "Crore",
        head: "Cash Given"
    }, {
        number: "369",
        words: "Thousand",
        head: "Gadget Enanced"
    }, {
        number: "369",
        words: "Thousand",
        head: "Happy Users"
    }];

    // $scope.state={};
    // COMPANY DATA JSON END

    // STATE JSON
    $scope.viewState = function () {
        $scope.url = "City/getAll";
        NavigationService.apiCall($scope.url,function (data) {
        console.log("data.value", data);
        $scope.state = data.data;
        });
    }
    $scope.viewState();
    // $scope.state = [{
    //     name: "Mumbai"
    // }, {
    //     name: "Banglore"
    // }, {
    //     name: "Chennai"
    // }, {
    //     name: "Delhi"
    // }, {
    //     name: "Gujrat"
    // }, {
    //     name: "Kerla"
    // }, {
    //     name: "Mumbai"
    // }, {
    //     name: "Orissa"
    // }, {
    //     name: "Kolkata"
    // }];
    // STATE JSON END

    // LOCATION
    $timeout(function () {
        $(".selectpicker").selectpicker({
            "title": "Location",
            "size": 4,
        }).selectpicker("render");
    }, 100);
    // LOCATION END

    window.onload = function () {
        console.log("reload")
    }


    $scope.initSwiper = function () {
        // SWIPER
        $timeout(function () {
            console.log('in ');
            mySwiper = new Swiper('.ad-plus-swiper .swiper-container', {
                slidesPerView: 1,
                paginationClickable: true,
                loop: true,
                autoplay: 6000,
                grabCursor: true,
                spaceBetween: 10,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                touchEventsTarget: 'container',
                breakpoints: {
                    992: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1

                    },
                    481: {
                        slidesPerView: 1
                    },
                    320: {
                        slidesPerView: 1
                    }
                }
            })
        }, 100);

        // SWIPER END

        // COMPANY EXCHANGE SWIPER
        $timeout(function () {
            console.log('exchange');
            mySwiper2 = new Swiper(' .company-exchange-swiper .swiper-container', {
                slidesPerView: 5,
                paginationClickable: true,
                loop: false,
                // autoplay: 10000,
                grabCursor: true,
                spaceBetween: 10,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                touchEventsTarget: 'container',
                breakpoints: {
                    992: {
                        slidesPerView: 5
                    },
                    768: {
                        slidesPerView: 4

                    },
                    481: {
                        slidesPerView: 3
                    },
                    320: {
                        slidesPerView: 1
                    }
                }
            })
        }, 100);

        // SWIPER END


        // FEEDBACK SWIPER
        $timeout(function () {
            console.log('testomonial');
            mySwiper3 = new Swiper(' .testomonial-swiper-holder .swiper-container', {
                slidesPerView: 3,
                paginationClickable: true,
                // loop: true,
                // autoplay: 10000,
                grabCursor: true,
                spaceBetween: 10,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                touchEventsTarget: 'container',
                breakpoints: {
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2

                    },
                    481: {
                        slidesPerView: 1
                    },
                    320: {
                        slidesPerView: 1
                    }
                }
            })
        }, 100);

        // SWIPER END

        // LANDINPAGE-IMAGE SWIPER
        $timeout(function () {
            console.log('landingpage-swiper');
            mySwiper4 = new Swiper('.landingpage-imageswiper .swiper-container', {
                slidesPerView: 1,
                paginationClickable: true,
                // loop: true,
                autoplay: 10000,
                grabCursor: true,
                pagination: '.swiper-pagination',
                // spaceBetween: 10,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                touchEventsTarget: 'container',
                breakpoints: {
                    992: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 1

                    },
                    481: {
                        slidesPerView: 1
                    },
                    320: {
                        slidesPerView: 1
                    }
                }
            })
        }, 100);
        // SWIPER END
    }
    $scope.swiperInitialise = function (type) {
        if (type == 0) {
            $scope.$on('$viewContentLoaded', function (event) {
                console.log("000");
                $scope.initSwiper();
            })
        } else {
            $scope.initSwiper();
            console.log("111");
        }
    }
    $scope.swiperInitialise(0);


    // FEEDBACK JSON
    $scope.feedBack = [{
        img: "img/deepika.jpg",
        name: "Deepika Padukone",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur ratione quidem iusto magnamfacilis aperiam dolores magni exercitationem nostrum nihil tenetur, cum dolorem qui error sapientesequi eaque in."
    }, {
        img: "img/deepika.jpg",
        name: "Deepika Padukone",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur ratione quidem iusto magnamfacilis aperiam dolores magni exercitationem nostrum nihil tenetur, cum dolorem qui error sapientesequi eaque in."
    }, {
        img: "img/deepika.jpg",
        name: "Deepika Padukone",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur ratione quidem iusto magnamfacilis aperiam dolores magni exercitationem nostrum nihil tenetur, cum dolorem qui error sapientesequi eaque in."
    }, {
        img: "img/deepika.jpg",
        name: "Deepika Padukone",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur ratione quidem iusto magnamfacilis aperiam dolores magni exercitationem nostrum nihil tenetur, cum dolorem qui error sapientesequi eaque in."
    }, {
        img: "img/deepika.jpg",
        name: "Deepika Padukone",
        content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur ratione quidem iusto magnamfacilis aperiam dolores magni exercitationem nostrum nihil tenetur, cum dolorem qui error sapientesequi eaque in."
    }];

    // FEEDBACK JSON END

})

    .controller('FormCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/form.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;
    })

    .controller('AboutCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/about-us.html");
        TemplateService.title = "Form"; //This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $scope.formSubmitted = false;

        $scope.data = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    })
    .controller('GridCtrl', function ($scope, TemplateService, NavigationService, $timeout, toastr, $http) {
        $scope.template = TemplateService.getHTML("content/grid.html");
        TemplateService.title = "Grid"; // This is the Title of the Website
        $scope.navigation = NavigationService.getNavigation();
        $timeout(function () {
            console.log('in ');
            mySwiper3 = new Swiper('.swiper-container', {
                slidesPerView: 3,
                paginationClickable: true,
                loop: true,
                autoplay: 1000,
                grabCursor: true,
                spaceBetween: 10,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                touchEventsTarget: 'container',
                breakpoints: {
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2

                    },
                    481: {
                        slidesPerView: 1
                    },
                    320: {
                        slidesPerView: 1
                    }
                }
            })
        }, 100);
        // END TEAM TABLE SWIPER


        // });



    })

    // Example API Controller
    .controller('DemoAPICtrl', function ($scope, TemplateService, apiService, NavigationService, $timeout) {
        apiService.getDemo($scope.formData, function (data) {
            console.log(data);
        });
    });