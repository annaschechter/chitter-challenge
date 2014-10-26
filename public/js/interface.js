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
			$.getJSON('/users/'+email+'/'+password, function(user) {
				var name = user.name;
				var user_name = user.user_name;
				var id = user.id;
				$.post('/sessions', {name: name, user_name: user_name, id: id});
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
			$.getJSON('/users/'+$('#email-create').val()+"/"+$('#password-create').val(), function () {
				var name = user.name;
				var user_name = user.user_name;
				var id = user.id;
				$.post('/sessions', {name: name, user_name: user_name, id: id});
				$('#name-signed-in').text(name);
			});

			$('#signed-in').show();
			$('#signing-up').hide();
		});
	});
	

	$('#sign-out').on('click', function() {
		$.post('/sessions', {name: "", user_name: "", id: ""});
		$('#name-signed-in').text("");
		$('#signed-in').hide();
		window.location = ("/");
	});

	$('#post-a-peep').on('click', function() {
		$.getJSON('/sessions', function(data) {
			if(data[0] === "") {
				$('#errors').text("You need to be signed in to post on Chitter!!!");
			} else {
				$('#posting-peep').show();
				$('#post-a-peep').hide();
			};
		});

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
		if($('#content').val() === "") $('#errors').text("You cannot post an empty message!")
		else {
			userName = data[0];
			nameUser = data[1];
			userId = data[2];
			$.post('/api/peeps', {message: $('#content').val(), user_id: userId});
		};
	});

});
