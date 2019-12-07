$(window).on('load', function() {
   $('#loading-modal').fadeOut(1000);
});

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

	// Toggle additional questions based on guest attending
	$('#wedding-response').change(function() {
		console.log('click');
		if ($('#wedding-yes').is(':checked')) {
			$('#rsvp-attending').removeClass('d-none');
		} else {
			$('#rsvp-attending').addClass('d-none');
			$('#guest-names').prop('required', false);
		}
	});

	// Show guest names field when number of guests is 2+
	$('#num-guests').change(function() {
		if ($(this).val() == '1') {
			$('#guest-names-container').addClass('d-none');
			$('#guest-names').prop('required', false);
		} else {
			$('#guest-names-container').removeClass('d-none');
			$('#guest-names').prop('required', true);
		}
	});

	// Submit rsvp form
	$('#rsvp-form').submit(function(event) {
		event.preventDefault();

		let data = {
			name: $('#name').val(),
			attending: $('.wedding-radio:checked').val(),
			num_guests: $('.wedding-radio:checked').val() == 'yes' ? $('#num-guests').val() : null,
			guest_names: $('#guest-names').val(),
			drinks: $('.drinks-radio:checked').val(),
			songs: $('#songs').val(),
			notes: $('#notes').val()
		};
		
		$.ajax({
			type: 'POST',
			url: '/rsvp',
			dataType: 'json',
			data: JSON.stringify(data),
			contentType: 'application/json',
			success: function (result) {
				$('#rsvp-form-container').addClass('d-none');
				$('#rsvp-form-success').removeClass('d-none');
			},
			error: function (request, status, error) {
				console.log(error);
			}
		});

	});

});