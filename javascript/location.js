$(document).ready(function(){

//code to prevent form from reloading/submitting the page
		$("#form").submit(function(){

//validating the form			

var ok = true;

if($('#field_city').val() == "" || $('#field_city').val() == null)  {
$('#field_city').focus();
ok = false;
}

else if($('#field_address').val() == "" || $('#field_address').val() == null)
{
   $('#field_address').focus();
   ok = false;
}
else if($('#field_PC').val() == "" || $('#field_PC').val() == null)
{
$('#field_PC').focus();
ok = false;
}

return false;

});
});

//code to render directions

function enter(){
	var varFieldCity = $('#field_city').val();
  	var varfield_address = $('#field_address').val();
  	var varfield_PC = $('#field_PC').val();
	var inputAddress= varfield_address + ", "+ varFieldCity + ", "+ varfield_PC;
	var iframeVar = document.getElementById("iframe");
	iframeVar.src = "https://www.google.com/maps/embed/v1/directions?key=AIzaSyB-_hQ1jJbLvEGWUK4sYD412b194evXlbw    &origin="+ inputAddress + "&destination=43.744136,-79.211772";
	return false;
}




