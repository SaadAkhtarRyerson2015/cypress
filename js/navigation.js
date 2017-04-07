$(function() {
	
	$(".nav-responsive").click(function() {
	  	$(".nav-link").slideToggle("slow");
	});
	

	$(".nav-link-sub").click(function(event) {
		event.preventDefault();
		
		var $this = $(this), links = $this.data("links").split(' '), url = HTTP_CONN + "://" + HOST_NAME + SCRIPT_NAME; 
	  	var $submenu = $(".sub-menu");
	  	var column_div = "<div class='sub-menu-links col-xs-12 col-sm-12 col-md-1 col-lg-1'>";
	  	
	  	$submenu.empty();
	  	$.each(links, function( index, value ) {
  			$submenu.append(column_div+"<a href='"+url+"/"+value+"'>"+value+"</a></div>");
		});
	  	$submenu.slideToggle("slow");
	  	
	});
	
});