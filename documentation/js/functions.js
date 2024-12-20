
$(document).ready(function(){
    
	/* Go to top button
	=========================================*/
	$(window).on("scroll", function(){
		if($(window).scrollTop() > 0){
			$(".go-to-top").css("opacity", 1);
		}else{
			$(".go-to-top").css("opacity", 0);
		}
	});
	
	/* Scroolling
	=========================================*/
	smoothScroll.init({
		offset: 150,
		speed: 500
	});
	
	/* Clipboard actions
	=========================================*/
	/* Adds a confirmation div in the DOM Three */
	$("body").append("<div class='copy-confirmation'>Copied!</div>");
	function copyConfirmation(){
		$(".copy-confirmation").fadeIn(250).delay(1000).fadeOut(250);
	}
	
	/* Treats the next sibling as a target */
	var clipboard = new Clipboard(".snippet-btn", {
		target: function(trigger) {
			return trigger.nextElementSibling;
		}
	});
	
	/* Shows the confirmation in a successful case */
	clipboard.on("success", function(e){
		e.clearSelection();
		copyConfirmation();
	});
});