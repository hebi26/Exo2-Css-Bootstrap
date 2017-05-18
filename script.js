$(document).ready( function () {

   $('#features').click(function() {
     $('html,body').animate({scrollTop: $(".container1").offset().top}, 'slow');
   });

   $('#design').click(function() {
     $('html,body').animate({scrollTop: $(".container2").offset().top}, 'slow');
   });

   $('#team').click(function() {
     $('html,body').animate({scrollTop: $(".container4").offset().top}, 'slow');
   });

   $('#section').click(function() {
     $('html,body').animate({scrollTop: $(".container5").offset().top}, 'slow');
   });

   $('#form').click(function() {
     $('html,body').animate({scrollTop: $(".container6").offset().top}, 'slow');
   });
   
   $('#blog').click(function() {
     $('html,body').animate({scrollTop: $(".container7").offset().top}, 'slow');
   });
})
