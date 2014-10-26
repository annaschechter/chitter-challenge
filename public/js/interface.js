$(document).ready(function() {

	$('#signing-in').hide();
	$('#signed-in').hide();
	$('#signing-up').hide();
	$('#posting-peep').hide();


	$('#logo').on('click', function(){
		window.location = ("/");
	});

	$('#login').on('click', function(){
		$('#signing-in').show();
		$('#sign-in').on('click', function() {
			var email = $('#email').val();
			var password = $('#password').val();
			$.getJSON("/users/"+email+"/"+password, function(user) {
				var name = user.name;
				var user_name = user.user_name;
				$.post('/sessions', {name: name, user_name: user_name});
				$('#name-signed-in').text(name);
			});

			$('#signing-in').hide();
			$('#signed-in').show();
		});
	});
	

	$('#join').on('click', function(){
		$('#signing-up').show();
		$('#sign-up').on('click', function() {
			$.post('/users', {
				name: $('#full-name').val(),
				user_name: $('#user-name').val(),
				email: $('#email-create').val(),
				password: $('#password-create').val(),
			});
			$.post('/sessions', {name: $('#full-name').val(), user_name: $('#user-name').val()});
			$('#name-signed-in').text($('#full-name').val());
			$('#signed-in').show();
			$('#signing-up').hide();
		});
	});
	

	$('#sign-out').on('click', function() {
		$.post('/sessions', {name: null, user_name: null});
		$('#name-signed-in').text("");
		$('#signed-in').hide();
		window.location = ("/");
	});

	$('#post-a-peep').on('click', function() {
		$('#posting-peep').show();
		$('#post-a-peep').hide();
	});

	$.getJSON('api/peeps',function(data){
		data.reverse();
		$.each(data, function(index, peep){
			var source = $("#peepTemplate").html();
			var template = Handlebars.compile(source);
			$('#peeps').append(template(peep));
		});
	});

	$('#post-this').on('click', function() {
		// $.getJSON('/sessions', );
		$.post('/api/peeps', {message: $('#content').val()});
	});

});
