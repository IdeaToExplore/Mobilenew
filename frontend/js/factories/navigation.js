
var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

myApp.factory('NavigationService', function ($http) {
    var navigation = [{
            name: "Home",
            classis: "active",
            anchor: "home",
            subnav: [{
                name: "Subnav1",
                classis: "active",
                anchor: "home"
            }]
        }, {
            name: "Form",
            classis: "active",
            anchor: "form",
            subnav: []
        },
        {
            name: "Grid",
            classis: "active",
            anchor: "grid",
            subnav: []
        }
    ];

    return {
        getNavigation: function () {
            return navigation;
        },
    

    apiCall: function (url,callback) {
            $http.post(adminurl + url).then(function (data) {
                data = data.data;
                callback(data);

            });
        },

    apiCallWithData: function (url,formData,callback) {
            $http.post(adminurl + url,formData).then(function (data) {
                data = data.data;
                callback(data);
            });
        },
    };
});