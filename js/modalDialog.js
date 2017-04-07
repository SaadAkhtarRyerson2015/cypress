;
(function ($) {
	
	var defaults = {
        title: "default",
        remote: false,
        content: false,
        remote: false,
        params: false,
        submitButtonText: "Submit",
        submit: false,
	};
	
	function ModalDialog(element, options) 
	{
		var widget = this, $modal = $('#the-modal');

        widget.config = $.extend(true, {}, defaults, options);
        widget.element = element;
        widget.mdialog = $modal;
        
		this.init();
	}
	
	ModalDialog.prototype.init = function() 
	{
		var $this = this;

	 	$this.element.on("click.modalDialog", function() {
	 		$this.header();
	 		$this.footer();
			$this.remote();
			$this.shown();
		});
	}
	
	ModalDialog.prototype.header = function() 
	{
	 	this.mdialog.find('#the-modal-label').text(this.config.title);
	}
	
	ModalDialog.prototype.footer = function() 
	{
	 	this.mdialog.find('.modal-submit-button').text(this.config.submitButtonText);
	}
	
	
	ModalDialog.prototype.remote = function() 
	{
		var $this = this;
		
		if($this.config.remote) {
			var params = $.isFunction($this.config.params) ? $this.config.params.call($this.element) : $this.config.params;

		 	$.post($this.config.remote, params).done(function(data) {
	    		$this.mdialog.find('.modal-body').html(data);
	    		$this.mdialog.modal('show');
	  		});
		} else {
			$this.mdialog.find('.modal-body').html($this.config.content);
	    	$this.mdialog.modal('show');
		}
		
	}
	
	ModalDialog.prototype.shown = function() 
	{
		var $this = this;
	 	
	 	this.mdialog.off('.modalDialog').on('click.modalDialog', '.modal-submit-button', function() {
            $this.config.submit.call($this.element, $this.mdialog);
        });
	}
	
 	$.fn.modalDialog = function(options) {
		this.each(function() {
			event.preventDefault();
       		new ModalDialog($(this), options);
       		return $(this);
    	});
    };
    
}(jQuery));
