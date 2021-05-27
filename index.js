

var changeInputStyle = $("input").addClass("input");


var textInputSytle = $("input").click(function(){

  changeInputStyle.removeClass("input");
  changeInputStyle.css("font-size", "0.8rem" );
 $(this).attr("value", "");



});


var mobileNavbar = $(".navbar-toggler").on("click", function(){
  var navbarMobile = $(".navbar").addClass("navbar-mobile");
  var mobileNavbarLink = $(".nav-link").addClass("mobile-nav-link");
  var textHeaddinContainer = $(".heading").addClass("mobile-heading");
  var mobileNavbarBackgound = $(".navbar-nav").addClass("mobile-navbar-background");

});
