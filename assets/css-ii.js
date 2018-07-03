$( document ).ready(function() {
   
	$("#hamb").click(function(e) {
		e.preventDefault();
		$("#hamb").toggleClass('open');
		$("#menu").toggleClass('open');
	});

	$("#menu a").click(function(e) {
		e.preventDefault();
		$("#hamb").toggleClass('open');
		$("#menu").toggleClass('open');
	});

	$("#side").click(function(e) {
		e.preventDefault();
		$("#side").toggleClass('open');
	});


	$("#solapas li:first-of-type a").click(function(e) {
		e.preventDefault();
		$("section").removeClass('visible');
		$("section:first-of-type").addClass('visible');
	});

	$("#solapas li:last-of-type a").click(function(e) {
		e.preventDefault();
		$("section").removeClass('visible');
		$("section:last-of-type").addClass('visible');
	});


});