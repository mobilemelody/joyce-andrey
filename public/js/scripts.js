$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();

  $("[data-toggle='menu']").click(function() {
    var selector = $(this).data("target");
    $(selector).toggleClass('in');
	});

	$('a.nav-link').on("click", function() {
		$('#menu-items-container').collapse('hide');
	});
});