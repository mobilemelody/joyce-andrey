$(document).ready(function(){
	// Initialize tooltips for dot nav menu
  $("[data-toggle='tooltip']").tooltip();

  // Initialize scrollspy for dot nav menu
	$('body').scrollspy({ target: '#dot-nav-items' });

  // Hide menu when item is clicked
	$('a.nav-link').on("click", function() {
		$('#menu-items-container').collapse('hide');
	});

	// Flip info card when button is clicked
	$('.flip-button').on('click', function() {
		$(this).closest('.info-card').toggleClass('flipped');
	});

	// Remove active class from sub-menu item when another one is clicked
	$("[data-toggle='tab']").click(function() {
		$('.active').removeClass('active');
	});

	$('#rsvp-form').submit(function(event) {
		event.preventDefault();
		
		$.ajax({
			global: false,
			type: 'POST',
			url: '/',
			dataType: 'html',
			data: {
				name: $('#name').val(),
				num_guests: $('#num_guests').val(),
				guest_names: $('#guest_names').val(),
				drinks: $('#drinks').val(),
				songs: $('#songs').val(),
				notes: $('#notes').val()
			},
			success: function (result) {
				console.log(result);
				$('#rsvp-form-container').addClass('d-none');
				$('#rsvp-form-success').removeClass('d-none');
			},
			error: function (request, status, error) {
				console.log(error);
			}
		});

	});

});