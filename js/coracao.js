var main = function() {

  $(".coracao").click(function() {
	  if($(".coracao").hasClass("active")){
	  	$('#cor').html('Kimberly Rosa Ranger        &#9825');
	  }else{
	  	$('#cor').html('Kimberly Rosa Ranger        &#9829');
	  }
  });

  $(".coracao").click(function() {
    $(this).toggleClass("active");
  });


  $("#fotodeck").click(function() {
    if($(".deck").hasClass("active")){
      $(location).attr('href', 'mural-sel2.html');
    }
  });



  $("#fotodeck").click(function() {
    $(this).attr("src","img/deck2.png");
    $(".deck").addClass("active");
  });

   $("#fotodeck").ontouchmove(function() {
    $(this).attr("src","img/deck2.png");
  });


  $("#fotodeck").on("swipeleft",function(){

  	$(this).attr("src","img/deck2.png");

  });



};

$(document).ready(main);


