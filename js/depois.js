var main = function() {

  $(".coracao").click(function() {
	  if($(".coracao").hasClass("active")){
	  	$('#cor').html('&#9825');
	  }else{
	  	$('#cor').html('&#9829');
	  }
  });

  $(".coracao").click(function() {
    $(this).toggleClass("active");
  });

  $(".pontos").click(function() {
    $(location).attr('href', 'antes.html');
  });


};

$(document).ready(main);


