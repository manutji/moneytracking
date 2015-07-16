$(document).ready(function(){
	// alert('xxx');
	 $( '.desktop-input' ).hide();

	$('#menu-toggle').on('click', function(e){
		$('html').toggleClass('menu-active');
	  	e.preventDefault();
	});

	$( '.icon' ).click(function() {
	    $( '.cal-bg' ).slideToggle(  );
	});

	$( '.icon-expenses' ).click(function() {
	    $( '.desktop-input' ).toggle();
	});

	$('.dropdown-toggle').dropdown();

	$('.graph-category').hide();

	$( '.btn-category' ).click(function() {
		$('.graph-date').hide();
	    $('.graph-category').show();
	});

	$("[name='my-checkbox']").bootstrapSwitch();




})
