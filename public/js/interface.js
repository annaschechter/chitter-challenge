$(document).ready(function() {

	$('#signing-in').hide();
	$('#signed-in').hide();
	$('#signing-up').hide();


	$('#logo').on('click', function(){
		window.location = ("/");
	});

	$('#login').on('click', function(){
		$('#signing-in').show();

		// $('#sign-in').on('click', function() {
		// 	var email = $('#email').val();
		// 	var password = $('#password').val();
		// 	$.get("/users", function(data){
		// 		var userId = data.users.email;
		// 		$('#signed-in').append(data.currentUser.name)
	// // 			// $.post("/sessions/new", function(data) {
	// // 			// 	data.currentUser.id = userId;	
	// // 			// });
	// // 		});
	// // 		$('#signing-in').hide();
	// // 		$('#signed-in').show();
	// // 	});
	});

	$('#join').on('click', function(){
		$('#signing-up').show();
		$('#sign-up').on('click', function() {
			$.post("/users", {
				name: $('#full-name').val(),
				user_name: $('#user-name').val(),
				email: $('#email-create').val(),
				password: $('#password-create').val(),
			});
			$('#signed-in').append($('#full-name').val());
			$('#signed-in').show();
			$('#signing-up').hide();
		});
	});

	$('#sign-out').on('click', function() {
		$('#signed-in').hide();
		window.location = ("/");
	});
});
