// Setup and apply Datepicker UI function.
$( function() {
    $( "#datepicker" ).datepicker();
  } );

  //Load Window and Setup event listener on the form.
window.onload = function(){
document.getElementById("comradeform").addEventListener('submit', submitForm);

  //Function that gets triggered upon form submission.
		function submitForm() {
		event.preventDefault();// Stop form from continueing
		
		//Load form values into variables
        var formName = document.getElementById('name').value;
        var formEmail = document.getElementById('email').value;
        var formDate = document.getElementById('datepicker').value;
		var formMessage = document.getElementById('message').value;
	
		//Hide the form, show the invoices
		document.getElementById("form").style.display = "none";
        document.getElementById('hidebooking').style.display = "block";
		
		//Load variable values into the invoice
		document.getElementById('displayname').innerHTML = formName;
		document.getElementById('displayemail').innerHTML = formEmail;
		document.getElementById('displaydate').innerHTML = formDate;
		document.getElementById('displaymessage').innerHTML = formMessage;
        return false; // Stop form submission.

    }


}



