// JavaScript Document

$(document).ready(function(){

	
	
	
	/// add class to .entry a ///
		
//	$("div.entry p").addClass("load-icon");
	
	$("div.entry a").addClass("loading hide fadeIn");
	
	$("div.entryabout img").addClass("loading hide fadeIn");
	
	$("div.entryabout").addClass("loading hide fadeIn");
	
	$("div.entrywork img").addClass("loading hide fadeIn");
	
	$("div.entryin img").addClass("loading hide fadeIn");
	
	$("div.entryex").addClass("loading hide fadeIn");
	
	$("div.entry span").addClass("loading hide fadeIn");


	/// add REL to .entry a ///
	
	$("div.entry a").each(function() {
		this.rel += 'pop';
	});
	

	/// back to top ///
	
	// hide #back-top first
	$("#scroll-hid").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 250) {
				$('#scroll-hid').fadeIn();
			} else {
				$('#scroll-hid').fadeOut();
			}
		});

		// scroll body to 0px on click
		$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
	
	

	/// loader ///
	
	$(".hide").stop().animate({"opacity": 0}, 0);
	$('.loading').hide();

	$(window).load( function() {
		/* fade div inhalt/content */
		$('.loading').show();
		$(".fadeIn").stop().delay(600).animate({"opacity": 1}, 600);
	});
	
	
	
	
	
	
		
	

});