;
(function ($) {

 	$.fn.validateForm = function() {
 		
 		//what if you want to validate at any point not just submit but for ajax?
        $(this).submit(function(event) {
        	//Should validation message be generate from outside?
        	var $panel = $(".fixed-panel").find(".fixed-panel-content");
            var $txtbox = $(this).find(":text"), $radio = $(this).find(":radio"), $select = $(this).find("select"), proceed = true;
            var radio_error = 1;
            
            $('.text-error').remove();
            $('.select-error').remove();
            $('.radio-error').remove();
            $panel.empty();
            
            
            $txtbox.each(function() {
        		if($(this).val() == "") {
        			var name = $(this).attr('name'), names = name.match(/(.+?)\[(.+?)\]/), selector = "." + names[1] + "-" +names[2], title = "* " + names[1] + " " + lang[names[2]] + " field is required";
        			proceed = false;
        			//This can't be hardcoded
        			$(selector).parents('.form-item').append("<p class='text-error col-xs-12 col-sm-12 col-md-12 col-lg-12'>" + title + "</p>");
        		}   	
    		});
    		
    		
    		$select.each(function() {
        		if($(this).val() == "") {
        			var name = $(this).attr('name'), names = name.match(/(.+?)\[(.+?)\]/), selector = "." + names[1] + "-" +names[2], title = "* " + names[1] + " " + lang[names[2]] + " field is required";
        			$(selector).parents('.form-item').append("<p class='select-error col-xs-12 col-sm-12 col-md-12 col-lg-12'>" + title + "</p>");
        			proceed = false;
        			
        		}   	
    		});
    		
    		
    		$radio.each(function() {
        		var name = $(this).attr("name");
        		var error_id = 'radio-error-'+ radio_error;
        		var error_title = "Radio button error " + radio_error;
        		
				if($("input:radio[name='"+name+"']:checked").length == 0)
				{
					$checklist = $(this).parents('.checklist-item');
					if($checklist.find(".radio-error").length == 0) {
					
						$checklist.append("<p id='"+ error_id +"' class='radio-error col-md-5'>* You must select one of Yes/No/NA</p>");
						$panel.append("<a href='#"+error_id+"'><i class='fa fa-arrow-right' aria-hidden='true'></i> Navigate to "+error_id+" : You must select one of Yes/No/NA</p>");
						radio_error++;
					}
					
					proceed = false;
				}
				
				
    		});
    		
            return proceed;
        });
    };

}(jQuery));
