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
	var name=document.forms["pro-input"]["name"].value;
	var email=document.forms["pro-input"]["email"].value;
	var skills=document.forms["pro-input"]["skills"].value;
	if (name.length > 0 && validateEmail(email) && skills.length > 0) {
		$.ajax({
			url: "https://docs.google.com/forms/d/1SJ2gNFKm6IYl50a7YuprxAxNtgVm_5356C6uhefbGQA/formResponse",
			data: {"entry.129792090" : name, "entry.1353641674" : email, "entry.755351706" : skills},
			type: "POST",
			dataType: "xml",
			statusCode: {
				0: function (){
					$('.form-container').fadeOut(250);
					$('#form-completed').delay(250).fadeIn(250);
				},
				200: function (){
					$('.form-container').fadeOut(250);
					$('#form-completed').delay(250).fadeIn(250);
				},
				404: function() {
					alert( "Sorry! Something went wrong. Please try again. " );
				}
			}
		});
	}
});

$('#question-submit-button').click(function() {
	console.log('asked question');
	var name = document.forms["question-input"]["name"].value;
	var email = document.forms["question-input"]["email"].value;
	var question = document.forms["question-input"]["question"].value;
	if (name.length > 0 && validateEmail(email) && question.length > 0) {
		console.log('inputs OK');
		$.ajax({
			type: "POST",
			url: '/minno/php/mail.php',
			dataType: 'json',
			data: {name: name, sender: email, question: question},
			success: function(status) {
				$('.form-container').fadeOut(250);
				$('#form-completed').delay(250).fadeIn(250);
			}, error: function(error) {
				alert( "Sorry! Something went wrong. Please try again. " );
			}
		});
	}
});