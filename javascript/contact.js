$(document).ready(function () {

$('#form').hide();     // hide form on load
$('#thanks_msg').hide();       // hide thanks section on load

$('#image-text').click(function() {
  $('#form').show(1000);             // on click, show the form
  $('#image-text').hide();             // hide everything else when form is on display
  $('.middle').hide();
  $('.image').hide();
})

$('form').submit(function() {            // on submit of the form, validating input


  // validating the form
  var ok = true;
  var userEmail = $('#email').val();         // store user's e-mail input in userEmail

  if($('#name').val() == "" || $('#name').val() == null)  {
  $('#name').focus();
  ok = false;
}

else if($('#email').val() == "" || $('#email').val() == null || !validateEmail(userEmail))
  {
          $('#email').focus();
          alert("Enter a valid email address");
          ok = false;
   }
else if($('#message').val() == "" || $('#message').val() == null)
   {
         $('#message').focus();
        ok = false;
   }

// end of validation
if(ok){           // if validation is done, display thanks message
  $('#image-text').hide();
  $('.middle').hide();
  $('.image').hide();
  $('#form').hide();
  $('#contact-msg').hide();
   $('#thanksCustomer').html($('#name').val());
   $('#thanksEmail').html($('#email').val());
  $('#thanks_msg').show();
}
  return false;
});

});

function validateEmail(userEmail) {
  var emailPattern = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  if(emailPattern.test(userEmail)) {
    return true;
  }
  else {
    return false;;
  }
}
