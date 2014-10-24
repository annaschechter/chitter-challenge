$(document).ready(function() {

	$('#signing-in').hide();
	$('#signed-in').hide();
	$('#signing-up').hide();


	$('#logo').on('click', function(){
		window.location = ("/");
	});

	$('#login').on('click', function(){
		$('#signing-in').show();

	// // 	$('#sign-in').on('click', function() {
	// // 		var email = $('#email').val();
	// // 		var password = $('#password').val();
	// // 		$.get("/users/", function(data){
	// // 			var userId = data.users.;
	// // 			$('#signed-in').append(data.currentUser.name)
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
		// $('#sign-up').on('click', function() {
		// 	var fullName = $('#full-name').value();
		// 	var userName = $('#user-name').value();
		// 	var emailCr = $('#email-cr').value();
		// 	var passwordCr = $('#password-cr').value();
		// 	$.post("/users/new", function(data) {
		// 		console.log(data["users"]);
		// 	});

		// });
	});

	$('#sign-out').on('click', function() {
		$('#signed-in').hide();
		window.location = ("/");
	});
});
