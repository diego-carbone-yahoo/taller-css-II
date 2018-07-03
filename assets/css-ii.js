$( document ).ready(function() {
   
	$("#hamb").click(function(e) {
		e.preventDefault();
		$("#hamb").toggleClass('open');
		$("#menu").toggleClass('open');
	});

	$("#side").click(function(e) {
		e.preventDefault();
		$("#side").toggleClass('open');
	});


});