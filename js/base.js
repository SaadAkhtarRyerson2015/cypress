$(function() {
		
	$(".validate-form").validateForm();
	
	$(".add-room").modalDialog({
		
		title: "New Room",
		content: $(".add-room-form").html(),
		submitButtonText: "Create",
		submit: function($modal)
		{	
			$this = $(this), url = HTTP_CONN + "://" + HOST_NAME + SCRIPT_NAME + "/ajax/add_room";
			building = $modal.find(".room-building").val(); 
			name = $modal.find(".room-name").val();			
			params = { name : name, building : building };

			if(name && building) {
				$.post(url, params).done(function(data) {
	    			var data = jQuery.parseJSON(data);
	    			if(data.success) {
						$(".submission-rid").find(".rooms-option").remove();
						$.each(data.list, function( key, value ) {
							var selected_option = (value.name == name) ? true : false;
						  	$(".submission-rid").append($('<option>', {
							    value: value.id,
							    text: value.name,
							    class : "rooms-option",
							    selected : selected_option
							}));
						});
						$modal.modal('hide');
	    			}
	  			});
			} 
		}
	});
	
	$(".add-inspector").modalDialog({
		
		title: "New Inspector",
		content: $(".add-inspector-form").html(),
		submitButtonText: "Create",
		submit: function($modal)
		{	
			$this = $(this), url = HTTP_CONN + "://" + HOST_NAME + SCRIPT_NAME + "/ajax/add_inspector";
			name = $modal.find(".inspector-name").val(); 
			email = $modal.find(".inspector-email").val(); 
			extension = $modal.find(".inspector-extension").val();
			 
			params = { name : name, email : email, extension : extension};

			if(name && email && extension) {
				$.post(url, params).done(function(data) {
	    			var data = jQuery.parseJSON(data);
	    			if(data.success) {
						$(".submission-inspid").find(".inspectors-option").remove();
						$.each(data.list, function( key, value ) {
							var selected_option = (value.name == name) ? true : false;
						  	$(".submission-inspid").append($('<option>', {
							    value: value.id,
							    text: value.name + " / " + value.email + " / " + value.extension,
							    class : "inspectors-option",
							    selected : selected_option
							}));
						});
						$modal.modal('hide');
	    			}
	  			});
			} 
		}
	});

});