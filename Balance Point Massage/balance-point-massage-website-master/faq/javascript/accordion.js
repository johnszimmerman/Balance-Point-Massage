$(function() {
	$('.ss_button').on('click',function() {
		if ($(this).next('.ss_content').is(":visible")) {
			$(this).next('.ss_content').slideToggle('fast');
		} else if ($(this).hasClass("scrollToBottom")){ 
			$('.ss_content').slideUp('fast');
			$(this).next('.ss_content').slideDown('fast');
			$('html, body').animate({scrollTop:$(document).height()}, 'slow');
			return false;
		} else {
			$('.ss_content').slideUp('fast');
			$(this).next('.ss_content').slideDown('fast');
		}
			
	});
});

