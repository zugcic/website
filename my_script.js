/*Navigacija*/
var previous_pos=window.pageYOffset;
$(document).ready(function () {
  window.onscroll=function(){
       var current_pos=window.pageYOffset;

      if (previous_pos > current_pos) {
          $("#my_navbar").fadeIn("slow");
      } else {
          $("#my_navbar").fadeOut("slow");
      }
      previous_pos=current_pos;
  }
});





