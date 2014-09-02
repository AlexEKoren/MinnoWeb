var xmlhttp;

function loadXMLDoc(sen,url,cfunc) {
	if (window.XMLHttpRequest) {
		xmlhttp=new XMLHttpRequest();
	}
	else {// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=cfunc;
	xmlhttp.open("POST",url,true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(sen);
}

function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
}

$('#form-submit-button').click(function() {
	var name = document.forms["alpha-signup"]["name"].value;
	var email = document.forms["alpha-signup"]["email"].value;
	var code = document.forms["alpha-signup"]["referral-code"].value;
	if (name.length > 0 && validateEmail(email)) {
		$.ajax({
			type: "POST",
			url: '/minno/php/alpha.php',
			dataType: 'json',
			data: {name: name, sender: email, code: code},
			success: function(status) {
				$('.form-container').fadeOut(250);
				$('#form-completed').delay(250).fadeIn(250);
			}, error: function(status) {
				$('.form-container').fadeOut(250);
				$('#form-completed').delay(250).fadeIn(250);
			}
		});
	} else {
		alert('Make sure all the fields are filled out correctly!');
	}
});

$('#question-submit-button').click(function() {
	var name = document.forms["question-input"]["name"].value;
	var email = document.forms["question-input"]["email"].value;
	var question = document.forms["question-input"]["question"].value;
	if (name.length > 0 && validateEmail(email) && question.length > 0) {
		$.ajax({
			type: "POST",
			url: '/minno/php/mail.php',
			dataType: 'json',
			data: {name: name, sender: email, question: question},
			success: function(status) {
				$('.form-container').fadeOut(250);
				$('#form-completed').delay(250).fadeIn(250);
			}, error: function(status) {
				$('.form-container').fadeOut(250);
				$('#form-completed').delay(250).fadeIn(250);
			}
		});
	} else {
		alert('Make sure all the fields are filled out correctly!');
	}
});
