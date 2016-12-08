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
    $(location).attr('href', 'depois.html');
  });

  $(document).on("swipeleft",function(){

    $(location).attr('href', 'depois.html');

  });

  $(document).on("pagecreate",function(){
    $(".a").on("swipeleft",function(){
      $(location).attr('href', 'depois.html');
    });
  });  

};

$(document).ready(main);


