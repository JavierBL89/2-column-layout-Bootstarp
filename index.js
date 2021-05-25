

var changeInputStyle = $("input").addClass("input");


var textInputSytle = $("input").click(function(){

  changeInputStyle.removeClass("input");
  changeInputStyle.css("font-size", "0.8rem" );
 $(this).attr("value", "");

})
