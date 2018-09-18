app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : 'pages/home.html',
    })
    .when("/section1", {
        templateUrl : "pages/section1.html",
    })
    .when("/section2", {
      templateUrl : "pages/section2.html",

    })
    .when("/section3", {
      templateUrl : "pages/section3.html",
    })
    .when("/section4", {
      templateUrl : "pages/section4.html",

    })
    .when("/about", {
      templateUrl : "pages/about.html",

    })
    .when("/section5", {
      templateUrl : "pages/section5.html",

    })
    .when("/contact", {
      templateUrl : "pages/contact.html",

    })
});

/*app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
        templateUrl : 'pages/home.html',
    })
    .when("/section1", {
        templateUrl : "pages/section1.html",
    })
    .when("/section2", {
      templateUrl : "pages/bls.html",

    })
    .when("/section3", {
      templateUrl : "pages/elearning.html",
    })
    .when("/section4", {
      templateUrl : "pages/overview.html",

    })
    .when("/about", {
      templateUrl : "pages/about.html",

    })
    .when("/section5", {
      templateUrl : "pages/elearning.html",

    })
    .when("/contact", {
      templateUrl : "pages/contact.html",

    })
});*/