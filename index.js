// when the user hits update

// e.preventDefault()

// get refer to input element 

// get val from input

// add the val as a class to the body tag

var imageNames = ['austin','la','nyc','sf','sydney'];


$('#submit-btn').on('click', function(e) {
	
	e.preventDefault();

	var input = $('#city-type');
	var value = input.val();
	
	if( value == 'austin' || value == 'Austin' || value == 'AUSTIN') {
		$('body').attr('class','austin');
	}
	else if( value == 'la' || value == 'LA' || value == 'los angelos' || value == 'LOS ANGELOS' || value == 'Los Angelos') {
		$('body').attr('class','la');
	}
	else if( value == 'nyc' || value == 'new york city' || value == 'new york' || value == 'NYC' || value == 'New York City' || value == 'NEW YORK CITY' || value == 'New York' || value == 'NEW YORK') {
		$('body').attr('class','nyc');
	}
	else if( value == 'sf' || value == 'SF' || value == 'san francesco' || value == 'San Francesco' || value == 'SAN FRANCESCO') {
		$('body').attr('class','sf');
	}
	else if( value == 'sydney' || value == 'Sydney' || value == 'SYDNEY') {
		$('body').attr('class','sydney');
	}
});
